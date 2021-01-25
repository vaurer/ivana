import React, { Component } from 'react';
class Legal extends Component {
   state={}
     render() {
        return (
            <div >
                 {this.props.getLegals} 
          </div>
        );
    } 
}
export default Legal;