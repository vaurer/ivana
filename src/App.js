import "./App.css";
import React, { Component } from "react";
import ParallaxHolder from './components/ParallaxHolder/ParallaxHolder'
import Navbar from "./components/Navbar/Navbar";
import MainPhoto from "./components/MainPhoto/MainPhoto";
import Constants from "./helper/Constants";
import Cell from './components/PhotoGrid/Cell'
import { If } from 'rc-if-else';
import Form from './components/Footer/Form'

export default class App extends Component {

  mainSiteToggleHandler = () => {
    this.setState({ showGalery: false });
    this.setState({ showMain: true });
    this.setState({ showForm: false });
  };

  galeryToggleHandler = () => {
    this.setState((prevState) => {
      return { 
        showGalery: !prevState.showGalery,
        showVideos: !prevState.showVideos,
        showMain: !prevState.showMain,
        showCell: !prevState.showCell
      };
    });
  };

  videosToggleHandler = () => {
    this.setState((prevState) => {
      return { 
        showVideos: !prevState.showVideos,
        showMain: !prevState.showMain,
        showCell: !prevState.showCell
      };
    });
  };

  cellToggleHandler = () => {
    this.setState((prevState) => {
      return { showCell: !prevState.showCell };
    });
  };

  formToggleHandler = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      return { showForm: !prevState.showForm,
        showMain: !prevState.showMain
      };
    });
  };
  

  constructor(props) {
    super(props);
    this.state = {
      showMain: true,
      showGalery: false,
      showCell:true,
      showForm:false,
      showVideos:false,
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
        <Navbar mainSiteToggleHandler={this.mainSiteToggleHandler}/>
        </div>
        <div>
        <If condition={this.state.showMain} >
        <MainPhoto
          show={this.state.showMain}
          alt={this.state.mainalt}
          src={this.state.mainimage}
          maintitle={this.state.maintitle}
          maintext={this.state.maintext}
        ></MainPhoto>
        
        <ParallaxHolder src={this.state.mainimage} maintitle={this.state.maintitle} src2={this.state.main2image} maintitle2={this.state.main2title} src3={this.state.main3image} maintitle3={this.state.main3title} formToggleHandler={this.formToggleHandler} galeryToggleHandler={this.galeryToggleHandler} videosToggleHandler={this.videosToggleHandler}/>
        </If>
        </div>
        <div>
        <If condition={this.state.showGalery} >
        <Cell/>
        </If>
        </div>
        <div>
        <If condition={this.state.showForm}>
          <Form onSubmit={(fields) => this.onSubmit(fields)} />
        </If>
        </div>
      </div>
    );
  }
}
