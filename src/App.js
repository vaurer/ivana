import "./App.css";
import React, { Component} from "react";
import ParallaxHolder from './components/ParallaxHolder/ParallaxHolder'
import Constants from "./helper/Constants";
import { If, Else } from 'rc-if-else';
import Form from './components/Footer/Form'
import GoogleMaps from "./components/Footer/GoogleMaps";
import Navbar from './components/Navbar/Navbar'
import ProductsHolder from "./components/ProductsHolder/ProductsHolder";
import AboutUsHolder from "./components/AboutUs/AboutUsHolder";
import Pricelist from "./components/Pricelists/Pricelist";
import * as ReactBootStrap from 'react-bootstrap';
import MediaHolder from "./components/Media/MediaHolder";
import ImpressumHolder from "./components/Impressum/ImpressumHolder";
import Jobs from "./components/Jobs/Jobs";
import {Switch, Route} from "react-router-dom";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
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
      goto3:false,
      navbar:'inline-block'
    };
  }

  scroollto3=()=>{
    this.setState({
      goto3:true,
    } );
    setTimeout(function() {
      this.setState({goto3: false})
  }.bind(this), 3000);
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
          showApp:true,
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
                aboutUs: result.public,
                aboutUsTitle: result.data[0].title, //nav title
                showApp: true,
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

  navbarHide=()=>{
    this.setState({
      navbar:'none'
    } );
  }
  navbarDisplay=()=>{
    this.setState({
      navbar:''
    } );
  }

  render() {
    return (
      <div className="App">
        <If condition={!this.state.showApp} >
        {<ReactBootStrap.Spinner animation='grow' style={{ position: 'fixed', top: '50%', left: '50%'}}/>}
        <Else >
          <Navbar aboutUs={this.state.aboutUsTitle} scroollto3={this.scroollto3} navbar={this.state.navbar}/>
          <Switch>
            <Route path='/' exact render={() =>
              <ParallaxHolder 
                    goto3={this.state.goto3}
                    show={this.state.showMain}
                    alt={this.state.mainalt}
                    src={this.state.mainimage}
                    maintext={this.state.maintext} 
                    maintitle={this.state.maintitle} 
                    src2={this.state.main2image} 
                    maintitle2={this.state.main2title} 
                    src3={this.state.main3image} 
                    maintitle3={this.state.main3title} />}/>
            <Route path='/media' exact render={() => <MediaHolder /> } />
            <Route path='/form' exact  render={() => <Form onSubmit={(fields) => this.onSubmit(fields)} navbarHide={this.navbarHide} navbarDisplay={this.navbarDisplay}/>} />
            <Route path='/map' exact  render={() => <GoogleMaps navbarHide={this.navbarHide} navbarDisplay={this.navbarDisplay}/>}/>        
            <Route path='/products' exact  render={() => <ProductsHolder/>} />
            <Route path='/aboutus' exact  render={() => <AboutUsHolder/>} />
            <Route path='/impressum' exact render={() => <ImpressumHolder/>} />
            <Route path='/jobs' exact render={() => <Jobs/>} />
            <Route path='/prices' exact render={() => <Pricelist/> } />
          </Switch>
        </Else>
        </If>
      </div>
    );
  }
}