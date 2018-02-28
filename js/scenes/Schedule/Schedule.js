import React from "react";
import PropTypes from "prop-types";
import { Platform, StyleSheet, Text, View, ScrollView, Image } from "react-native";

import { styles } from "./styles";
import { EventList } from "../../components/EventList"
const Schedule = ({ list, isLoading }) => {
  return (<View>
    <EventList data={list} />
  </View>)
};


export default Schedule
