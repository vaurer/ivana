import React, { Component } from 'react'

export default class Section extends Component {


    constructor(props) {
        super(props);
        this.divStyle = {
            minHeight: '100vh',
            backgroundColor: this.props.bgcolor,



        };
        if (this.props.bgimage) {
            this.divStyle.backgroundImage = `url(${this.props.bgimage})`;
            this.divStyle.backgroundPosition = 'center';
            this.divStyle.backgroundRepeat = 'no-repeat';
            this.divStyle.backgroundSize = 'cover';
        }

    }


    render() {
        return (
            <div id={this.props.id} style={this.divStyle}>
               {this.props.children}
            </div>
        )
    }
}