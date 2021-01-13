import "./App.css";
import React, { Component } from "react";
import ParallaxHolder from './components/ParallaxHolder/ParallaxHolder'
import Constants from "./helper/Constants";
import Cell from './components/PhotoGrid/Cell'
import { If } from 'rc-if-else';
import Form from './components/Footer/Form'
import GoogleMaps from "./components/Footer/GoogleMaps";
import Navbar from './components/Navbar/Navbar'
import ProductsHolder from "./components/ProductsHolder/ProductsHolder";

export default class App extends Component {

  mainSiteToggleHandler = () => {
    console.log('mainSiteToggleHandler')
    // this.props.history.push("/")
    this.setState({ showGalery: false });
    this.setState({ showMain: true });
    this.setState({ showForm: false });
    this.setState({ showMap: false });
     this.setState({ showProducts: false });
  };

  galeryToggleHandler = () => {
    // this.props.history.push("/gallery")
    this.setState((prevState) => {
      return { 
        showGalery: !prevState.showGalery,
        showVideos: !prevState.showVideos,
        showMain: !prevState.showMain,
        showCell: !prevState.showCell,
        showProducts: !prevState.showProducts
      };
    });
  };

  productsToggleHandler = () => {
    this.setState((prevState) => {
      return { 
        showMain: !prevState.showMain,
        showCell: !prevState.showCell,
        showProducts: !prevState.showProducts
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
    // this.props.history.push("/form")
    this.setState((prevState) => {
      return { showForm: !prevState.showForm,
        showMain: !prevState.showMain,
        showNav: !prevState.showNav
      };
    });
  };

  mapToggleHandler = (e) => {
    e.preventDefault();
    // this.props.history.push("/googlemaps")
    this.setState((prevState) => {
      return { showMap: !prevState.showMap,
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
      showMap:false,
      showProducts:false,
      showNav:true,
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
          mainimage: result2.data[0].picture.data.full_url,
          main2id: result2.data[1].id,
          main2alt: result2.data[1].alt,
          main2title: result2.data[1].title,
          main2text: result2.data[1].textarea,
          main2image: result2.data[1].picture.data.full_url,
          main3id: result2.data[2].id,
          main3alt: result2.data[2].alt,
          main3title: result2.data[2].title,
          main3text: result2.data[2].textarea,
          main3image: result2.data[2].picture.data.full_url,
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
        <If condition={this.state.showNav} >
        <Navbar mainSiteToggleHandler={this.mainSiteToggleHandler} />
        </If>
        <If condition={this.state.showMain} >
        <ParallaxHolder show={this.state.showMain}
          alt={this.state.mainalt}
          src={this.state.mainimage}
          maintext={this.state.maintext} 
          maintitle={this.state.maintitle} 
          src2={this.state.main2image} 
          maintitle2={this.state.main2title} 
          src3={this.state.main3image} 
          maintitle3={this.state.main3title} 
          formToggleHandler={this.formToggleHandler} 
          galeryToggleHandler={this.galeryToggleHandler} 
          videosToggleHandler={this.videosToggleHandler} 
          mapToggleHandler={this.mapToggleHandler}
          productsToggleHandler={this.productsToggleHandler}/>
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
        <If condition={this.state.showMap}>
          <GoogleMaps mainSiteToggleHandler={this.mainSiteToggleHandler}/>
        </If>
        <If condition={this.state.showProducts}>
        <ProductsHolder mainSiteToggleHandler={this.mainSiteToggleHandler}/>
        </If>
        </div>
      </div>
    );
  }
}
