import React, { Component } from "react";
import styles from "./Pricelist.module.css";
class Price extends Component {
  getRows = () => {
    let widgets = [];
    if (this.props.price2 === null) {
      widgets.push(
        <React.Fragment key={this.props.id}>
          {" "}
          {/* the shortcut of React.Fragment are empty tags */}
          <td>{this.props.name}</td>
          <td colSpan="3">{this.props.price1}</td>
        </React.Fragment>
      );
    } else {
      widgets.push(
        <React.Fragment key={this.props.id}>
          <td>{this.props.name}</td>
          <td>{this.props.price1}</td>
          <td>{this.props.price2}</td>
          <td>{this.props.price3}</td>
        </React.Fragment>
      );
    }
    widgets = widgets.sort();

    return widgets;
  };
  render() {
    return <tr className={styles.serviceItems}>{this.getRows()}</tr>;
  }
}
export default Price;
