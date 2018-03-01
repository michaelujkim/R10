import React from "react";
import PropTypes from "prop-types";
import { Platform, StyleSheet, Text, View, ScrollView, Image, FlatList } from "react-native";



const Session = ({ list }) => {
  console.log(list)
  return (
    <View><Text>{list.location}</Text>
      <Text>{list.description}</Text>
      <Text>{list.speaker}</Text>
      <Text>{list.session_id}</Text></View>)
};


export default Session