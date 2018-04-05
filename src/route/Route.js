import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import { RouteTabbar } from './RouteTabbar.js';
import Menu from '../components/Menu/Menu.js';

export const Route = DrawerNavigator({
    Route: {
        screen: RouteTabbar
    }
},{
    contentComponent: props=> <Menu {...props}/>
})