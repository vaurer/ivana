import React, { Component } from 'react';
import styles from "./Footer.module.css";



class GoogleMaps extends Component {
    state = {
        width: window.screen.width,
        height: window.screen.height,
    }

    
     
    render() {
        return (
            <div >
                <div className={styles.GoogleWrapper}>
                <div className={styles.googleMapClose}> 
                    <i className="fas fa-times" onClick={this.props.mainSiteToggleHandler}></i>
                </div>
                <div></div>
                    <iframe title="GoogleMap" className={styles.MapSize} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2697.206072889158!2d9.587647615589969!3d47.466413579175544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b10eece3fb75d%3A0x20dffe1b57a4a36b!2sHauptstrasse%2018%2C%209424%20Rheineck%2C%20Schweiz!5e0!3m2!1sde!2sat!4v1609792998046!5m2!1sde!2sat"  frameBorder="1" width={this.state.width} height={this.state.height} allowFullScreen></iframe>
                </div>
            </div>
        );
    }
}
export default GoogleMaps;