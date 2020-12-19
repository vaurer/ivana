import React, { Component } from "react";
import PictureAndText from "../PictureAndText/PictureAndText";

class PicAndTextHolder extends Component {

  getPicsAndTexts = () => {
    let widgets = [];
    this.props.picandtextArray.forEach((element) => {
      widgets.push(<PictureAndText key={element.id} element={element} />);
    });
    return widgets;
  };

  render() {
    return <div>{this.getPicsAndTexts()}</div>;
  }
}

export default PicAndTextHolder;
