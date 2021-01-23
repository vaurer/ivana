import React, { Component } from "react";
import FooterContact from "./FooterContact";

class FooterHolder extends Component {
  render() {
    return <FooterContact formToggleHandler={this.props.formToggleHandler} mapToggleHandler={this.props.mapToggleHandler} mainSiteToggleHandler={this.props.mainSiteToggleHandler} impressumToggleHandler={this.props.impressumToggleHandler}/>;
  }
}
export default FooterHolder;
