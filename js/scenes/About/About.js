import React from "react";
import PropTypes from "prop-types";
import { Platform, StyleSheet, Text, View, ScrollView, Image } from "react-native";

import { styles } from "./styles";
const About = ({ list, isLoading }) => (
  <ScrollView>
    <Image source={
      require("../../assets/images/r10_logo.png/")
    }
      style={{ height: 100, width: 320 }} />
    <View style={styles.container}>

      {!isLoading && list.map(item => {
        return (
          <View key={item.title}>
            <Text style={styles.heading}>{item.title}</Text>
            <Text style={{ fontFamily: "Montserrat" }}>{item.description}</Text>
          </View>
        );
      })}
    </View>
  </ScrollView>
);
export default About;
