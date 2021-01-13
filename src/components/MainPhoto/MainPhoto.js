import React, { Component } from 'react';
import styles from "./MainPhoto.module.css";

class MainPhoto extends Component {
    render() { 
        return ( 
                <div>
                <img className={styles.imgMain} alt={this.props.alt} src={this.props.src}></img>
                </div> 
         );
    }
}
export default MainPhoto;