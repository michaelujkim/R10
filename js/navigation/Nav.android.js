import React, { Component } from "react";
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem
} from "@expo/ex-navigation";
import Router from "./routes.js";
import { colors, typography } from "../config/styles.js";
import { StyleSheet, Text, View } from "react-native";

// Treat the DrawerNavigationLayout route like any other route -- you may want to set
// it as the intiial route for a top-level StackNavigation

class Nav extends React.Component {
  static route = {
    navigationBar: {
      visible: false
    }
  };

  render() {
    return (
      <DrawerNavigation
        id="main"
        initialItem="about"
        drawerWidth={300}
        renderHeader={this._renderHeader}
      >
        <DrawerNavigationItem
          id="schedule"
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle("Schedule", isSelected)}
        >
          <StackNavigation
            id="schedule"
            initialRoute={Router.getRoute("schedule")}
          />
        </DrawerNavigationItem>
        <DrawerNavigationItem
          id="faves"
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle("Faves", isSelected)}
        >
          <StackNavigation id="faves" initialRoute={Router.getRoute("faves")} />
        </DrawerNavigationItem>
        <DrawerNavigationItem
          id="about"
          selectedStyle={styles.selectedItemStyle}
          renderTitle={isSelected => this._renderTitle("About", isSelected)}
        >
          <StackNavigation id="about" initialRoute={Router.getRoute("about")} />
        </DrawerNavigationItem>
      </DrawerNavigation>
    );
  }

  _renderHeader = () => {
    return <View style={styles.header} />;
  };

  _renderTitle(text: string, isSelected: boolean) {
    return (
      <Text
        style={[styles.titleText, isSelected ? styles.selectedTitleText : {}]}
      >
        {text}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 20
  },

  selectedItemStyle: {
    backgroundColor: "blue"
  },

  titleText: {
    fontWeight: "bold"
  },

  selectedTitleText: {
    color: "white"
  }
});

export default Nav;
