import React from "react";
import PropTypes from "prop-types";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";
import { goToSpeaker } from "../../config/navigationHelpers.js";
const Session = ({ list }) => {
  return (
    <View>
      <Text>{list.location}</Text>
      <Text>{list.description}</Text>
      <TouchableOpacity
        onPress={() => {
          goToSpeaker("speaker");
        }}
      >
        <Text>{list.speaker}</Text>
      </TouchableOpacity>
      <Text>{list.session_id}</Text>
    </View>
  );
};

export default Session;
