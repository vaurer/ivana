import "./App.css";
import React, { Component } from "react";
import PicAndTextHolder from "./components/PicAndTextHolder/PicAndTextHolder";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picandtextArray: [],
      mainphoto: [],
      isLoaded: false,
      isLoaded1: false,
    };
  }

  componentDidMount() {
    let temppicandtextArray = [];
    fetch("http://174.138.0.120/ivanahairart/items/aboutus?fields=*.*.*")
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

    let mainphoto = [];
    fetch("http://174.138.0.120/ivanahairart/items/mainpicture?fields=*.*.*")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.data,
          });

          let line = {
            id: this.state.items.id,
            alt: this.state.items.alt,
            title: this.state.items.title,
            text: this.state.items.text,
            image: this.state.items.picture.data.thumbnails[3].url,
          };
          mainphoto.push(line);
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
        <div>Work in progress......</div>
        <div>
          <img alt={this.state.mainphoto.alt}>{this.state.mainphoto.image}</img>
          <p>test</p>
        </div>
        <PicAndTextHolder picandtextArray={this.state.picandtextArray} />
      </div>
    );
  }
}
