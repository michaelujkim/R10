import React, {
  Component
} from "react";
import PropTypes from "prop-types";

import Schedule from "./Schedule";
import { connect } from "react-redux";
import { fetchSchedule } from "../../redux/modules/schedule";

class ScheduleContainer extends Component {
  static route = {
    navigationBar: {
      title: 'Schedule',
    }
  }
  static propTypes = {};
  componentDidMount() {
    this.setState({ isLoading: true })
    this.props.dispatch(fetchSchedule());
  }
  constructor() {
    super();
    this.state = {
      sessions: [],
      isLoading: false
    };
  }


  render() {


    return <Schedule list={this.props.sessions} isloading={this.props.isLoading}

    />;
  }
}


const mapStateToProps = state => ({
  isLoading: state.schedule.isLoading,
  sessions: state.schedule.sessions,
  error: state.schedule.error
});

export default connect(mapStateToProps)(ScheduleContainer);