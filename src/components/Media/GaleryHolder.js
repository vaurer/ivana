// import React, { Component } from 'react';
// import { SRLWrapper } from "simple-react-lightbox";
// import { MediaContext } from '../../context/MediaContext';
// import Constants from '../../helper/Constants'
// import styles from './GaleryHolder.module.css';
// import { If, Else } from 'rc-if-else';
// import * as ReactBootStrap from 'react-bootstrap';

// class GaleryHolder extends Component {
//   static contextType = MediaContext;
//   state = {
//     galleryNumber:'',
//     elements: [],
//     items: [],
//     isLoaded: false
//   };

//   componentDidMount(e) {
//     event.preventDefault();
//     let tempdata = [];
//     this.setState({galleryNumber: this.context.galeryName});
//     console.log(this.context.galeryName)
//     fetch(Constants.photos)
//       .then((res) => res.json())
//       .then(
//         (result) => {
//           this.setState({
//             isLoaded: true,
//             items: result.data[this.state.galleryNumber].fotos,
//           });
//           this.state.items.forEach((element) => {
//             let line = {
//               src: element.directus_files_id.data.full_url,
//               thumbnail: element.directus_files_id.data.full_url,
//               caption: element.directus_files_id.title,
//               width: 1024,
//               height: "auto",
//             };
//             tempdata.push(line);
//           });
//           this.setState({
          
//             isLoaded: true,
//             elements: tempdata,
//           });
//         },
        
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error,
//           });
//         }
//       );
//   }
//   getItems = () => {
//     let widgets = [];
//     this.state.elements.forEach((element) => {
//       widgets.push(
//         <img className={styles.galleryImg} alt={element.caption}
//         src={element.thumbnail}
//         imgixParams={{
//           fit: "crop",
//           fm: "jpg"
//         }}
//         // width={500}
//         // height={500}
//         />
//       );
//     });
//     return widgets;
//   };

//   render() {
//     return (
//       <If condition={!this.state.isLoaded} >
//       {<ReactBootStrap.Spinner animation='grow' style={{ position: 'fixed', top: '50%', left: '50%'}}/>}
//     <Else >
//       <div className={styles.container}>
//       <SRLWrapper items={this.state.elements}>{this.getItems()}</SRLWrapper>
//       </div>
//       </Else>
//         </If>
//     );
//   }
// }
// export default GaleryHolder;      
