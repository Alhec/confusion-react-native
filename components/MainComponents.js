import React, {Component} from 'react';
import {Image, StyleSheet, ScrollView, View, Text} from 'react-native';
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
            initialRoute="Home"
            drawerStyle={{
                backgroundColor: '#D1C4E9',
            }}
            drawerContent= {props => <CustomDrawerContentComponent {...props}/>}>
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
  
export default Main;
