import React, { Component } from "react";
import PropTypes from "prop-types";

import Speaker from "./Speaker";
import { connect } from "react-redux";
import { fetchSpeakers } from "../../redux/modules/speaker";

class SpeakerContainer extends Component {
  static propTypes = {};
  // componentDidMount() {
  //   this.props.dispatch();
  // }
  render() {
    return <Speaker list={this.props.route.params.speaker} />;
  }
}

const mapStateToProps = state => ({
  isLoading: state.speakers.isLoading,
  speaker: state.speakers.speaker,
  error: state.speakers.error
});

export default SpeakerContainer;
