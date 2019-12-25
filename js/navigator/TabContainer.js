import React from 'react';
import {Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

class HomeScreen1 extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>HomeScreen1</Text>
      </View>
    );
  }
}

class HomeScreen2 extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>HomeScreen2</Text>
      </View>
    );
  }
}

class HomeScreen3 extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>HomeScreen3</Text>
      </View>
    );
  }
}

class HomeScreen4 extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>HomeScreen4</Text>
      </View>
    );
  }
}

const routeConfigs = {
  HomeScreen1: {
    screen: HomeScreen1,
  },
};

const StackNavigator = createStackNavigator(routeConfigs);

const RouteConfigs = {
  HomeScreen1: {
    screen: StackNavigator,
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
    activeTintColor: 'white',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: 'blue',
    },
  },
};

const tabNavigator = createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

const TabContainer = createAppContainer(tabNavigator);

export default TabContainer;
