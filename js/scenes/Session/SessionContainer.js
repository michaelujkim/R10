import React, {
  Component
} from "react";
import PropTypes from "prop-types";

import Session from "./Session";
import { connect } from "react-redux";
import { fetchSchedule } from "../../redux/modules/schedule";

class SessionContainer extends Component {

  static propTypes = {};
  componentDidMount() {


  }



  render() {


    return <Session />
  }


}



const mapStateToProps = state => ({
  isLoading: state.schedule.isLoading,
  sessions: state.schedule.sessions,
  error: state.schedule.error
});

export default SessionContainer