import React, { Component } from "react";
import PropTypes from "prop-types";

import Faves from "./Faves";
import { connect } from "react-redux";
import { fetchSchedule } from "../../redux/modules/schedule";
import { queryFaves } from "../../config/models";

class FavesContainer extends Component {
  static route = {
    navigationBar: {
      title: "Faves"
    }
  };
  static propTypes = {};
  componentDidMount() {
    queryFaves();
  }

  render() {
    return <Faves />;
  }
}

export default FavesContainer;
