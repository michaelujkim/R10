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
  TouchableOpacity,
  NavigatorIOS
} from "react-native";
import { goToSpeaker } from "../../config/navigationHelpers.js";
import Icon from "react-native-vector-icons/Ionicons";
import { createFave, deleteFave } from "../../config/models";

const Session = ({ list, speakerData, faves }) => {
  const keys = Object.keys(faves).map(key => {
    return faves[key].id;
  });
  return (
    <View>
      <Text>{list.location}</Text>
      {keys.includes(list.session_id) ? (
        <Icon style={{ color: "red" }} size={24} name={"ios-heart"} />
      ) : (
        <Text />
      )}
      <Text>{list.description}</Text>
      {keys.includes(list.session_id) ? (
        <TouchableOpacity
          onPress={() => {
            deleteFave(list.session_id);
          }}
        >
          <View>
            <Text>Remove from faves</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            createFave(list.session_id);
          }}
        >
          <View>
            <Text>Add to faves</Text>
          </View>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        onPress={() => {
          goToSpeaker("speaker");
        }}
      >
        <Text>{speakerData.name}</Text>
      </TouchableOpacity>
      <Text>{list.session_id}</Text>
    </View>
  );
};

export default Session;
