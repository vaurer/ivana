import React, { Component } from "react";
import styles from "./Products.module.css";

class Products extends Component {
  state = {};
  render() {
    return (
      <div className={styles.containerProducts}>
        <img className={styles.responsive}
          src={this.props.element.photo.data.thumbnails[5].url}
          alt={this.props.element.photo.productname}
        />
        <div className={styles.contentProducts}>
          <h4 className={styles.textInBox}>{this.props.element.productname}</h4>
          <p className={styles.textInBox}>{this.props.element.description}</p>
        </div>
      </div>
    );
  }
}
export default Products;
