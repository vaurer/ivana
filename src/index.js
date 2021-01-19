import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Route, BrowserRouter as Router } from "react-router-dom";
// import {  BrowserRouter  } from "react-router-dom";
import Cell from "./components/PhotoGrid/Cell";
import GoogleMaps from './components/Footer/GoogleMaps'
import Form from "./components/Footer/Form";
import Pricelist from "./components/Pricelists/Pricelist";
import AboutUsHolder from "./components/AboutUs/AboutUsHolder";
import ProductsHolder from "./components/ProductsHolder/ProductsHolder";
import 'bootstrap/dist/css/bootstrap.min.css';

// const routing = (
//   <Router>
//     <div>
//       <Route exact path="/" component={App}></Route>
//       <Route exact path="/gallery" component={Cell}></Route>
//       <Route exact path="/map" component={GoogleMaps}></Route>
//       <Route exact path="/form" component={Form}></Route>
//       <Route exact path="/products" component={ProductsHolder}></Route>
//       <Route exact path="/aboutus" component={AboutUsHolder}></Route>
//       <Route exact path="/prices" component={Pricelist}></Route>
      
//     </div>
//   </Router>
// );

ReactDOM.render(<App/>, document.getElementById("root"));

// ReactDOM.render(
  // <BrowserRouter>
  // <App/>
  // </BrowserRouter>
  // , document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
