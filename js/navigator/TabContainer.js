import React from 'react';
import {Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import HomeNavigator from '../navigator/HomeContainer';

class HomeScreen1 extends React.Component {
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>HomeScreen1</Text>
      </View>
    );
  }
}

class HomeScreen2 extends React.Component {
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>HomeScreen2</Text>
      </View>
    );
  }
}

class HomeScreen3 extends React.Component {
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>HomeScreen3</Text>
      </View>
    );
  }
}

class HomeScreen4 extends React.Component {
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>HomeScreen4</Text>
      </View>
    );
  }
}

const RouteConfigs = {
  HomeScreen1: {
    screen: HomeNavigator,
  },
  HomeScreen2: {
    screen: HomeScreen2,
  },
  HomeScreen3: {
    screen: HomeScreen3,
  },
  HomeScreen4: {
    screen: HomeScreen4,
  },
};

const TabNavigatorConfig = {
  initialRouteName: 'HomeScreen1',
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
