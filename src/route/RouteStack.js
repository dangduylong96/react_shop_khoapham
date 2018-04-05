import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Home from '../components/Home/Home.js';

export const RouteStack=StackNavigator({
    Homescreen:{
        screen:Home
    }
},{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
})