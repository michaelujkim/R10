import React, {
  Component
} from "react";
import PropTypes from "prop-types";

import About from "./About";
import { connect } from "react-redux";
import { fetchAbout } from "../../redux/about-reducer";

class AboutContainer extends Component {
  static route = {
    navigationBar: {
      title: 'About',
    }
  }
  static propTypes = {};

  constructor() {
    super();
    this.state = {
      items: [],
      isLoading: false
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true })
    this.props.dispatch(fetchAbout());
  }

  render() {


    return <About list={this.props.items} isloading={this.props.isLoading}

    />;
  }
}


const mapStateToProps = state => ({
  isLoading: state.about.isLoading,
  items: state.about.items,
  error: state.about.error
});

export default connect(mapStateToProps)(AboutContainer);