import React from "react";
import PropTypes from "prop-types";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList
} from "react-native";

const Speaker = ({ list }) => {
  console.log(list);
  return (
    <View>
      <Text>{list}</Text>
      <Text>{list}</Text>
      <Text>{list}</Text>
    </View>
  );
};

export default Speaker;
