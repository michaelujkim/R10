import React from "react";
import PropTypes from "prop-types";
import {
  SectionList,
  ListItem,
  Header,
  View,
  Text,
  TouchableOpacity,
  Platform
} from "react-native";
import { formatUnixDate } from "../redux/modules/helper";
import Icon from "react-native-vector-icons/Ionicons";
import { goToSession } from "../config/navigationHelpers";
import { createFave, deleteFave } from "../config/models";

export const EventList = ({ data, isLoading }) => {
  return (
    <SectionList
      renderItem={({ item }) => (
        <View>
          <TouchableOpacity
            onPress={() => {
              goToSession("schedule", item);
            }}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>

          {Platform.OS === "ios" && (
            <Icon style={{ color: "red" }} size={24} name={"ios-heart"} />
          )}
          {Platform.OS === "android" && (
            <Icon style={{ color: "red" }} size={24} name={"md-heart"} />
          )}
        </View>
      )}
      keyExtractor={(item, index) => index}
      renderSectionHeader={({ section }) => (
        <Text>{formatUnixDate(section.title)}</Text>
      )}
      sections={data}
      renderIcon={isSelected => this.renderIcon(isSelected, "ios-heart")}
    />
  );
};
