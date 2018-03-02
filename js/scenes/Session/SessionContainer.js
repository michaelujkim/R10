import React, { Component } from "react";
import PropTypes from "prop-types";

import Session from "./Session";
import { connect } from "react-redux";
import { fetchSchedule } from "../../redux/modules/schedule";
import { fetchSpeakers } from "../../redux/modules/speaker";
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
    return (
      <Session
        list={this.props.route.params.sessionData}
        speakerData={this.props.speakers}
      />
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.speakers.isLoading,
  speakers: state.speakers.speakers,
  error: state.speakers.error
});

export default connect(mapStateToProps)(SessionContainer);
