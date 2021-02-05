import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
// import ParallaxHolder from '../ParallaxHolder/ParallaxHolder'

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


  render() {
    return (
      <div >
        <nav className="NavbarItems">
          <h1
            className="navbar-logo"
            onClick={event =>  window.location.href='/'}>
            Ivanahairart{" "}</h1>
          <div className="menu-icon" onClick={this.handleClick}>
            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          {<ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
              <li key="11"><NavLink key="1" className="navButton" to='/aboutus' onClick={this.handleClick}>Ivana</NavLink></li>
              <li key="12"><NavLink key="2" className="navButton" to='/media' onClick={this.handleClick}>Galerie</NavLink></li>
              <li key="13"><NavLink key="3" className="navButton" to='/products'onClick={this.handleClick}>Produkte</NavLink></li>
              <li key="14"><NavLink key="4" className="navButton" to='/' onClick={this.handleClick}>Kontakt</NavLink></li>
              <li key="15"><NavLink key="5" className="navButton" to='/prices' onClick={this.handleClick}>Preise</NavLink></li>
              <li key="16"><NavLink key="6" className="navButton" to='/jobs' onClick={this.handleClick}>Jobs</NavLink></li>
            </ul>
          }
        </nav>
      </div>
    );
  }
}

export default Navbar;

