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
      <Text>{list.bio}</Text>
      <Text>{list.name}</Text>
      <Image
        style={{ height: 100, width: 100 }}
        source={{ uri: `${list.image}` }}
      />
    </View>
  );
};

export default Speaker;
