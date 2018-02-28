import React, { Component } from 'react';
import {
  TabNavigation,
  StackNavigation,
  TabNavigationItem
} from '@expo/ex-navigation';
import Router from "./routes.js"
import { colors, typography } from "../config/styles.js"
const { black, mediumGrey, nearBlack,
  lightGrey,
  blue,
  purple,
  red,
  offWhite,
  white,
  transluscentGrey,
  transluscentWhite } = colors
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons"




class NavigationLayout extends Component {
  render() {
    return (


      <TabNavigation id="main"
        navigatorUID="main"
        initialTab="about"
        tabBarColor={black}
      >
        <TabNavigationItem
          id="schedule"
          title="Schedule"
          renderTitle={this.renderTitle}
          renderIcon={(isSelected) => this.renderIcon(isSelected, "ios-calendar")}>

          <StackNavigation id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute('schedule')} />
        </TabNavigationItem>
        <TabNavigationItem
          id="about"
          title="About"
          renderTitle={this.renderTitle}
          renderIcon={(isSelected) => this.renderIcon(isSelected, "ios-information-circle")}>

          <StackNavigation id="about"
            navigatorUID="about"
            initialRoute={Router.getRoute('about')} />
        </TabNavigationItem>

      </TabNavigation >



    );
  }
  renderTitle(isSelected, title) {
    return <Text style={{ color: isSelected ? white : mediumGrey, fontFamily: typography.fontMain, fontSize: 10 }}>{title}</Text>
  }
  renderIcon(isSelected, iconName) {
    return <Icon name={iconName} size={24} style={{ color: isSelected ? white : mediumGrey }} />
  }
}

export default NavigationLayout;