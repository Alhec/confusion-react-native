import React, {Component} from 'react';
import {View, Text, ScrollView, FlatList, Modal, StyleSheet, Button, TextInput, Alert, PanResponder,Share} from 'react-native';
import { Card, Icon, Rating, Input} from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import { postFavorite, postComment } from '../redux/ActionCreators';
import * as Animatable from 'react-native-animatable';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        favorites: state.favorites
    }
}

const mapDispatchToProps = dispatch => ({
    postFavorite: (dishId) => dispatch(postFavorite(dishId)),
    postComment:(id,dishId,rating,author,comment)=> dispatch(postComment(id,dishId,rating,author,comment))
})

function RenderDish(props){
    const dish = props.dish;
    handleViewRef = ref => this.view = ref;

    const shareDish = (title, message, url) => {
        Share.share({
            title: title,
            message: title + ': ' + message + ' ' + url,
            url: url
        },{
            dialogTitle: 'Share ' + title
        })
    }

    const recognizeDrag = ({ moveX, moveY, dx, dy }) => {
        if ( dx < -200 )
            return true;
        else
            return false;
    }

    const recognizeComment =({ moveX, moveY, dx, dy })=>{
        if ( dx > 200 )
            return true;
        else
            return false;
    }

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (e, gestureState) => {
            return true;
        },
        onPanResponderGrant: () => {
            this.view.rubberBand(1000)
                .then(endState => console.log(endState.finished ? 'finished' : 'cancelled'));
        },
        onPanResponderEnd: (e, gestureState) => {
            console.log("pan responder end", gestureState);
            if (recognizeDrag(gestureState)){
                Alert.alert(
                    'Add Favorite',
                    'Are you sure you wish to add ' + dish.name + ' to favorite?',
                    [
                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    {text: 'OK', onPress: () => {props.favorite ? console.log('Already favorite') : props.onPress()}},
                    ],
                    { cancelable: false }
                );
            }
            if(recognizeComment(gestureState)){
                props.onPressComment()
            }
            return true;
        }
    })
    if(dish != null){
        return (
            <Animatable.View animation="fadeInDown" duration={2000} delay={1000} {...panResponder.panHandlers} ref={this.handleViewRef}>
            <Card
            featuredTitle={dish.name}
            image={{uri: baseUrl + dish.image}}>
                <Text style={{margin:10}}>
                    {dish.description}
                </Text>
                <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <Icon
                    raised
                    reverse
                    name={ props.favorite ? 'heart' : 'heart-o'}
                    type='font-awesome'
                    color='#f50'
                    onPress={() => props.favorite ? console.log('Already favorite') : props.onPress()}
                    />
                    <Icon
                    raised
                    reverse
                    name='pencil'
                    type='font-awesome'
                    color='#512DA8'
                    onPress={() => props.onPressComment()}
                    />
                <Icon
                            raised
                            reverse
                            name='share'
                            type='font-awesome'
                            color='#51D2A8'
                            style={styles.cardItem}
                            onPress={() => shareDish(dish.name, dish.description, baseUrl + dish.image)} />
                </View>

            </Card>
            </Animatable.View>
        )
    }
    else {
        return (<View></View>)
    }
}

function RenderComments(props) {

    const comments = props.comments;
            
    const renderCommentItem = ({item, index}) => {
        
        return (
            <View key={index} style={{margin: 10}}>
                <Text style={{fontSize: 14}}>{item.comment}</Text>
                <Text style={{fontSize: 12}}>{item.rating} Stars</Text>
                <Text style={{fontSize: 12}}>{'-- ' + item.author + ', ' + new Date(item.date).toLocaleDateString("en-US",{  year: 'numeric', month: 'long', day: 'numeric' })} </Text>
            </View>
        );
    };
    
    return (
        <Animatable.View animation="fadeInUp" duration={2000} delay={1000}>   
        <Card title='Comments' >
        <FlatList
            data={comments}
            renderItem={renderCommentItem}
            keyExtractor={item => item.id.toString()}
            />
        </Card>
        </Animatable.View>

    );
}


class Dishdetail extends Component{

    constructor(props) {
        super(props);
        this.state = {
            rating: 5,
            author: '',
            comment:'',
            showModal: false
        }
    }

    toggleModal() {
        this.setState({showModal: !this.state.showModal});
    }

    resetForm() {
        this.setState({
            rating: 5,
                author: '',
                comment:'',
                showModal: false
        });
    }

    markFavorite(dishId) {
        this.props.postFavorite(dishId)
    }

    sendComment(dishId){
        console.log(this.state.comment);
        this.props.postComment(this.props.comments.comments.length, dishId,this.state.rating,this.state.author,this.state.comment);
    }
    render(){
        const {dishId} = this.props.route.params;
        return(
            <FlatList
            ListHeaderComponent={
                <>
                    <RenderDish dish= {this.props.dishes.dishes[+dishId]}
                    favorite={this.props.favorites.some(el => el === dishId)}
                    onPress={() => this.markFavorite(dishId)}
                    onPressComment={()=> {this.toggleModal();}}
                />
                <RenderComments comments={this.props.comments.comments.filter((comment) => comment.dishId === dishId)}/>
                <Modal animationType = {"slide"} transparent = {false}
                    visible = {this.state.showModal}
                    onDismiss = {() => this.toggleModal() }
                    onRequestClose = {() => this.toggleModal() }>
                    <View style = {styles.modal}>
                        <Rating showRating   ratingCount={5} startingValue={5} onFinishRating={(setRating)=> this.setState({rating:setRating})}  />
                        <View style={{flexDirection:'row', marginTop:20}}>
                            <Input
                                placeholder="Author"
                                onChangeText={text => this.setState({author:text})}
                                leftIcon={
                                    <Icon name='user-o' type='font-awesome' size={40} />
                                }
                            />
                        </View>
                        <View style={{flexDirection:'row', marginTop:20}}>
                            <Input
                                placeholder="Comment" 
                                onChangeText={text => this.setState({comment:text})}
                                leftIcon={
                                    <Icon name='comment-o' type='font-awesome' size={40} />
                                }
                            />
                        </View>
                        <View style={{marginTop:20}}>
                        <Button 
                            onPress = {() => {this.sendComment(dishId), this.toggleModal()}}
                            color="#512DA8"
                            title="Submit"
                            />
                        </View>
                        <View style={{marginTop:20}}>
                        <Button 
                            onPress = {() => this.toggleModal()}
                            color="#c4c4c4"
                            title="Cancel"
                            style={{marginTop:20}}
                            />
                        </View>
                    </View>
                </Modal>
                </>
            } />
        );
    }
}
const styles = StyleSheet.create({
    formRow: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'row',
      margin: 20
    },
    formLabel: {
        fontSize: 18,
        flex: 2
    },
    formItem: {
        flex: 1
    },
    modal: {
      justifyContent: 'center',
      margin: 20
   },
   modalTitle: {
       fontSize: 24,
       fontWeight: 'bold',
       backgroundColor: '#512DA8',
       textAlign: 'center',
       color: 'white',
       marginBottom: 20
   },
   modalText: {
       fontSize: 18,
       margin: 10
   }
  });
export default connect(mapStateToProps, mapDispatchToProps)(Dishdetail);