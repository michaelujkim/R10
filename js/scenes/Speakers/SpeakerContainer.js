import React, { Component } from "react";
import PropTypes from "prop-types";

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
    return <Speaker list={this.props.speakers} />;
  }
}

const mapStateToProps = state => ({
  isLoading: state.speakers.isLoading,
  speakers: state.speakers.speakers,
  error: state.speakers.error
});

export default connect(mapStateToProps)(SpeakerContainer);
