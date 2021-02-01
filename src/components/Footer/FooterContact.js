import React, { Component } from "react";
import styles from "./Footer.module.css";
import Constants from "../../helper/Constants"; 

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
  };

  componentDidMount() {

      fetch(Constants.contact) 
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
          <div href={"tel:" + this.state.phonenumber}>
            <p>{this.state.phonenumber}</p>
          </div>
        </div>
        <div className={styles.googleMap} onClick={event => window.location.href='/map'}>
        
        <div >
        <i className="fas fa-map-marked-alt fa-3x"></i>
        <p>{this.state.name} in Google Maps anzeigen</p>
        <p>Hauptstraße 18 / 9424 Rheineck</p>
        </div>
        </div>
        <div className={styles.contactForm}>
        <div  onClick={event =>  window.location.href='/form'} >
        <i className="far fa-envelope fa-3x"></i>
        <p>Kontaktieren Sie uns</p>
        </div>
        </div>
        <div className={styles.contactImpressum}>
        <div onClick={event =>  window.location.href='/impressum'} >
        <i className="fas fa-file-contract fa-3x"></i>
          <p>Impressum</p>
          </div>
        </div>
      </div>
    );
  }
}
export default FooterContact;
