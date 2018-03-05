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
import NavigationBar from "react-native-navbar";
let context = this;
const styles = {
  container: {
    flex: 1
  }
};

const titleConfig = {
  title: "Hello, world"
};

class SessionContainer extends Component {
  static propTypes = {};
  componentDidMount() {
    console.log(this.props.speakers);
    fetch("https://r10app-95fea.firebaseio.com/sessions.json").then(r =>
      r.json()
    );
    this.props.dispatch(
      fetchSpeakers(this.props.route.params.sessionData.speaker)
    );
  }

  render() {
    const leftButtonConfig = {
      title: "back",
      handler: () => this.props.navigator.pop()
    };
    return (
      <View>
        <NavigationBar title={titleConfig} leftButton={leftButtonConfig} />
        <Session
          list={this.props.route.params.sessionData}
          speakerData={this.props.speakers}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.speakers.isLoading,
  speakers: state.speakers.speakers,
  error: state.speakers.error
});

export default connect(mapStateToProps)(SessionContainer);
