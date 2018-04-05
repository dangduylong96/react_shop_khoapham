import React, { Component } from 'react';
import {
  View,
  StatusBar
} from 'react-native';

import {Route} from './src/route/Route.js'

export default class App extends Component{
  componentDidMount() {
    StatusBar.setHidden(true);
  }
  render() {
    return (
        <Route />
    );
  }
}
