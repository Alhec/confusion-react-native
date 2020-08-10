import React, {Component} from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import { createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'
import Home from './HomeComponent';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Contact from './ContactComponent';
import About from './AboutComponent';

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
            component={Contact} />
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
            component={About} />
        </StackAbout.Navigator>
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
            <Drawer.Screen name="About Us" component={AboutNavigator}/>
            <Drawer.Screen name="Menu" component={MenuNavigator}/>
            <Drawer.Screen name="Contact Us" component={ContactNavigator}/>
         </Drawer.Navigator>
     )
 } 

function Main (props){
    return (
        <NavigationContainer>
            <MainNavigator />
        </NavigationContainer>
    )
}
export default Main;
