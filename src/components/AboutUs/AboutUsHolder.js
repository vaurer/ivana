import React, { Component } from "react";
import Constants from "../../helper/Constants";
import AboutUs from "./AboutUs";

class AboutUsHolder extends Component{
    constructor(props) {
        super(props);
        this.state = {
          isLoaded: false,
          aboutUsArray: [],
          title:'',
          text:'',
        };
      }
      componentDidMount() {
        fetch(Constants.aboutURL)
          .then((res) => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                aboutUsArray: result.data,
                title:result.data[0].title,
                text:result.data[0].text,
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
          <div>
            <h1>{this.state.title}</h1>
              <h3>{this.state.text}</h3>
            <AboutUs aboutUsArray={this.state.aboutUsArray}/>

          </div>
        );
      }
    }
export default AboutUsHolder;