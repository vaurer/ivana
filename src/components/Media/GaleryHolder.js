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

  static contextType = MediaContext;

  componentDidMount() {
    let tempdata = [];
    fetch(Constants.photos+this.context.galeryName)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded1: true,
            items: result.data,
          });
          this.state.items.forEach((element) => {
            if (element.isactive === true && element.name===this.context.galeryName) {
              let line = {
                src: element.fotos.directus_files_id.data.thumbnails[5].url,
                thumbnail: element.fotos.directus_files_id.data.thumbnails[5].url,
                caption: element.fotos.directus_files_id.title,
                width: 1024,
                height: 'auto'
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
  // componentDidMount() {
    
  //   console.log("MOTHER FUCKER "+this.context.galeryName)

  //   // let widgets = [];
  //   // this.context.value.forEach(element => {
  //   //   widgets.push({
  //   //     src: element.directus_files_id.data.thumbnails[5],
  //   //     thumbnail: element.directus_files_id.data.thumbnails[5],
  //   //     caption: element.directus_files_id.title,
  //   //     width: 1024,
  //   //     height: 'auto'
  //   //   })
  //   // });
  //   // this.setState({
  //   //     elements: widgets,
  //   //   });
  // };

  render() {

    return <SRLWrapper elements={this.state.elements} />
    // return <div>{this.context.galeryName}</div>
  }
}
export default GaleryHolder;