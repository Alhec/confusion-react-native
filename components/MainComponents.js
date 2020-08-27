import React, {Component} from 'react';
import {Image, StyleSheet, ScrollView, View, Text, ToastAndroid} from 'react-native';
import { createStackNavigator  } from '@react-navigation/stack';
import {createDrawerNavigator,DrawerItem, DrawerItemList, DrawerContentScrollView } from '@react-navigation/drawer';
import {SafeAreaView} from 'react-navigation';
import {NavigationContainer} from '@react-navigation/native';
import {Icon} from 'react-native-elements';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { connect } from 'react-redux';
import { fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';
import Reservation from './ReservationComponent';
import Favorites from './FavoriteComponent';
import Login from './LoginComponent';
import NetInfo from "@react-native-community/netinfo";
const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

const mapDispatchToProps = dispatch => ({
    fetchDishes: () => dispatch(fetchDishes()),
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
    fetchLeaders: () => dispatch(fetchLeaders()),
})


const StackMenu = createStackNavigator();

function MenuNavigator(){
    return (
        <StackMenu.Navigator
            screenOptions={{
            headerStyle: {
                backgroundColor: '#512DA8',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color:'#fff',
            },
            }}>
            <StackMenu.Screen name="Menu"
            component={Menu} 
            options={props =>{
                    return {
                        headerLeft: () =>(
                        <Icon name="menu" size={24} color="white" 
                        onPress={()=> props.navigation.toggleDrawer()}/>
                        )
                    }
                }}
            />

            <StackMenu.Screen name="Dishdetail"
            component={Dishdetail}
            options={props =>{
                return {
                    title:'Dish detail',
                    headerLeft: () =>(
                    <Icon name="menu" size={24} color="white" 
                    onPress={()=> props.navigation.toggleDrawer()}/>
                    )
                }
            }}
            />
        </StackMenu.Navigator>
    );
}

const StackHome = createStackNavigator();

function HomeNavigator(){
    return (
        <StackHome.Navigator
            screenOptions={{
            headerStyle: {
                backgroundColor: '#512DA8',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color:'#fff',
            },
            }}>
            <StackHome.Screen name="Home"
            component={Home}
            options={props =>{
                    return {
                        headerLeft: () =>(
                        <Icon name="menu" size={24} color="white" 
                        onPress={()=> props.navigation.toggleDrawer()}/>
                        )
                    }
                }}
            /> 
        </StackHome.Navigator>
    );
}

const StackContact = createStackNavigator();

function ContactNavigator(){
    return (
        <StackContact.Navigator
            screenOptions={{
            headerStyle: {
                backgroundColor: '#512DA8',
            }
            }}>
            <StackContact.Screen name=" "
            component={Contact} 
            options={props =>{
                    return {
                        headerLeft: () =>(
                        <Icon name="menu" size={24} color="white" 
                        onPress={()=> props.navigation.toggleDrawer()}/>
                        )
                    }
                }}
            />
        </StackContact.Navigator>
    );
}

const StackAbout = createStackNavigator();

function AboutNavigator(){
    return (
        <StackAbout.Navigator
            screenOptions={{
            headerStyle: {
                backgroundColor: '#512DA8',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color:'#fff',
            },
            }}>
            <StackAbout.Screen name="About Us"
            component={About} 
            options={props =>{
                    return {
                        headerLeft: () =>(
                        <Icon name="menu" size={24} color="white" 
                        onPress={()=> props.navigation.toggleDrawer()}/>
                        )
                    }
                }}
            />
        </StackAbout.Navigator>
    );
}

const StackReservation = createStackNavigator();

function ReservationNavigator(){
    return (
        <StackReservation.Navigator
            screenOptions={{
            headerStyle: {
                backgroundColor: '#512DA8',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color:'#fff',
            },
            }}>
            <StackReservation.Screen name="Reserve Table"
            component={Reservation}
            options={props =>{
                    return {
                        headerLeft: () =>(
                        <Icon name="menu" size={24} color="white"
                        onPress={()=> props.navigation.toggleDrawer()}/>
                        )
                    }
                }}
            />
        </StackReservation.Navigator>
    );
}

const StackFavorites = createStackNavigator();

function FavoritesNavigator(){
    return (
        <StackFavorites.Navigator
            screenOptions={{
            headerStyle: {
                backgroundColor: '#512DA8',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color:'#fff',
            },
            }}>
            <StackFavorites.Screen name="My Favorites"
            component={Favorites}
            options={props =>{
                    return {
                        headerLeft: () =>(
                        <Icon name="menu" size={24} color="white"
                        onPress={()=> props.navigation.toggleDrawer()}/>
                        )
                    }
                }}
            />
        </StackFavorites.Navigator>
    );
}

const StackLogin = createStackNavigator();
function LoginNavigator(){
    return (
        <StackLogin.Navigator
            screenOptions={{
            headerStyle: {
                backgroundColor: '#512DA8',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color:'#fff',
            },
            }}>
            <StackLogin.Screen name="Login"
            component={Login}
            options={props =>{
                    return {
                        headerLeft: () =>(
                        <Icon name="menu" size={24} color="white"
                        onPress={()=> props.navigation.toggleDrawer()}/>
                        )
                    }
                }}
            />
        </StackLogin.Navigator>
    );
}
const CustomDrawerContentComponent = (props) => (
    <DrawerContentScrollView>
        <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
            <View style={styles.drawerHeader}>
                <View style={{flex:1}}>
                    <Image source={require('./images/logo.png')} style={styles.drawerImage} />
                </View>
                <View style={{flex: 2}}>
                    <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
                </View>
            </View>
            <DrawerItemList {...props} />
        </SafeAreaView>
    </DrawerContentScrollView>
  );

const Drawer = createDrawerNavigator()

 function MainNavigator (){
     return (
        <Drawer.Navigator
            initialRouteName="Home"
            drawerStyle={{
                backgroundColor: '#D1C4E9',
            }}
            drawerContent= {props => <CustomDrawerContentComponent {...props}/>}>
            <Drawer.Screen name="Login" component={LoginNavigator}
                options={
                    {
                        title:'Login',
                        drawerLabel:'Login',
                        drawerIcon: ({ tintColor})=>(
                            <Icon name='sign-in' type='font-awesome' size={24} color={tintColor}/>
                        )
                    }
                }
            />
            <Drawer.Screen name="Home" component={HomeNavigator} 
                options={
                    {
                        title:'Home',
                        drawerLabel:'Home',
                        drawerIcon: ({ tintColor})=>(
                            <Icon name='home' type='font-awesome' size={24} color={tintColor}/>
                        )
                    }
                }
            />
            <Drawer.Screen name="About Us" component={AboutNavigator}
                options={
                    {
                        title:'About Us',
                        drawerLabel:'About Us',
                        drawerIcon: ({ tintColor})=>(
                            <Icon name='info-circle' type='font-awesome' size={24} color={tintColor}/>
                        )
                    }
                }
            />
            <Drawer.Screen name="Menu" component={MenuNavigator}
                options={
                    {
                        title:'Menu',
                        drawerLabel:'Menu',
                        drawerIcon: ({ tintColor})=>(
                            <Icon name='list' type='font-awesome' size={24} color={tintColor}/>
                        )
                    }
                }
            />
            <Drawer.Screen name="Contact Us" component={ContactNavigator}
                options={
                    {
                        title:'Contact Us',
                        drawerLabel:'Contact Us',
                        drawerIcon: ({ tintColor})=>(
                            <Icon name='address-card' type='font-awesome' size={22} color={tintColor}/>
                        )
                    }
                }
            />
             <Drawer.Screen name="Favorites" component={FavoritesNavigator}
                options={
                    {
                        title:'My Favorites ',
                        drawerLabel:'My Favorites',
                        drawerIcon: ({ tintColor})=>(
                            <Icon name='heart' type='font-awesome' size={24} color={tintColor}/>
                        )
                    }
                }
            />
            <Drawer.Screen name="Reservation" component={ReservationNavigator}
                options={
                    {
                        title:'Reservation Table',
                        drawerLabel:'Reservation Table',
                        drawerIcon: ({ tintColor})=>(
                            <Icon name='cutlery' type='font-awesome' size={24} color={tintColor}/>
                        )
                    }
                }
            />
        </Drawer.Navigator>
    )
}

class Main extends Component {

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();

        // NetInfo.getConnectionInfo()
        // .then((connectionInfo) => {
        //     ToastAndroid.show('Initial Network Connectivity Type: '
        //         + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType,
        //         ToastAndroid.LONG)
        // });

        const net =NetInfo.addEventListener(this.handleConnectivityChange);
    }

    componentWillUnmount() {
        net();
    }

    handleConnectivityChange = (connectionInfo) => {
    switch (connectionInfo.type) {
    case 'none':
        ToastAndroid.show('You are now offline!', ToastAndroid.LONG);
        break;
    case 'wifi':
        ToastAndroid.show('You are now connected to WiFi!', ToastAndroid.LONG);
        break;
    case 'cellular':
        ToastAndroid.show('You are now connected to Cellular!', ToastAndroid.LONG);
        break;
    case 'unknown':
        ToastAndroid.show('You now have unknown connection!', ToastAndroid.LONG);
        break;
    default:
        break;
    }
}
    render(){
        return (
            <NavigationContainer>
                <MainNavigator />
            </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: '#512DA8',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        width: 80,
        height: 60
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
