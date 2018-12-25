// import React  from 'react';
import Login from './screens/login.js';
import Signup from './screens/Signup.js';
import React, { Component } from 'react'
import ScrollViewExample from './screens/ScrollView.js';
import { StackNavigator } from 'react-navigation';

const AppNavigator = StackNavigator({
  SettingScreen: { screen: Login },
  Scroll: { screen: ScrollViewExample },
  Signup: { screen: Signup }
});
export default class App extends Component {
  render() {
    return (      
      <AppNavigator />
    );
  }
}