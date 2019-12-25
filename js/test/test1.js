import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Component, View, StyleSheet, Text} from 'react-native';
import {Container, Header, Content, Button} from 'native-base';
import I18n from '../i18n/locales/index';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      localeLanguage: null,
    };
  }
  changeLanguage = () => {
    I18n.locale = 'en';
    this.setState({
      localeLanguage: I18n.locale,
    });
  };
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button
          title="Go To Details"
          onPress={() => this.props.navigation.navigate('Detail')}>
          <Text>Go To Details</Text>
        </Button>
        <Button
          style={styles.button}
          title="Change Language"
          onPress={this.changeLanguage}>
          <Text>Change Language</Text>
        </Button>
        <Text style={styles.container}>Home Screen1</Text>
        <Text style={styles.container}>Home Screen2</Text>
        <Text style={styles.container}>{I18n.t('greeting')}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    marginTop: 20,
    color: 'white',
  },
  button: {
    marginTop: 20,
  },
});

const DetailScreen = () => <View />;

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

export default RootNavigator;
