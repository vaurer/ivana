import React, { Component } from 'react';
import Constants from '../../helper/Constants';
class Impressum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            impressums: [],
            isloaded: false,
        }
    }
    componentDidMount() {
        fetch(Constants.impressum)
            .then((response) => response.json())
            .then((result) => {
                this.setState({
                    name: result.data[0].name,
                    street: result.data[0].street,
                    zipcity: result.data[0].zipcity,
                    phone: result.data[0].phone,
                    email: result.data[0].email,
                    uid: result.data[0].uid
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
            <div onClick={this.props.impressumToggleHandler}>
                <div>
                    <i className="fas fa-times"
                        onClick={this.props.mainSiteToggleHandler2}
                    ></i>
                    <div>{this.state.name}</div>
                    <div>{this.state.street}</div>
                    <div>{this.state.zipcity}</div>
                    <div>{this.state.phone}</div>
                    <div>{this.state.email}</div>
                    <div>{this.state.uid}</div>
                </div>
            </div>
        );
    }
}
export default Impressum;