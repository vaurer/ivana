import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import SimpleReactLightbox from 'simple-react-lightbox'
// import { Route, BrowserRouter as Router, BrowserRouter } from "react-router-dom";
// import Form from "./components/Footer/Form";
// import Pricelist from "./components/Pricelists/Pricelist";
// import AboutUsHolder from "./components/AboutUs/AboutUsHolder";
// import ProductsHolder from "./components/ProductsHolder/ProductsHolder";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import MediaContextProvider from "./context/MediaContext";
// import MediaHolder from "./components/Media/MediaHolder";
// import GoogleMaps from "./components/Footer/GoogleMaps";
// import ImpressumHolder from "./components/Impressum/ImpressumHolder";


// const routing = (
//   <Router>
//     <div>
//       <Route exact path="/" component={App}></Route>
//       <Route exact path="/gallery" component={MediaHolder}></Route>
//       <Route exact path="/media" component={MediaHolder}></Route>
//       <Route exact path="/map" component={GoogleMaps}></Route>
//       <Route exact path="/form" component={Form}></Route>
//       <Route exact path="/products" component={ProductsHolder}></Route>
//       <Route exact path="/aboutus" component={AboutUsHolder}></Route>
//       <Route exact path="/prices" component={Pricelist}></Route>
//       <Route exact path="/impressum" component={ImpressumHolder}></Route>
      
//     </div>
//   </Router>
// );

ReactDOM.render(
  <MediaContextProvider>
    <React.StrictMode>
      <SimpleReactLightbox>

          <App />

      </SimpleReactLightbox>
    </React.StrictMode>
  </MediaContextProvider>,

  document.getElementById("root")
);

// ReactDOM.render(
  // <BrowserRouter>
  // <App/>
  // </BrowserRouter>
  // , document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
