import React, { Component } from "react";
import { NavLink } from "react-router-dom";
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
      if (!this.state.nav) {
        this.setState({ nav: true });
      }
    } else {
      if (this.state.nav) {
        this.setState({ nav: false });
      }
    }
  };

  // handleClick = () => {
  //   this.setState({ clicked: !this.state.clicked });
  // };

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
              <NavLink key="1" className="navButton" to='/aboutus'>Ivana</NavLink>
              <NavLink key="2" className="navButton" to='/media'>Galerie</NavLink>
              <NavLink key="3" className="navButton" to='/products'>Produkte</NavLink>
              <NavLink key="4" className="navButton" to='/'>Kontakt</NavLink>
              <NavLink key="5" className="navButton" to='/prices'>Preise</NavLink>
              <NavLink key="6" className="navButton" to='/jobs'>Jobs</NavLink>
            </ul>
          }
        </nav>
      </div>
    );
  }
}

export default Navbar;

