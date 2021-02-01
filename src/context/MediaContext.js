import React, {Component, createContext} from 'react';

export const MediaContext = createContext();

class MediaContextProvider extends Component{
    state={
       galeryName:'',

    }

     setGaleryName=(e)=>{
     this.setState({ galeryName : e})
     let i
     for(i=0; i<1000;i++){
        console.log('CONTEXT: '+e)
     }
    }

    render(){
    return(
        <MediaContext.Provider value={{...this.state, setGaleryName : this.setGaleryName}}>
            {this.props.children}
        </MediaContext.Provider>
    );
    }
}
export default MediaContextProvider;