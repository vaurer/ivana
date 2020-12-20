import React, { Component } from 'react';
import styles from "./MainPhoto.module.css";

class MainPhoto extends Component {
    checkprops=()=>{
        console.log(this.props.alt)
    }
    render() { 
        return ( 
            <div className={styles.container}>
                <img alt={this.props.alt} src={this.props.src}>{this.checkprops() }</img>
                <div className={styles.topLeft}>{this.props.maintitle}</div>
            </div>
         );
    }
}
 
export default MainPhoto;