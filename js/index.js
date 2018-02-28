/**
 * R10 React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {
  NavigationContext,
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';

import { Provider } from "react-redux";


import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import About from "./scenes/About";
import Router from "./navigation/routes.js"
import Store from './redux/store';

const navigationContext = new NavigationContext({
  router: Router,
  store: Store,
})
export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <NavigationProvider context={navigationContext}>
          <StackNavigation initialRoute={Router.getRoute('layout')} />
        </NavigationProvider>
      </Provider>)
  }
}


