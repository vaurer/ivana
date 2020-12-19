import React, { Component } from "react";
import styles from "./PictureAndText.module.css";

class PictureAndText extends Component {
  state = {};
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.pictureContainer}><img src="/static/images/cards/1.jpg" alt="pic"></img></div>
        <div className={styles.textContainer}><h1>test</h1></div>
      </div>
    );
  }
}

export default PictureAndText;
