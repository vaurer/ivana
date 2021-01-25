import React, { Component } from "react";
import Constants from "../../helper/Constants";
import AboutUs from "./AboutUs";
import styles from "./AboutUs.module.css";

class AboutUsHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      aboutUsArray: [],
      title: "",
      text: "",
      teamPhoto: 'null',
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

      fetch(Constants.ivana)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            teamPhoto: result.data[0].image.data.full_url,
            title: result.data[0].title,
            text: result.data[0].text,
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

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1>{this.state.title}</h1>
            <p>{this.state.text}</p>
            <img className={styles.ivanaMain} src={this.state.teamPhoto} alt={this.state.title} style={{width:'100%'}}/>
          </div>
          <div>
            <AboutUs aboutUsArray={this.state.aboutUsArray} />
          </div>
        </div>
      </div>
    );
  }
}
export default AboutUsHolder;
