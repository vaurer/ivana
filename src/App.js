import "./App.css";
import React, { Component } from "react";
import ParallaxHolder from './components/ParallaxHolder/ParallaxHolder'
// import PicAndTextHolder from "./components/PicAndTextHolder/PicAndTextHolder";
// import { Parallax, ParallaxLayer } from 'react-spring/addons'
import Navbar from "./components/Navbar/Navbar";
// import MainPhoto from "./components/MainPhoto/MainPhoto";
import FooterHolder from "./components/Footer/FooterHolder";
import Constants from "./helper/Constants";
// import Section from "./components/Section";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picandtextArray: [],
      mainphoto: [],
      isLoaded: false,
      isLoaded1: false,
      mainid: "",
      mainalt: "null",
      maintitle: "null",
      maintext: "null",
      mainimage: "null",
    };
  }

  componentDidMount() {
    let temppicandtextArray = [];
    fetch(Constants.aboutURL)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded1: true,
            items: result.data,
          });
          this.state.items.forEach((element) => {
            if (element.isactive === true) {
              let line = {
                id: element.id,
                alt: element.alt,
                title: element.title,
                text: element.text,
                image: element.image.data.thumbnails[5].url,
              };
              temppicandtextArray.push(line);
            }
          });
          this.setState({
            isLoaded1: true,
            picandtextArray: temppicandtextArray,
          });
        },
        (error) => {
          this.setState({
            isLoaded1: true,
            error,
          });
        }
      );

    fetch(Constants.restMainPicture)
      .then((res2) => res2.json())
      .then(
        (result2) => {
          this.setState({
            isLoaded: true,
            mainid: result2.data[0].id,
            mainalt: result2.data[0].alt,
            maintitle: result2.data[0].title,
            maintext: result2.data[0].textarea,
            mainimage: result2.data[0].picture.data.thumbnails[5].url,
          });
          console.log(this.state.mainalt);
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
      <div className="App">
        <Navbar />
        {/* <MainPhoto
          alt={this.state.mainalt}
          src={this.state.mainimage}
          maintitle={this.state.maintitle}
          maintext={this.state.maintext}
        ></MainPhoto>
        <Section bgimage="./static/images/cards/1.jpg">
          <div> TEST </div>
        </Section>
        <PicAndTextHolder picandtextArray={this.state.picandtextArray} /> */}

        <ParallaxHolder src={this.state.mainimage}/>
        <FooterHolder />
      </div>
    );
  }
}
