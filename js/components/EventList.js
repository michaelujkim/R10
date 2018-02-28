
import React from "react";
import PropTypes from "prop-types";
import { SectionList, ListItem, Header, View, Text } from "react-native";



export const EventList = ({ data, isLoading }) => {
  console.log(data);
  return (< SectionList
    renderItem={({ item }) =>
      <View>
        <Text title={item.title} />
      </View>}
    keyExtractor={(item, index) => index}
    renderSectionHeader={({ section }) => (
      <Text>title={section.title}</Text>
    )}
    sections={data}
  />)
}


