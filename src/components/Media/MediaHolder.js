import React, { Component } from 'react';
import { SRLWrapper } from "simple-react-lightbox";
import Constants from "../../helper/Constants";
// USE THE IMPORT BELOW INSTEAD IF YOU ARE USING THE PRO VERSION
// import { SRLWrapper } from 'simple-react-lightbox-pro'

// Create an array of objects that you want to pass to the lightbox

class MediaHolder extends Component {
  state = { elements:[] }
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
          this.state.items.forEach((element) => {
            console.log(element)
            if (element.isactive === true) {
              let line = {
                    width: 1024,
                    height: 'auto',
                    src: element.photo.data.thumbnails[3].url,
                    thumbnail: element.photo.data.thumbnails[3].url,
                    caption: element.name,
                    alt: element.name,
                    items: element.fotos
              };
              tempdata.push(line);
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

  getItems = () => {
    let widgets = [];
    this.state.elements.forEach(element => {
      widgets.push(
      <a href={element.src}>
          <img src={element.thumbnail} alt={element.alt} />
        </a>)
    });
    return widgets;
  };
  
  render() {
    return  <SRLWrapper>{this.getItems()}</SRLWrapper>
  }
}
export default MediaHolder;

