import React, { Component } from 'react';
class Impressum extends Component {
    state= {}
    render() {
        return (
            <div>
                <div>
                    <div>{this.props.name}</div><br></br>
                    <div>{this.props.street}</div>
                    <div>{this.props.zipcity}</div>
                    <div>{this.props.phone}</div>
                    <div>{this.props.email}</div><br></br>
                    <div>{this.props.uid}</div>
                </div>
            </div>
        );
    }
}
export default Impressum;