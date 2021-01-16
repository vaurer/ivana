import React, { Component } from "react";
import Constants from "../../helper/Constants";

class AboutUsHolder extends Component{
    constructor(props) {
        super(props);
        this.state = {
          isLoaded: false,
          aboutUsArray: [],
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
      getInfo = () => {
        let widgets = [];
        this.state.aboutUsArray.forEach((element) => {
          widgets.push(<Products key={element.id} element={element} />); //used for AboutUS
        });
        return widgets;
      };
    
      render() {
        return (
          <div style={{ margin: "150px" }}>
              <h1>Über uns</h1>
            <div>{this.getInfo()}</div>
            
          </div>
        );
      }
    }
export default AboutUsHolder;