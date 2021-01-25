import React, { Component } from "react";
import Impressum from "./Impressum";
import Legal from "./Legal";
import Constants from '../../helper/Constants';
class ImpressumHolder extends Component {
    state = {
        legals: [],
        impressums: [],
    }
    componentDidMount() {
        fetch(Constants.legal)
        .then((response) => response.json())
        .then((result) => {
            let legals = [];
            result.data.forEach((element) => {
                let legal = {
                    idlegal: element.id,
                    headline: element.headline,
                    paragraph: element.paragraph
                }
                legals.push(legal);
            });
            this.setState({
                legals: legals
            })
        } );
        fetch(Constants.impressum)
        .then((resp) => resp.json())
        .then((res) => {
            this.setState({
                name: res.data[0].name,
                street: res.data[0].street,
                zipcity: res.data[0].zipcity,
                phone: res.data[0].phone,
                email: res.data[0].email,
                uid: res.data[0].uid
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
    getLegals = () => {
        let widgets = [];
        this.state.legals.forEach((element) => {
            widgets.push(
                <div>
                  <h1>{element.headline}
                      </h1>  
                    {element.paragraph}
                </div>
            );
            });
        return widgets;
    }; 
    render() {
        return (
            <div >
                <Impressum
                    key={this.state.idlegal}
                    name={this.state.name}
                    street={this.state.street}
                    zipcity={this.state.zipcity}
                    phone={this.state.phone}
                    email={this.state.email}
                    uid={this.state.uid}
                /><p></p>
                <div >
                    <Legal getLegals={this.getLegals()} />
                </div>
            </div>
        );
    }
}
export default ImpressumHolder;