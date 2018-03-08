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
import AboutCollapser from "../../components/AboutCollapser.js";

import { styles } from "./styles";
export default class About extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView>
        <Image
          source={require("../../assets/images/r10_logo.png/")}
          style={{ height: 100, width: 320 }}
        />
        <View style={styles.paragraph}>
          <Text>
            R10 is a conference that focuses on just about any topic related to
            dev.
          </Text>
        </View>
        <View>
          <Text style={styles.title}>Date & Venue</Text>
          <Text style={styles.paragraph}>
            The R10 conference will take place on Tuesday, June 27, 2017 in
            Vancouver,BC.
          </Text>
        </View>
        <View>
          <Text style={styles.title}>Code of Conduct</Text>
        </View>

        <View style={styles.aboutItem}>
          {this.props.list.map(item => {
            return (
              <View key={item.title}>
                <AboutCollapser data={item} />
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}
