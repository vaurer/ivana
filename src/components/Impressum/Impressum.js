import React, { Component } from 'react';
import styles from './ImpressumHolder.module.css';

class Impressum extends Component {
    state= {}
    render() {
        return (
            <div>
                <div>
                    <div className={styles.bold}>{this.props.name}</div>
                    <div>{this.props.street}</div>
                    <div>{this.props.zipcity}</div><br></br>
                    <div>{this.props.phone}</div>
                    <div>{this.props.email}</div><br></br>
                    <div>{this.props.uid}</div>
                </div>
            </div>
        );
    }
}
export default Impressum;