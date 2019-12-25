/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Component} from 'react';
import RootNavigator from './js/test/test1';
import TabContainer from './js/navigator/TabContainer';

export default class App extends Component {
  render() {
    return <TabContainer />;
  }
}
