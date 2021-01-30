import React, { Component } from 'react';
import { MediaContext } from '../../context/MediaContext';
import Constants from '../../helper/Constants'
// import TitlebarGridList from './GridList';
import styles from './MediaHolder.module.css';


// import React, {useContext} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
// import InfoIcon from '@material-ui/icons/Info';

class MediaHolder extends Component {
  
  static contextType = MediaContext;

  state = { 
    elements:[],
    items:[],
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


    return  (
      <div className={styles.container}>
      <div className={styles.holderRoot}>
      <GridList cellHeight={300}  spacing={10} className={styles.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div"></ListSubheader>
        </GridListTile>
        {this.state.elements.map((tile) => (
          <GridListTile key={tile.key}>
            <img src={tile.src} alt={tile.key} onClick={this.setGalleryInContext.bind(this)} key={tile.key}/>
            <GridListTileBar
              title={tile.alt}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={styles.icon}>
                  {/* <InfoIcon /> */}
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
    </div>
    )
  }
}
export default MediaHolder;

// return  <div className={styles.container}>
// {this.getFirstLevelItems()}
// </div>
