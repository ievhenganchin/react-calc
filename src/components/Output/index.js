import React, { Component } from "react";
import { connect } from "react-redux";

class Output extends Component {
  render() {
    return <div>{this.props.result}</div>;
  }
}

export default connect(state => ({
  result: state.result
}))(Output);
