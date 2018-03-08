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
import { styles } from "./styles";

export const EventList1 = ({ data, isLoading }) => {
  return (
    <SectionList
      renderItem={({ item }) => (
        <View style={styles.entryContainer}>
          <TouchableOpacity
            onPress={() => {
              goToSession("faves", item);
            }}
          >
            <Text style={styles.entry}>{item.title}</Text>
          </TouchableOpacity>
          <View style={styles.location}>
            <Text>{item.location}</Text>
            {Platform.OS === "ios" && (
              <Icon style={{ color: "red" }} size={24} name={"ios-heart"} />
            )}
            {Platform.OS === "android" && (
              <Icon style={{ color: "red" }} size={24} name={"md-heart"} />
            )}
          </View>
        </View>
      )}
      keyExtractor={(item, index) => index}
      renderSectionHeader={({ section }) => (
        <Text style={styles.time}>{formatUnixDate(section.title)}</Text>
      )}
      sections={data}
      renderIcon={isSelected => this.renderIcon(isSelected, "ios-heart")}
    />
  );
};
