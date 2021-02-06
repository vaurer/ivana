import React, {Component, createContext} from 'react';

export const FunctionContext = createContext();

class FunctionContextProvider extends Component{
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
        <FunctionContext.Provider value={{...this.state, setGaleryName : this.setGaleryName}}>
            {this.props.children}
        </FunctionContext.Provider>
    );
    }
}
export default FunctionContextProvider;