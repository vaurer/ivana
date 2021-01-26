import React, { Component } from 'react';
import { SRLWrapper } from "simple-react-lightbox";
import { MediaContext } from '../../context/MediaContext';
import Constants from '../../helper/Constants'

class GaleryHolder extends Component {
  static contextType = MediaContext;
  state={
    elements:[],
    items:[]
  }

  componentDidMount() {
    let tempdata = [];
  fetch(Constants.photos)
  .then((res) => res.json())
  .then(
    (result) => { 
      this.setState({
        isLoaded1: true,
        items: result.data[this.context.galeryName],
      });
      this.state.items.fotos.forEach(element => {
        let line = {
        src: element.directus_files_id.data.full_url,
        thumbnail:element.directus_files_id.data.thumbnails[2].url,
        caption: element.directus_files_id.title,
        width: 1024,
        height: 'auto'
      };
      tempdata.push(line);
      });
      this.setState({
        isLoaded1: true,
        elements: tempdata,
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
  getItems = () => {
    let widgets = [];
    this.state.elements.forEach(element => {
      widgets.push(
      <a href={element.src} key={element.caption}>
          <img src={element.thumbnail} alt={element.caption}/>
        </a>)
    });
    return widgets;
  };

  render() {
    // return  <SRLWrapper>{this.getItems()}</SRLWrapper>
    // return <div><p>Vedran</p></div>
    // return <ImageGallery items={this.state.elements} />
    return  <SRLWrapper items={this.state.elements}>{this.getItems()}</SRLWrapper>
  }
}
export default GaleryHolder;