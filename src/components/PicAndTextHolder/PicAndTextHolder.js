import React, { Component } from 'react';
import PictureAndText from '../PictureAndText/PictureAndText';

class PicAndTextHolder extends Component {
    constructor(props) {
        super(props);
        this.state = {
          picandtextArray: this.props.picandtextArray,
        };
      }

      getPicsAndTexts=()=>{
          let widgets=[]
          this.state.picandtextArray.forEach(element => {
              widgets.push(<PictureAndText element={element}/>);
              console.log(element)
          });
          return widgets;
      }

    render() { 
        return (
            <div>
          {this.getPicsAndTexts()} 
          </div>
         );
    }
}
 
export default PicAndTextHolder;