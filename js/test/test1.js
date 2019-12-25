import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Text, View} from 'react-native';
import {Component} from 'react-native';

const HomeScreen = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Home Screen</Text>
  </View>
);

const DetailScreen = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Detail Screen</Text>
  </View>
);

const routeConfigs = {
  Home: {
    screen: HomeScreen,
  },
  Detail: {
    screen: DetailScreen,
  },
};

const stackNavigatorConfig = {
  initialRouteName: 'Home',
  // initialRouteParams: {user: 'Join'},
  // 这里可以对标题栏进行通用设置
  // 但是当某个页面也设置了 navigationOptions，则会失效，优先使用页面设置
  navigationOptions: {
    title: 'Hello Navigation!',
  },
  // 不带标题栏
  // headerMode: 'none',
};

const StackNavigator = createStackNavigator(routeConfigs, stackNavigatorConfig);

const RootNavigator = createAppContainer(StackNavigator);

export default class App1 extends React.Component {
  render() {
    return <RootNavigator />;
  }
}
