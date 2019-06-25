import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import Output from "../Output";
import Number from "../Number";
import Command from "../Command";
import {Button} from "../Button";

class Calculator extends Component {
  handleClick = (evt, data) => {
    console.log(evt, data);
  };

  render() {
    return (
      <Command text={"GET"} method={"GET"} type={"CALL_API"} url={'https://reqres.in/api/users?page=2'} />
  );
  }
}

export default Calculator;
