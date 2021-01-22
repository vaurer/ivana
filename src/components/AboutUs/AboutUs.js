import React, { Component } from "react";
import styles from "./AboutUs.module.css";

class AboutUs extends Component {

  getAboutUsPictures = () => {
    console.log(this.props.aboutUsArray)
    let widgets = [];
    this.props.aboutUsArray.forEach((element) => {
      widgets.push(
      <div className={styles.column} key={element.id}>
        <img src={element.image.data.thumbnails[3].url} alt={element.image.title} style={{width:'100%'}}/>
    </div>);
    });
    return widgets;
  };

  render() {
    return (
        <div>
            <div className={styles.row}>
            <div>{this.getAboutUsPictures()}</div>
            </div>
        </div>
    );
  }
}
export default AboutUs;