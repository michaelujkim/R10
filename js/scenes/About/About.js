import React from "react";
import PropTypes from "prop-types";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Animated,
  TouchableHighlight
} from "react-native";

import { styles } from "./styles";
const About = ({ list, isLoading }) => (
  <ScrollView>
    <Image
      source={require("../../assets/images/r10_logo.png/")}
      style={{ height: 100, width: 320 }}
    />
    <View style={styles.container}>
      {!isLoading &&
        list.map(item => {
          return (
            <View key={item.title}>
              <TouchableHighlight>
                <Text style={styles.heading}>{item.title}</Text>
              </TouchableHighlight>
              <Animated.View
                style={{
                  height: 0,
                  opacity: 0
                }}
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
export default About;
