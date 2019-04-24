import React, { Component } from "react";
import { connect } from "react-redux";

import { Button } from "../Button";
import { handleClick } from "./actions";

class Number extends Component {
  onClick = () => {
    const { text, handleClick } = this.props;
    handleClick(text);
  };

  render() {
    const { text } = this.props;
    return <Button onClick={this.onClick} text={text} />;
  }
}

const mapDispatchToProps = dispatch => ({
  handleClick: data => dispatch(handleClick(data))
});

/* HOC */
export default connect(
  null,
  mapDispatchToProps
)(Number);
