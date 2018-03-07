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
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Speaker from "./Speaker";
import { connect } from "react-redux";
import { fetchSpeakers } from "../../redux/modules/speaker";
import LinearGradient from "react-native-linear-gradient";
import NavigationBar from "react-native-navbar";
const styles = {
  container: {
    flex: 1
  }
};

const titleConfig = {
  title: "About the Speaker",
  tintColor: "#ffffff"
};
const containerConfig = {
  backgroundColor: "#000000"
};
class SpeakerContainer extends Component {
  static propTypes = {};
  constructor() {
    super();
    this.state = {
      speakers: []
    };
  }

  render() {
    const leftButtonConfig = {
      title: "X",
      handler: () => this.props.navigator.pop(),
      tintColor: "#ffffff"
    };
    return (
      <View>
        <NavigationBar
          title={titleConfig}
          leftButton={leftButtonConfig}
          containerStyle={containerConfig}
        />

        <Speaker list={this.props.speakers} />

        <TouchableOpacity
          onPress={() => {
            this.props.navigator.pop();
          }}
        >
          <Icon style={{ color: "grey" }} size={24} name={"ios-close"} />
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.speakers.isLoading,
  speakers: state.speakers.speakers,
  error: state.speakers.error
});

export default connect(mapStateToProps)(SpeakerContainer);
