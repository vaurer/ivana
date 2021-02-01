import React, { Component } from "react";
import styles from "./Form.module.css";

class GoogleMaps extends Component {
  state = {
    width: 0,
    height:0,
  };

  componentDidMount(){
    let width= window.screen.width;
    let height= 0;
    let heightOld= 0;
    if(width >= 700){
        heightOld= window.screen.height;
        height = heightOld - 0.3*heightOld;
    } else{
        height = window.screen.height
    }
    this.setState({
        width: width,
        height: height,
    }) 
  }

  render() {
    return (
      <div className={styles.googleBox}>
        <div className={styles.GoogleWrapper}>
          <div>
            <iframe
              title="GoogleMap"
              className={styles.MapSize}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2697.206072889158!2d9.587647615589969!3d47.466413579175544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b10eece3fb75d%3A0x20dffe1b57a4a36b!2sHauptstrasse%2018%2C%209424%20Rheineck%2C%20Schweiz!5e0!3m2!1sde!2sat!4v1609792998046!5m2!1sde!2sat"
              frameBorder="1"
              width={this.state.width}
              height={this.state.height}
              allowFullScreen
            ></iframe>
          </div>
          <div className={styles.googleMapClose}>
            <i
              className="fas fa-times"
              onClick={event =>  window.location.href='/'}
            ></i>
          </div>
        </div>
      </div>
    );
  }
}
export default GoogleMaps;
