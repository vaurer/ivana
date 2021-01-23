import React, { Component } from 'react';
import Constants from "../../helper/Constants";

class MediaHolder extends Component {
  state = { 
    elements:[],
  }

  componentDidMount() {
    let tempdata = [];
    fetch(Constants.photos)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded1: true,
            items: result.data,
          });
          let temp=-1;
          this.state.items.forEach((element) => {
            
            temp=temp+1
            console.log(element)
            if (element.isactive === true) {
              let line = {
                    width: 1024,
                    height: 'auto',
                    src: element.photo.data.thumbnails[3].url,
                    thumbnail: element.photo.data.thumbnails[3].url,
                    caption: element.name,
                    alt: element.name,
                    items: element.fotos,
                    key: temp,
              };
              tempdata.push(line);
              console.log(line)
            }
          });
         
          this.setState({
            isLoaded1: true,
            elements: tempdata,
          });
        },
        (error) => {
          this.setState({
            isLoaded1: true,
            error,
          });
        }
      );
  };
  

  getFirstLevelItems = () => {
    let widgets = [];
    this.state.elements.forEach(element => {
      widgets.push(
      <a href={element.src} element={element} onClick={this.runSecondLevel}>
          <img src={element.thumbnail} alt={element.alt} />
        </a>)
    });
    return widgets;
  };

  render() {
    return  <div>{this.getFirstLevelItems()}</div>
  }
}
export default MediaHolder;

