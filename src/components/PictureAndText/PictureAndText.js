import React, { Component } from "react";
import styles from "./PictureAndText.module.css";

class PictureAndText extends Component {
  state = {};

  getTextPart() {
    return (
      <div className={styles.textContainer}>
        <h1>{this.props.element.text}</h1>
      </div>
    );
  }
  render() {
    return (
      <div className={styles.container}>
        <div key={this.props.element.id} className={styles.pictureContainer}>
          {this.props.positionOfText}
          <img
            src={this.props.element.image}
            alt={this.props.element.alt}
          ></img>
        </div>
      </div>
    );
  }
}

export default PictureAndText;
