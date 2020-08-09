import React, {Component} from 'react';
import Menu from './MenuComponent';
// import {DISHES} from '../shared/dishes'
import Dishdetail from './DishdetailComponent';
// import { View, Platform } from 'react-native';
import { createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'

// const MenuNavigator = createStackNavigator({
//     Menu:{ screen: Menu},
//     Dishdetail:{ screen: Dishdetail}
// },{
//     initialRouteName: 'Menu',
//     Options:{
//         headerStyle: {
//             backgroundColor: '#512DA8'
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//             color:'#fff'
//         }
//     }
// })

const Stack = createStackNavigator();

function MenuNavigator(){
    return (
        <Stack.Navigator
            screenOptions={{
            headerStyle: {
                backgroundColor: '#512DA8',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color:'#fff',
            },
            }}>
            <Stack.Screen name="Menu"
            component={Menu} />
            <Stack.Screen name="Dishdetail"
            component={Dishdetail}
            options={
                {
                    title:'Dish detail'
                }
            } />
        </Stack.Navigator>
    );
}
//const Main = createAppContainer(MenuNavigator);

//class Main extend Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         dishes:DISHES,
    //         selectedDish:null,
    //     }
    // }

    // onDishSelect(dishId){
    //     this.setState({selectedDish:dishId})
    // }

  //  return (
        // <View style={{flex:1, paddingTop: Platform.OS === 'ios'? 0: Constants.statusBarHeight }}>
        {/*<MenuNavigator />
         <Menu dishes={this.state.dishes}
            onPress={(dishId)=> this.onDishSelect(dishId)} />
            <Dishdetail dish={this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish)[0]} /> */}
        // </View>
  //  );
//}

function Main (props){
    return (
        <NavigationContainer>
            <MenuNavigator />
        </NavigationContainer>
    )
}
export default Main;
