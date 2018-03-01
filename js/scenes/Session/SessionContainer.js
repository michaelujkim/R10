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
    fetch("https://r10app-95fea.firebaseio.com/sessions.json").then(r => r.json());

  }



  render() {
    console.log(this.props.route.params.sessionData)

    return <Session list={this.props.route.params.sessionData} />
  }


}



const mapStateToProps = state => ({
  isLoading: state.schedule.isLoading,
  sessions: state.schedule.sessions,
  error: state.schedule.error
});

export default SessionContainer