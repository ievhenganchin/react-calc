import React, { Component } from "react";
import { connect } from "react-redux";
import {api} from '../../middlewares/api';
import { Button } from "../Button";
// import actions, {CALL_API} from "./actions";
import {handleCommandClick} from "./actions";

class Command extends Component {
  onClick = () => {
    const {type, handleClick, url, params, method } = this.props;
    handleClick({ url, params, method}, type);
  };

  render() {
    const { text ,url} = this.props;
    return <Button onClick={this.onClick} url={url} text={text} />;
  }
}


const mapDispatchToProps = dispatch => ({
  handleClick: (data, type) => dispatch(handleCommandClick(data))
});

/* HOC */
export default connect(
  null,
  mapDispatchToProps
)(Command);
