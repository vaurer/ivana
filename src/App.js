import "./App.css";
import React, { Component } from "react";
import PicAndTextHolder from "./components/PicAndTextHolder/PicAndTextHolder";

import Navbar from "./components/Navbar/Navbar";
import MainPhoto from "./components/MainPhoto/MainPhoto";
import FooterHolder from './components/Footer/FooterHolder'

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
    fetch("https://cms.ivanahairart.ch/ivanahairart/items/aboutus?fields=*.*.*")
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

    fetch("https://cms.ivanahairart.ch/ivanahairart/items/mainpicture?fields=*.*.*")
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
        
        <div>
          <Navbar />
        </div>
       

        <MainPhoto
          alt={this.state.mainalt}
          src={this.state.mainimage}
          maintitle={this.state.maintitle}
          maintext={this.state.maintext}
        ></MainPhoto>
        <PicAndTextHolder picandtextArray={this.state.picandtextArray} />
        <FooterHolder/>
      </div>
      
    );
  }
}
