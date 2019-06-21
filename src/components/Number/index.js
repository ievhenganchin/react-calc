import React, { Component } from "react";
import { connect } from "react-redux";

import { Button } from "../Button";
import { handleClick } from "./actions";
import { logData } from "../../actions";

class Number extends Component {
  onClick = () => {
    const { text, handleClick, log } = this.props;
    handleClick(text);
    log(text);
  };

  render() {
    const { text } = this.props;
    return <Button onClick={this.onClick} text={text} />;
  }
}

const mapDispatchToProps = dispatch => ({
  handleClick: data => dispatch(handleClick(data)),
  log: data => dispatch(logData(data))
});

/* HOC */
export default connect(
  null,
  mapDispatchToProps
)(Number);
