
import React from "react";
import PropTypes from "prop-types";
import { SectionList, ListItem, Header } from "react-native";



const EventList = ({ data, isLoading }) => (

  <SectionList
    renderItem={({ item }) => <ListItem title={item} />}
    renderSectionHeader={({ section }) => <Header title={section.title} />}
    sections={[ // homogeneous rendering between sections
      { data: [data] }]}
  />
)


export default EventList