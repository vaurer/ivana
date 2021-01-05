import React, { Component } from "react";
import FooterContact from "./FooterContact";
/* import styles from './Footer.module.css'; */
// import Form from "./Form";
// import { If } from "rc-if-else";

class FooterHolder extends Component {
  onSubmit = (fields) => {
    console.log("Die App componente hat die Daten überbekommen: ", fields);
  };

  render() {
    return <FooterContact />;
  }
}
export default FooterHolder;
