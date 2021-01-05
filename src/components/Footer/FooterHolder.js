import React, { Component } from "react";
import FooterContact from "./FooterContact";

class FooterHolder extends Component {
  render() {
    return <FooterContact formToggleHandler={this.props.formToggleHandler}/>;
  }
}
export default FooterHolder;
