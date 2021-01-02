import "./App.css";
import React, { Component } from "react";
import ParallaxHolder from './components/ParallaxHolder/ParallaxHolder'
// import PicAndTextHolder from "./components/PicAndTextHolder/PicAndTextHolder";
// import { Parallax, ParallaxLayer } from 'react-spring/addons'
import Navbar from "./components/Navbar/Navbar";
import MainPhoto from "./components/MainPhoto/MainPhoto";
import FooterHolder from "./components/Footer/FooterHolder";
import Constants from "./helper/Constants";
// import Section from "./components/Section";
import Cell from './components/PhotoGrid/Cell'

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
      main2id: "",
      main2alt: "null",
      main2title: "null",
      main2text: "null",
      main2image: "null",
      main3id: "",
      main3alt: "null",
      main3title: "null",
      main3text: "null",
      main3image: "null",
    };
  }

  // showAll=()=>{
  //   console.log(this.state.mainimage)
  //   console.log(this.state.maintitle)
  //   console.log(this.state.main2image)
  //   console.log(this.state.main2title)
  //   console.log(this.state.main2image)
  //   console.log(this.state.main3title)
  // }

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

    // fetch(Constants.restMainPicture)
    //   .then((res2) => res2.json())
    //   .then(
    //     (result2) => {
    //       this.setState({
    //         isLoaded: true,
    //         mainid: result2.data[0].id,
    //         mainalt: result2.data[0].alt,
    //         maintitle: result2.data[0].title,
    //         maintext: result2.data[0].textarea,
    //         mainimage: result2.data[0].picture.data.thumbnails[5].url,
    //       });
    //       console.log(this.state.mainalt);
    //     },
    //     (error) => {
    //       this.setState({
    //         isLoaded: true,
    //         error,
    //       });
    //     }
    //   );
    fetch(Constants.aboutURL)
    .then((res2) => res2.json())
    .then(
      (result2) => {
        this.setState({
          isLoaded: true,
          mainid: result2.data[2].id,
          mainalt: result2.data[2].alt,
          maintitle: result2.data[2].title,
          maintext: result2.data[2].textarea,
          mainimage: result2.data[2].image.data.thumbnails[5].url,
          main2id: result2.data[3].id,
          main2alt: result2.data[3].alt,
          main2title: result2.data[3].title,
          main2text: result2.data[3].textarea,
          main2image: result2.data[3].image.data.thumbnails[5].url,
          main3id: result2.data[4].id,
          main3alt: result2.data[4].alt,
          main3title: result2.data[4].title,
          main3text: result2.data[4].textarea,
          main3image: result2.data[4].image.data.thumbnails[5].url,
        });
        console.log(this.state.main3image);
        // this.showAll();
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
        <MainPhoto
          alt={this.state.mainalt}
          src={this.state.mainimage}
          maintitle={this.state.maintitle}
          maintext={this.state.maintext}
        ></MainPhoto>
         <Cell/>
        {/* <Section bgimage="./static/images/cards/1.jpg">
          <div> TEST </div>
        </Section>
        <PicAndTextHolder picandtextArray={this.state.picandtextArray} /> */}

        <ParallaxHolder src={this.state.mainimage} maintitle={this.state.maintitle} src2={this.state.main2image} maintitle2={this.state.main2title} src3={this.state.main3image} maintitle3={this.state.main3title}/>
  
        <FooterHolder />
      </div>
    );
  }
}
