import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  NavigatorIOS
} from "react-native";
import Session from "./Session";
import { connect } from "react-redux";
import { fetchSchedule } from "../../redux/modules/schedule";
import { fetchSpeakers } from "../../redux/modules/speaker";
import { fetchFaves } from "../../redux/modules/faves";
import NavigationBar from "react-native-navbar";
import LinearGradient from "react-native-linear-gradient";

const styles = {
  container: {
    flex: 1
  }
};

class SessionContainer extends Component {
  static route = {
    navigationBar: {
      title: "Session",
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
    fetch("https://r10app-95fea.firebaseio.com/sessions.json").then(r =>
      r.json()
    );
    this.props.dispatch(
      fetchSpeakers(this.props.route.params.sessionData.speaker)
    );
    this.props.dispatch(fetchFaves());
  }

  render() {
    const leftButtonConfig = {
      title: "<",
      handler: () => this.props.navigator.pop()
    };
    return (
      <View>
        <Session
          list={this.props.route.params.sessionData}
          speakerData={this.props.speakers}
          faves={this.props.faves}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.speakers.isLoading,
  speakers: state.speakers.speakers,
  error: state.speakers.error,
  faves: state.faves.faves
});

export default connect(mapStateToProps)(SessionContainer);
