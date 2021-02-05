import React, { Component } from 'react';
// import { MediaContext } from '../../context/MediaContext';
import Constants from '../../helper/Constants'
import styles from './MediaHolder.module.css';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import { If, Else, ElIf } from 'rc-if-else';
import * as ReactBootStrap from 'react-bootstrap';
import { SRLWrapper } from "simple-react-lightbox";

class MediaHolder extends Component {
  
  // static contextType = MediaContext;

  state = { 
    elements:[],
    gallery:[],
    items:[],
    showGallery:false,
    showMedia:false,
    galeryNumber:''
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
            if (element.isactive === true) {
              let line = {
                    src: element.photo.data.thumbnails[5].url,
                    thumbnail: element.photo.data.thumbnails[5].url,
                    alt: element.name,
                    key: temp,
                    element: element
              };
              tempdata.push(line);
            }
          });
         
          this.setState({
            showMedia: true,
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

  setGalleryInState(e){
  this.setState({galeryNumber: e.target.alt, showGallery:false});
  this.getGalery()
}

  getFirstLevelItems = () => {
    let widgets = [];
    this.state.elements.forEach(element => {
      widgets.push(
      <div  onClick={this.setGalleryInContext.bind(this)} key={element.key}>
        <div className={styles.picCointer}>
          <img className={styles.onePic} src={element.thumbnail} alt={element.key}/>
          <div className={styles.over}>
            <div className={styles.picGallaryHeader}>
            {element.alt}
            </div>
          </div>
          </div>
        </div>)
    });
    return widgets;
  };

  getGalery() {
    let tempdata2 = [];
    fetch(Constants.photos)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            items: result.data[this.state.galeryNumber].fotos,
          });
          this.state.items.forEach((element) => {
            let line2 = {
              key : element.directus_files_id.title,
              src: element.directus_files_id.data.full_url,
              thumbnail: element.directus_files_id.data.full_url,
              caption: element.directus_files_id.title,
              width: 1024,
              height: "auto",
            };
            tempdata2.push(line2);
          });
          this.setState({
            gallery: tempdata2,
            showMedia:false,
            showGallery: true,
          });

        },
        (error) => {
          this.setState({
            error,
          });
        }
      );
  }
  getItems = () => {
    let widgets = [];
    let x = 0
    this.state.gallery.forEach((element) => {
      x++
      widgets.push(
        <img className={styles.galleryImg} alt={element.caption}
        key={x}
        src={element.thumbnail}
        imgixparams={{
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
    return  (
<If condition={this.state.showMedia} >
  <div className={styles.container}>
    <div className={styles.holderRoot}>
      <GridList cellHeight={300}  spacing={10} className={styles.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div"></ListSubheader>
        </GridListTile>
          {this.state.elements.map((tile) => (
        <GridListTile key={tile.key}>
          <img src={tile.src} alt={tile.key} onClick={this.setGalleryInState.bind(this)} key={tile.key}/>
          <GridListTileBar title={tile.alt} actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={styles.icon}></IconButton>}/>
          </GridListTile>))}
      </GridList>
    </div>
  </div>
  <ElIf condition={this.state.showGallery}>      
    <div className={styles.container}>
      <SRLWrapper items={this.state.elements}>{this.getItems()}</SRLWrapper>
    </div>
  </ElIf>
   <Else>{<ReactBootStrap.Spinner animation='grow' style={{ position: 'fixed', top: '50%', left: '50%'}}/>}</Else>
  </If>
    )
  }
}
export default MediaHolder;
