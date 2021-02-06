import React, { Component } from "react";
import Constants from "../../helper/Constants";
import Products from "../Products/Products";
import styles from "./ProductsHolder.module.css";
import { If, Else } from 'rc-if-else';
import * as ReactBootStrap from 'react-bootstrap';

class ProductsHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      productsArray: [],
      showMedia:false,
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
            showMedia:true,
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
      <If condition={this.state.showMedia} >
      <div className={styles.wrapper}>
        <div className={styles.container}>
        <div className={styles.content}><h1>Produkte</h1>{this.getProducts()}</div>
      </div>
      </div>
      <Else>{<ReactBootStrap.Spinner animation='grow' style={{ position: 'fixed', top: '50%', left: '50%'}}/>}</Else>
    </If>
    );
  }
}

export default ProductsHolder;
