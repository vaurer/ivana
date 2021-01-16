import React, { Component } from "react";
import styles from "./AboutUs.module.css";

class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoaded: false,
          aboutUsArray: [],
        };
      }

  componentDidMount() {
    fetch(Constants.aboutURL)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            aboutUsArray: result.data,
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

  getAboutUsPictures = () => {
    let widgets = [];
    this.state.aboutUsArray.forEach((element) => {
      widgets.push(
      <div className={styles.column}>
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