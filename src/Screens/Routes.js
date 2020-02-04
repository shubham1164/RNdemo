import React from 'react';
import LoginScreen from './LoginScreen';
import DashboardScreen from './DashboardScreen';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const StackNavigator = createStackNavigator(
  {
    LoginScreen: LoginScreen,
    DashboardScreen: DashboardScreen,
  },
  {
    headerMode: 'none',
    initialRouteName: 'LoginScreen',
  },
);

export default createAppContainer(StackNavigator);
