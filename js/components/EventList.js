
import React from "react";
import PropTypes from "prop-types";
import { SectionList, ListItem, Header, View, Text } from "react-native";
import { formatUnixDate } from "../redux/modules/helper";


export const EventList = ({ data, isLoading }) => {
  console.log(data);
  return (< SectionList
    renderItem={({ item }) =>
      <View>
        <Text>{item.title}</Text>
      </View>}
    keyExtractor={(item, index) => index}
    renderSectionHeader={({ section }) => (
      <Text>{formatUnixDate(section.title)}</Text>
    )}
    sections={data}
  />)
}


