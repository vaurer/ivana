import React, { Component } from 'react';
import styles from "./MainPhoto.module.css";

class MainPhoto extends Component {

    render() { 
        return ( 
            <div className={styles.container}>
                <img alt={this.props.alt} src={this.props.src}></img>
                <div className={styles.topLeft}>{this.props.maintitle}</div>
                <div className={styles.bottomRight}>{this.props.maintext}</div>
            </div>
         );
    }
}
 
export default MainPhoto;