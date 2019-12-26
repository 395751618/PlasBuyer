import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomePage from '../pages/home/HomePage';

const routeConfigs = {
  Home: {
    screen: HomePage,
  },
};

const stackNavigatorConfig = {
  initialRouteName: 'Home',
  navigationOptions: {
    title: 'Hello Navigation!',
  },
};

const HomeNavigator = createStackNavigator(routeConfigs, stackNavigatorConfig);
// const HomeContainer = createAppContainer(HomeNavigator);

export default HomeNavigator;
