import "./App.css";
import React, { Component, Fragment} from "react";
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

  render() {
    return (
     
      <div className="App">
        <If condition={!this.state.showApp} >
        {<ReactBootStrap.Spinner animation='grow' style={{ position: 'fixed', top: '50%', left: '50%'}}/>}
      <Else >
      <Switch>
        
        <Route path='/' exact render={() =>
          <Fragment>
            <ParallaxHolder 
                  show={this.state.showMain}
                  alt={this.state.mainalt}
                  src={this.state.mainimage}
                  maintext={this.state.maintext} 
                  maintitle={this.state.maintitle} 
                  src2={this.state.main2image} 
                  maintitle2={this.state.main2title} 
                  src3={this.state.main3image} 
                  maintitle3={this.state.main3title} />
            <Navbar 
                aboutUs={this.state.aboutUsTitle}/>
          </Fragment>
        }/>

          <Route path='/media' exact render={() =>
           <Fragment>
           <Navbar 
                aboutUs={this.state.aboutUsTitle}/>
          <MediaHolder />
         </Fragment>
       } />

          {/* <Route path='/gallery' exact component={GaleryHolder}/> */}
      
          <Route path='/form' exact  render={() => <Form onSubmit={(fields) => this.onSubmit(fields)} mainSiteToggleHandler={this.mainSiteToggleHandler}/>} />

          <Route path='/map' exact component={GoogleMaps}/>
          
          <Route path='/products' exact  render={() =>
            <Fragment>
            <Navbar 
                aboutUs={this.state.aboutUsTitle}/>
            <ProductsHolder/>
            </Fragment>
            } />

          <Route path='/aboutus' exact  render={() =>
            <Fragment>
            <Navbar 
                aboutUs={this.state.aboutUsTitle}/>
            <AboutUsHolder/>
            </Fragment>
            } />

          <Route path='/impressum' exact render={() =>
            <Fragment>
            <Navbar 
                aboutUs={this.state.aboutUsTitle}/>
            <ImpressumHolder/>
            </Fragment>
            } />

            <Route path='/jobs' exact render={() =>
            <Fragment>
            <Navbar 
                aboutUs={this.state.aboutUsTitle}/>
            <Jobs/>
            </Fragment>
            } />

            <Route path='/prices' exact render={() =>
            <Fragment>
            <Navbar 
                aboutUs={this.state.aboutUsTitle}/>
            <Pricelist/>
            </Fragment>
            } />

          </Switch>
        
        </Else>
        </If>
        
      </div>
      
    );
  }
}