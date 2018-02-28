import React from "react";
import PropTypes from "prop-types";
import { Platform, StyleSheet, Text, View, ScrollView, Image } from "react-native";

import { styles } from "./styles";
import { EventList } from "../../components/EventList"
const Schedule = ({ list, isLoading }) => {
  console.log(list)
  return (
    <EventList data={list} />
  )
};


export default Schedule
