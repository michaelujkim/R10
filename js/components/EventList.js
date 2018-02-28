
import React from "react";
import PropTypes from "prop-types";
import { SectionList, ListItem, Header, View, Text, TouchableOpacity } from "react-native";
import { formatUnixDate } from "../redux/modules/helper";

import { goToSession } from "../config/navigationHelpers"

export const EventList = ({ data, isLoading }) => {
  console.log(data);
  return (< SectionList
    renderItem={({ item }) =>
      <View><TouchableOpacity onPress={() => {
        goToSession("schedule", data)
      }}>
        <Text >{item.title}</Text>
      </TouchableOpacity>
      </View>}
    keyExtractor={(item, index) => index}
    renderSectionHeader={({ section }) => (
      <Text>{formatUnixDate(section.title)}</Text>
    )}
    sections={data}
  />)
}


