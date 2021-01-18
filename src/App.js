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
import AboutUsHolder from "./components/AboutUs/AboutUsHolder";
import Pricelist from "./components/Pricelists/Pricelist";

export default class App extends Component {

  mainSiteToggleHandler = () => {
    // this.props.history.push("/")
    this.setState({ showGalery: false });
    this.setState({ showMain: true });
    this.setState({ showForm: false });
    this.setState({ showMap: false });
    this.setState({ showCell: false });
    this.setState({ showVideos: false });
    this.setState({ showProducts: false });
    this.setState({ showAboutUs: false });
    this.setState({ showNav: true });
    this.setState({ showPrices: false });
  };

  mainSiteToggleHandler2 = () => {
    // this.props.history.push("/")
    this.setState({ showGalery: false });
    this.setState({ showMain: true });
    this.setState({ showForm: false });
    this.setState({ showMap: false });
    this.setState({ showCell: false });
    this.setState({ showVideos: false });
    this.setState({ showProducts: false });
    this.setState({ showAboutUs: false });
     this.setState({ showNav: true });
     this.setState({ showPrices: false });
  };

  mainSite3ParToggleHandler = () => {
    // this.props.history.push("/")
    this.setState({ showGalery: false });
    this.setState({ showMain: true });
    this.setState({ showForm: false });
    this.setState({ showMap: false });
    this.setState({ showCell: false });
    this.setState({ showVideos: false });
    this.setState({ showProducts: false });
    this.setState({ showAboutUs: false });
    this.setState({ showPrices: false });
  };

  galeryToggleHandler = () => {
    // this.props.history.push("/gallery")
    this.setState({ showGalery: true });
    this.setState({ showMain: false });
    this.setState({ showForm: false });
    this.setState({ showMap: false });
    this.setState({ showCell: false });
    this.setState({ showVideos: false });
    this.setState({ showProducts: false });
    this.setState({ showAboutUs: false });
    this.setState({ showPrices: false });
  };

  productsToggleHandler = () => {
    this.setState({ showGalery: false });
    this.setState({ showMain: false });
    this.setState({ showForm: false });
    this.setState({ showMap: false });
    this.setState({ showCell: false });
    this.setState({ showVideos: false });
    this.setState({ showProducts: true });
    this.setState({ showAboutUs: false });
    this.setState({ showPrices: false });
  };

  aboutUsToggleHandler = () => {
    this.setState({ showGalery: false });
    this.setState({ showMain: false });
    this.setState({ showForm: false });
    this.setState({ showMap: false });
    this.setState({ showCell: false });
    this.setState({ showVideos: false });
    this.setState({ showProducts: false });
    this.setState({ showAboutUs: true });
    this.setState({ showNav: true });
    this.setState({ showPrices: false });
  };

  pricesToggleHandler = () => {
    this.setState({ showGalery: false });
    this.setState({ showMain: false });
    this.setState({ showForm: false });
    this.setState({ showMap: false });
    this.setState({ showCell: false });
    this.setState({ showVideos: false });
    this.setState({ showProducts: false });
    this.setState({ showAboutUs: false });
    this.setState({ showNav: true });
    this.setState({ showPrices: true });
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
    this.setState({ showGalery: false });
    this.setState({ showMain: false });
    this.setState({ showForm: true });
    this.setState({ showMap: false });
    this.setState({ showCell: false });
    this.setState({ showVideos: false });
    this.setState({ showProducts: false });
    this.setState({ showAboutUs: false });
    this.setState({ showNav: false });
    this.setState({ showPrices: false });
  };

  formToggleHandler = (e) => {
    e.preventDefault();
    // this.props.history.push("/form")
    this.setState({ showGalery: false });
    this.setState({ showMain: false });
    this.setState({ showForm: true });
    this.setState({ showMap: false });
    this.setState({ showCell: false });
    this.setState({ showVideos: false });
    this.setState({ showProducts: false });
    this.setState({ showAboutUs: false });
    this.setState({ showNav: false });
    this.setState({ showPrices: false });
  };

    mapToggleHandler = (e) => {
      e.preventDefault();
      this.setState({ showGalery: false });
      this.setState({ showMain: false });
      this.setState({ showForm: false });
      this.setState({ showMap: true });
      this.setState({ showCell: false });
      this.setState({ showVideos: false });
      this.setState({ showProducts: false });
      this.setState({ showAboutUs: false });
      this.setState({ showNav: false });
      this.setState({ showPrices: false });
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
      showAboutUs:false,
      isLoaded: false,
      isLoaded1: false,
      aboutUs: false,
      showPrices: false,
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
      aboutUsTitle:'null',
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

    fetch(Constants.aboutURL)
          .then((res) => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                aboutUsArray: result.data,
                title:result.data[0].title,
                text:result.data[0].text,
                aboutUs:result.public,
                aboutUsTitle:result.data[0].title,
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
        <Navbar 
        aboutUs={this.state.aboutUsTitle}
        mainSiteToggleHandler={this.mainSiteToggleHandler} 
        aboutUsToggleHandler={this.aboutUsToggleHandler}
        galeryToggleHandler={this.galeryToggleHandler}
        productsToggleHandler={this.productsToggleHandler}
        mainSite3ParToggleHandler={this.mainSite3ParToggleHandler} 
        pricesToggleHandler={this.pricesToggleHandler}/>
        
        </If>
        <If condition={this.state.showMain} >
        <ParallaxHolder 
          goto3ToggleHandler={this.goto3ToggleHandler}
          show={this.state.showMain}
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
          <Form onSubmit={(fields) => this.onSubmit(fields)} mainSiteToggleHandler={this.mainSiteToggleHandler}/>
        </If>
        <If condition={this.state.showMap}>
          <GoogleMaps mainSiteToggleHandler2={this.mainSiteToggleHandler2}/>
        </If>
        <If condition={this.state.showProducts}>
        <ProductsHolder mainSiteToggleHandler={this.mainSiteToggleHandler}/>
        </If>
        <If condition={this.state.showAboutUs}>
        <AboutUsHolder/>
        </If>
        <If condition={this.state.showPrices}>
        <Pricelist/>
        </If>
        </div>
      </div>
    );
  }
}
