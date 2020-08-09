import React, {Component} from 'react';
import Menu from './MenuComponent';
// import {DISHES} from '../shared/dishes'
import Dishdetail from './DishdetailComponent';
// import { View, Platform } from 'react-native';
import { createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'
import Home from './HomeComponent';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import { createDrawerNavigator } from 'react-navigation-drawer';


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
            component={Menu} />
            <StackMenu.Screen name="Dishdetail"
            component={Dishdetail}
            options={
                {
                    title:'Dish detail'
                }
            } />
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
            component={Home} />
        </StackHome.Navigator>
    );
}

 const Drawer = createDrawerNavigator()

 function MainNavigator (){
     return (
        <Drawer.Navigator
            initialRoute="Home"
            drawerStyle={{
                backgroundColor: '#D1C4E9',
            }}>
            <Drawer.Screen name="Home" component={HomeNavigator} />
            <Drawer.Screen name="Menu" component={MenuNavigator}/>
         </Drawer.Navigator>
     )
 } 

// const MainNavigator = createDrawerNavigator({
//     Home: 
//       { screen: HomeNavigator,
//         navigationOptions: {
//           title: 'Home',
//           drawerLabel: 'Home'
//         }
//       },
//     Menu: 
//       { screen: MenuNavigator,
//         navigationOptions: {
//           title: 'Menu',
//           drawerLabel: 'Menu'
//         }, 
//       }
// }, {
//   drawerBackgroundColor: '#D1C4E9'
// });

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
    console.log(MainNavigator);
    return (
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    )
}
export default Main;
