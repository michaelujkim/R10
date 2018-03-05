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
import About from "./About";
import { connect } from "react-redux";
import { fetchAbout } from "../../redux/about-reducer";
import LinearGradient from "react-native-linear-gradient";
import NavigationBar from "react-native-navbar";
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15
  }
});
class AboutContainer extends Component {
  static route = {
    navigationBar: {
      title: "About",
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

  constructor() {
    super();
    this.state = {
      items: [],
      isLoading: false
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    this.props.dispatch(fetchAbout());
  }

  render() {
    return (
      <View>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <About list={this.props.items} isloading={this.props.isLoading} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.about.isLoading,
  items: state.about.items,
  error: state.about.error
});

export default connect(mapStateToProps)(AboutContainer);
