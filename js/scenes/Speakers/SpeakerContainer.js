import React, {
  Component
} from "react";
import PropTypes from "prop-types";

import Session from "./Session";
import { connect } from "react-redux";
import { fetchSpeakers } from "../../redux/modules/speaker";

class SessionContainer extends Component {

  static propTypes = {};
  componentDidMount() {
    fetch(SPEAKER_URL).then(r => r.json());

  }



  render() {

    return <Speaker list={this.props.speakers} />
  }


}



const mapStateToProps = state => ({
  isLoading: state.speakers.isLoading,
  speaker: state.speakers.speaker,
  error: state.speakers.error
});

export default SessionContainer