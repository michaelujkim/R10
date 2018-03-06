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
import { EventList1 } from "../../components/EventList1";

const Faves = ({ data }) => {
  return <EventList1 data={data} />;
};

export default Faves;
