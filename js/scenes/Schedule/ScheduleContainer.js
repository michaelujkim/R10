import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  StatusBar
} from "react-native";
import Schedule from "./Schedule";
import { connect } from "react-redux";
import { fetchSchedule } from "../../redux/modules/schedule";
import LinearGradient from "react-native-linear-gradient";

import { formatSessionData } from "../../redux/modules/helper.js";
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15
  }
});
class ScheduleContainer extends Component {
  static route = {
    navigationBar: {
      title: "Schedule",
      renderBackground: () => {
        return (
          <LinearGradient
            colors={["#9963ea", "#cf392a"]}
            style={styles.linearGradient}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 1 }}
          />
        );
      },
      titleStyle: { color: "#ffffff" }
    }
  };
  static propTypes = {};
  componentDidMount() {
    this.props.dispatch(fetchSchedule());
  }

  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" />
        <Schedule
          list={formatSessionData(this.props.sessions)}
          isloading={this.props.isLoading}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.schedule.isLoading,
  sessions: state.schedule.sessions,
  error: state.schedule.error
});

export default connect(mapStateToProps)(ScheduleContainer);
