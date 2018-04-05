import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import { TabNavigator,TabBarBottom } from 'react-navigation';
import { RouteStack } from './RouteStack.js';

export const RouteTabbar=TabNavigator({
    Home:{
        screen:RouteStack,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                return <Image style={styles.icon} source={require('../media/appIcon/home.png')} />
            },
        }),
    },
    Cart:{
        screen:RouteStack,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                return <Image style={styles.icon} source={require('../media/appIcon/cart.png')} />
            },
        }),
    },
    Search:{
        screen:RouteStack,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                return <Image style={styles.icon} source={require('../media/appIcon/search.png')} />
            },
        }),
    },
    Contact:{
        screen:RouteStack,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                return <Image style={styles.icon} source={require('../media/appIcon/contact.png')} />
            },
        }),
    }
},{
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions:{
    }
})
var styles=StyleSheet.create({
    icon:{
        width:20,
        height:20
    }
})