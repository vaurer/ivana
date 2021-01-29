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
    this.props.mediaToggleHandler()
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
  sixthClose=()=>{
    this.handleClick()
    this.props.jobsToggleHandler()
  }

  

  render() {
    return (
      // <div className={`Nav ${this.state.nav && "Nav__black"}`}>
      <div>
        <nav className="NavbarItems">
          <h1
            className="navbar-logo"
            onClick={this.props.mainSiteToggleHandler}>
            Ivanahairart{" "}</h1>
          <div className="menu-icon" onClick={this.handleClick}>
            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          {<ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
              <li key="1" className="navButton" onClick={this.firstClose}>
                {this.props.aboutUs}
              </li>
              <li key="2" className="navButton" onClick={this.secondClose}>
                Galerie
              </li>
              <li key="3" className="navButton" onClick={this.thirdClose}>
                Produkte
              </li>
              <li key="4" className="navButton" onClick={this.fourthClose}>
                Kontakt
              </li>
              <li key="5" className="navButton" onClick={this.fifthClose}>
                Preise
              </li>
              <li key="6" className="navButton" onClick={this.sixthClose}>
                Jobs
              </li>
            </ul>
          }
        </nav>
      </div>
    );
  }
}

export default Navbar;

