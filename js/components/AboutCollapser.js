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
import Icon from "react-native-vector-icons/Ionicons";

import { styles } from "../scenes/About/styles";
export default class AboutCollapser extends Component {
  _startAnimation() {
    if (this.state.open == false) {
      Animated.parallel([
        Animated.timing(this.state.opacity, {
          toValue: 1,
          duration: 500,
          easing: Easing.elastic(0.4)
        }),

        Animated.timing(this.state.plusWidth, {
          toValue: 0,
          duration: 500,
          easing: Easing.elastic(0.4)
        }),
        Animated.timing(this.state.minusWidth, {
          toValue: 15,
          duration: 500,
          easing: Easing.elastic(0.4)
        }),
        Animated.timing(this.state.height, {
          toValue: "auto",
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
          duration: 500,
          easing: Easing.elastic(0.4)
        }),

        Animated.timing(this.state.height, {
          toValue: 0,
          duration: 500,
          easing: Easing.elastic(0.4)
        }),
        Animated.timing(this.state.plusWidth, {
          toValue: 15,
          duration: 500,
          easing: Easing.elastic(0.4)
        }),
        Animated.timing(this.state.minusWidth, {
          toValue: 0,
          duration: 500,
          easing: Easing.elastic(0.4)
        })
      ]).start(() => {
        this.setState({ open: false, height: new Animated.Value(0) });
      });
    }
  }
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      height: new Animated.Value(0),
      opacity: new Animated.Value(0),
      open: false,
      minusWidth: new Animated.Value(0),
      plusWidth: new Animated.Value(15)
    };
  }

  render() {
    return (
      <View>
        <TouchableHighlight
          onPress={key => {
            this._startAnimation();
          }}
          underlayColor={"#9963ea"}
        >
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Animated.View style={{ width: this.state.plusWidth }}>
              <Text style={styles.heading}>+ </Text>
            </Animated.View>
            <Animated.View style={{ width: this.state.minusWidth }}>
              <Text style={styles.heading}>- </Text>
            </Animated.View>
            <Text style={styles.heading}>{this.props.data.title}</Text>
          </View>
        </TouchableHighlight>
        <Animated.View
          style={{
            position: "relative",
            height: this.state.height,
            opacity: this.state.opacity
          }}
        >
          <Text style={{ fontFamily: "Montserrat" }}>
            {this.props.data.description}
          </Text>
        </Animated.View>
      </View>
    );
  }
}
