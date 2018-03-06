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

class SpeakerContainer extends Component {
  static propTypes = {};
  constructor() {
    super();
    this.state = {
      speakers: []
    };
  }

  render() {
    return (
      <View>
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
