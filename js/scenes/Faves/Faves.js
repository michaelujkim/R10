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
  return <EventList data={data} />;
};

export default Faves;
