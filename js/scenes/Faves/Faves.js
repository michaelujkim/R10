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
const Faves = ({ data }) => {
  console.log({ data });
  return <Text>{data}</Text>;
};

export default Faves;
