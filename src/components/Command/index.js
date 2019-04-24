import React, { Component } from "react";
import { connect } from "react-redux";

import { Button } from "../Button";
import actions from "./actions";

class Command extends Component {
  onClick = () => {
    const { text, type, handleClick } = this.props;
    handleClick(text, type);
  };

  render() {
    const { text } = this.props;
    return <Button onClick={this.onClick} text={text} />;
  }
}

const mapDispatchToProps = dispatch => ({
  handleClick: (data, type) => dispatch(actions[type](data))
});

/* HOC */
export default connect(
  null,
  mapDispatchToProps
)(Command);
