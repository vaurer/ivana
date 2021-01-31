import React, { Component } from 'react';
import { SRLWrapper } from "simple-react-lightbox";
import { MediaContext } from '../../context/MediaContext';
import Constants from '../../helper/Constants'
import styles from './GaleryHolder.module.css';


class GaleryHolder extends Component {
  static contextType = MediaContext;
  state = {
    elements: [],
    items: [],
  };

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
          this.state.items.fotos.forEach((element) => {
            let line = {
              src: element.directus_files_id.data.full_url,
              thumbnail: element.directus_files_id.data.full_url,
              caption: element.directus_files_id.title,
              width: 1024,
              height: "auto",
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
    this.state.elements.forEach((element) => {
      widgets.push(
        <img className={styles.galleryImg} alt={element.caption}
        src={element.thumbnail}
        imgixParams={{
          fit: "crop",
          fm: "jpg"
        }}
        // width={500}
        // height={500}
        />
      );
    });
    return widgets;
  };

  render() {
    return (
      <div className={styles.container}>
      <SRLWrapper items={this.state.elements}>{this.getItems()}</SRLWrapper>
      </div>
    );
  }
}
export default GaleryHolder;      
