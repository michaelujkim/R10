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
import Faves from "./Faves";
import { connect } from "react-redux";
import { fetchFaves } from "../../redux/modules/faves";
import { queryFaves } from "../../config/models";
import LinearGradient from "react-native-linear-gradient";
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15
  }
});
class FavesContainer extends Component {
  static route = {
    navigationBar: {
      title: "Faves",
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
    this.props.dispatch(fetchFaves());
  }

  render() {
    console.log(this.props.faves);
    return (
      <View>
        <StatusBar barStyle="light-content" />
        <Faves data={this.props.faves} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.faves.isLoading,
  faves: state.faves.faves,
  error: state.schedule.error
});
export default connect(mapStateToProps)(FavesContainer);
