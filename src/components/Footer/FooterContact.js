import React, { Component } from "react";
import styles from "./Footer.module.css";
/* import Constants from "../../helper/Constants"; */
// import GoogleMaps from "./GoogleMaps";
// import { If } from "rc-if-else";

class FooterContact extends Component {
  constructor() {
    super();
    this.state = {
      showMap: false,
      isLoaded: false,
      contactid: "null",
      hours: "null",
      phonenumber: "null",
    };
  }
  showGoogleMap = (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      showMap: !prevState.showMap,
    }));
    // console.log(this.state.showMap + 'xxx')
  };

  componentDidMount() {
    let url =
      "https://cms.ivanahairart.ch/ivanahairart/items/contact?fields=*.*";
    fetch(url)
      /*                   fetch(Constants.contact) */
      .then((response) => response.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            contactid: result.data[0].id,
            hours: result.data[0].hours,
            phonenumber: result.data[0].phonenumber,
            name: result.data[0].name,
            zipcode: result.data[0].zipcode,
            street: result.data[0].street,
          });
          // console.log(this.state.contactid);
          // console.log(this.state.hours);
          // console.log(this.state.phonenumber);
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
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h1>
          Wir freuen uns auf Ihren Besuch
          </h1>
        </div>
        <div className={styles.ContactText}>
        <i className="far fa-clock fa-3x fa-spin"></i>
          <h2>
          Öffnungszeiten
          </h2>
          <p>{this.state.hours}</p>
          <p>
          Termine unter
          </p>
          <a href={"tel:" + this.state.phonenumber}>
            <p>{this.state.phonenumber}</p>
          </a>
        </div>
        <div className={styles.googleMap} onClick={this.props.mapToggleHandler}>
        
        <a href=" " >
        <i className="fas fa-map-marked-alt fa-3x"></i>
        <p>{this.state.name} in Google Maps anzeigen</p>
        <p>Hauptstraße 18 / 9424 Rheineck</p>
        </a>
        {/* <If condition={this.state.showMap}>
            <div className={styles.googleMapShows}>
            <GoogleMaps />
            </div>
            <p>
              {this.state.street}, {this.state.zipcode}
            </p>
          </If> */}
        </div>
        <div className={styles.contactForm}>
        <a href=" " onClick={this.props.formToggleHandler}>
        <i className="far fa-envelope fa-3x"></i>
        <p>Kontaktieren Sie uns</p>
        </a>
        </div>
        <div className={styles.contactImpressum}>
        <i className="fas fa-file-contract fa-3x"></i>
          <p>Impressum</p>
        </div>
        {/* <div className={styles.Center}>
          Überschrift
          <div className={styles.ContactTitle}>
            <h1>Wir freuen uns auf Ihren Besuch</h1>
          </div>
          <div className={styles.ContactIcon}>
            <i className="far fa-clock fa-3x fa-spin"></i>
          </div>
          <div className={styles.ContactText}>
            <div>Öffnungszeiten</div>
            <div>{this.state.hours}</div>
            <div>Termine unter</div>
            <div>
              <a href={"tel:" + this.state.phonenumber}>
                {this.state.phonenumber}
              </a>
            </div>
            <div>{this.state.phonenumber}</div>
          </div>
          <a href=" " onClick={this.showGoogleMap}>

            <div className={styles.ContactIcon}>
              <i className="fas fa-map-marked-alt fa-3x"></i>
              <i class="fas fa-map-marker-alt fa-3x"></i>
            </div>
            <div className={styles.ContactText}>
              {this.state.name} in Google Maps anzeigen
            </div>
          </a>
          <div></div>
          <If condition={this.state.showMap}>
            <GoogleMaps />
            <div className={styles.ContactText}>
              {this.state.street}, {this.state.zipcode}
            </div>
          </If>
          <a href=" " onClick={this.props.formToggleHandler}>
            <div className={styles.ContactIcon}>
              <i className="far fa-envelope fa-3x"></i>
            </div>
            <div className={styles.ContactText}>Kontaktieren Sie uns</div>
          </a>
          <div className={styles.ContactIcon}>
            <i className="fas fa-file-contract fa-3x"></i>
          </div>
          <div className={styles.ContactText}>Impressum</div>
          https://2sicgeeks.wordpress.com/2012/03/27/beispiel-impressum-fur-die-schweiz/
        </div> */}
      </div>
    );
  }
}
export default FooterContact;
