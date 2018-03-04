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
import Icon from "react-native-vector-icons/Ionicons";
import { createFave, deleteFave } from "../../config/models";
const Session = ({ list, speakerData }) => {
  return (
    <View>
      <Text>{list.location}</Text>
      <Text>{list.description}</Text>
      <TouchableOpacity
        onPress={() => {
          goToSpeaker("speaker");
        }}
      >
        <Text>{speakerData.name}</Text>
      </TouchableOpacity>
      <Text>{list.session_id}</Text>
      <TouchableOpacity
        onPress={() => {
          createFave(list.session_id);
        }}
      >
        {Platform.OS === "ios" && (
          <Icon style={{ color: "red" }} size={24} name={"ios-heart"} />
        )}
        {Platform.OS === "android" && (
          <Icon style={{ color: "red" }} size={24} name={"md-heart"} />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          deleteFave(list.session_id);
        }}
      >
        {Platform.OS === "ios" && (
          <Icon style={{ color: "black" }} size={24} name={"ios-close"} />
        )}
        {Platform.OS === "android" && (
          <Icon style={{ color: "black" }} size={24} name={"md-close"} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Session;
