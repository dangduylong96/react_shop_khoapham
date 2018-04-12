import React, { Component } from 'react';
import {
    View,
    Text,Easing,Animated
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Home from '../components/Home/Home.js';
import Login from '../components/Login/Login.js';
import SignUp from '../components/Login/SignUp.js';
import OrderHistory from '../components/UserArea/OrderHistory.js';
import UserInformation from '../components/UserArea/UserInformation.js';
import ProductDetail from '../components/Product/ProductDetail.js';
import ProductList from '../components/Product/ProductList.js';

export const RouteStack=StackNavigator({
    Homescreen:{
        screen:Home
    },
    ProductDetailscreen:{
        screen:ProductDetail
    },
    ProductListscreen:{
        screen:ProductList
    },

},{
    initialRouteName:'ProductDetailscreen',
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    },
    transitionConfig: () => ({
        transitionSpec: {
          duration: 300,
          timing: Animated.timing,
    }}),
})
export const RouteStackNotTab=StackNavigator({
    LoginComponent:{
        screen: Login
    },
    SignUpComponent:{
        screen:SignUp
    },
    OrderHistoryComponent:{
        screen:OrderHistory
    },
    UserInformationComponent:{
        screen:UserInformation
    }
},{
    initialRouteName:'UserInformationComponent',
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    },
    transitionConfig: () => ({
        transitionSpec: {
          duration: 300,
          timing: Animated.timing,
    }}),
})