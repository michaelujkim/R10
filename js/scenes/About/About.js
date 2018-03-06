import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Animated,
  TouchableHighlight,
  Easing
} from "react-native";

import { styles } from "./styles";
export default class About extends Component {
  _startAnimation() {
    if (this.state.open == false) {
      Animated.parallel([
        Animated.timing(this.state.opacity, {
          toValue: 1,
          duration: 500,
          easing: Easing.elastic(0.4)
        }),

        Animated.timing(this.state.height, {
          toValue: 200,
          duration: 500,
          easing: Easing.elastic(0.4)
        })
      ]).start(() => {
        this.setState({ open: true });
      });
    } else {
      Animated.parallel([
        Animated.timing(this.state.opacity, {
          toValue: 0,
          duration: 1000,
          easing: Easing.elastic(0.4)
        }),

        Animated.timing(this.state.height, {
          toValue: 0,
          duration: 1000,
          easing: Easing.elastic(0.4)
        })
      ]).start(() => {
        this.setState({ open: false });
      });
    }
  }
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      height: new Animated.Value(0),
      opacity: new Animated.Value(0),
      open: false
    };
  }

  render() {
    return (
      <ScrollView>
        <Image
          source={require("../../assets/images/r10_logo.png/")}
          style={{ height: 100, width: 320 }}
        />
        <View>
          <Text>
            R10 is a conference that focuses on just about any topic related to
            dev.
          </Text>
        </View>
        <View>
          <Text>Date & Venue</Text>
          <Text>
            The R10 conference will take plce on Tuesday, June 27, 2017 in
            Vancouver,BC.
          </Text>
        </View>
        <View style={styles.aboutItem}>
          {this.props.list.map(item => {
            return (
              <View key={item.title}>
                <TouchableHighlight
                  onPress={key => {
                    this._startAnimation();
                  }}
                >
                  <Text style={styles.heading}>{item.title}</Text>
                </TouchableHighlight>
                <Animated.View
                  style={{
                    position: "relative",
                    height: this.state.height,
                    opacity: this.state.opacity
                  }}
                  key={item.title}
                >
                  <Text style={{ fontFamily: "Montserrat" }}>
                    {item.description}
                  </Text>
                </Animated.View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}
