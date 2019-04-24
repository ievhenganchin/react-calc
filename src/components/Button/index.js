import React, { Component } from "react";
import { Button as SemanticButton } from "semantic-ui-react";

export class Button extends Component {
  render() {
    const { text, onClick } = this.props;
    return <SemanticButton onClick={onClick}>{text}</SemanticButton>;
  }
}
