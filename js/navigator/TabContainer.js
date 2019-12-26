import React from 'react';
import {Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import HomeNavigator from '../navigator/HomeContainer';
import RecommendNavigator from '../navigator/RecommendContainer';
import CategoryNavigator from '../navigator/CategoryContainer';
import HMeNavigator from '../navigator/MeContainer';
import I18n from '../i18n/locales/index';
import MeNavigator from '../navigator/MeContainer';

const RouteConfigs = {
  TabScreen1: {
    screen: HomeNavigator,
    navigationOptions: {
      tabBarLabel: I18n.t('home'),
    },
  },
  TabScreen2: {
    screen: RecommendNavigator,
    navigationOptions: {
      tabBarLabel: I18n.t('recommend'),
    },
  },
  TabScreen3: {
    screen: CategoryNavigator,
    navigationOptions: {
      tabBarLabel: I18n.t('category'),
    },
  },
  TabScreen4: {
    screen: MeNavigator,
    navigationOptions: {
      tabBarLabel: I18n.t('me'),
    },
  },
};

const TabNavigatorConfig = {
  initialRouteName: 'TabScreen1',
  tabBarOptions: {
    activeTintColor: 'black',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: 'white',
    },
  },
};

const tabNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

const TabContainer = createAppContainer(tabNavigator);

export default TabContainer;
