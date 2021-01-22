import React, { Component } from "react";
import Constants from "../../helper/Constants";
import Products from "../Products/Products";
import styles from "./ProductsHolder.module.css";

class ProductsHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      productsArray: [],
    };
  }
  componentDidMount() {
    fetch(Constants.products)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            productsArray: result.data,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  getProducts = () => {
    let widgets = [];
    this.state.productsArray.forEach((element) => {
      widgets.push(<Products key={element.id} element={element} />);
    });
    return widgets;
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>{this.getProducts()}</div>
      </div>
    );
  }
}

export default ProductsHolder;
