import React, { Component } from "react";
import styles from "./Products.module.css";

class Products extends Component {
  state = {};

  getTextPart() {
    return (
      <div className={styles.textContainer}>
        <h1>{this.props.element.description}</h1>
      </div>
    );
  }
  render() {
    return (
      <div className={styles.container}>
        <img
          src={this.props.element.photo.data.thumbnails[5].url}
          alt={this.props.element.photo.productname}
        />
        <div className={styles.textBlock}>
          <h4 className={styles.textInBox}>{this.props.element.productname}</h4>
          <h6 className={styles.textInBox}>{this.props.element.description}</h6>
        </div>
      </div>
    );
  }
}
export default Products;
