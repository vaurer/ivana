import React, { Component } from 'react';
import { MediaContext } from '../../context/MediaContext';
import Constants from '../../helper/Constants'
import styles from './MediaHolder.module.css';

class MediaHolder extends Component {
  
  static contextType = MediaContext;

  state = { 
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
            items: result.data,
          });
          let temp=-1;
          this.state.items.forEach((element) => {
            
            temp=temp+1
            if (element.isactive === true) {
              let line = {
                    src: element.photo.data.thumbnails[3].url,
                    thumbnail: element.photo.data.thumbnails[3].url,
                    alt: element.name,
                    key: temp,
                    element: element
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

setGalleryInContext(e){
  this.context.setGaleryName(e.target.alt)
this.props.galeryToggleHandler()
}

  getFirstLevelItems = () => {
    let widgets = [];
    this.state.elements.forEach(element => {
      console.log(element.key)
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

  render() {

    return  <div className={styles.container}>
    {this.getFirstLevelItems()}
    
    </div>
  }
}
export default MediaHolder;

