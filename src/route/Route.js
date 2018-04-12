import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { RouteTabbar } from './RouteTabbar.js';
import { RouteStackNotTab } from './RouteStack.js';
import Menu from '../components/Menu/Menu.js';
import WantLogin from '../components/Menu/WantLogin.js';

export const Route = DrawerNavigator({
    Route: {
        screen: RouteTabbar
    },
    RouteNotTab:{
        screen:RouteStackNotTab
    }
},{
    initialRouteName:'Route',
    useNativeAnimations:true,
    contentComponent: props=> <Menu {...props}/>
})