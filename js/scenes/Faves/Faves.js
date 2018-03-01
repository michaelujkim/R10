import React from "react";
import PropTypes from "prop-types";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from "react-native";

import { EventList } from "../../components/EventList";
const Faves = ({ list, isLoading }) => {
  console.log(list);
  return <EventList data={list} />;
};

export default Faves;
