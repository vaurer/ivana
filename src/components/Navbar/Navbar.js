import React, { Component } from "react";
// import { MenuItems } from "./MenuItems";
import "./Navbar.css";

class Navbar extends Component {
  state = {
    clicked: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.pageYOffset > 340) {
      console.log("if (window.pageYOffset > 340)");
      if (!this.state.nav) {
        this.setState({ nav: true });
      }
    } else {
      if (this.state.nav) {
        this.setState({ nav: false });
      }
    }
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  firstClose=()=>{
    this.handleClick()
    this.props.aboutUsToggleHandler()
  }
  secondClose=()=>{
    this.handleClick()
    this.props.galeryToggleHandler()
  }
  thirdClose=()=>{
    this.handleClick()
    this.props.productsToggleHandler()
  }
  fourthClose=()=>{
    this.handleClick()
    this.props.mainSite3ParToggleHandler()
  }
  fifthClose=()=>{
    this.handleClick()
    this.props.pricesToggleHandler()
  }

  

  render() {
    return (
      <div className={`Nav ${this.state.nav && "Nav__black"}`}>
        <nav className="NavbarItems">
          <h1
            className="navbar-logo"
            onClick={this.props.mainSiteToggleHandler}>
            Ivanahairart{" "}</h1>
          <div className="menu-icon" onClick={this.handleClick}>
            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          {<ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
              <li key="1">
                <div className="navButton" onClick={this.firstClose}>{this.props.aboutUs}</div>
              </li>
              <li key="2">
                <div className="navButton" onClick={this.secondClose}>Galerie</div>
              </li>
              <li key="3">
                <div className="navButton" onClick={this.thirdClose}>Produkte</div>
              </li>
              <li key="4">
                <div className="navButton" onClick={this.fourthClose}>Kontakt</div>
              </li>
              <li key="5">
                <div className="navButton" onClick={this.fifthClose}>Preise</div>
              </li>
            </ul>
          }
        </nav>
      </div>
    );
  }
}

export default Navbar;

