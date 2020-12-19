import "./App.css";
import React, { Component } from "react";
import PicAndTextHolder from "./components/PicAndTextHolder/PicAndTextHolder";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picandtextArray: [],
    };
  }

  componentDidMount() {
    let temppicandtextArray = [];
    fetch("http://174.138.0.120/ivanahairart/items/aboutus?fields=*.*.*")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.data,
          });
          this.state.items.forEach((element) => {
            if (element.isactive===true) {
              let line = {
                id: element.id,
                alt: element.alt,
                title: element.title,
                text: element.text,
                image: element.image.data.thumbnails[5].url,
              }
              temppicandtextArray.push(line);
            }
            //console.log(element)
          });
          this.setState({
            isLoaded: true,
            picandtextArray: temppicandtextArray,
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
      <div className="App">
        <div>Work in progress...</div>
        <PicAndTextHolder picandtextArray={this.state.picandtextArray}/>
      </div>
      
    );
  }
}
