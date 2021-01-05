import React, { Component } from 'react';
import styles from './Form.module.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            firstName: '',
            lastName: '',
            userEmail: '',
            message: '',
            userTelefonNummber: ''
         }
    }
    changeHandler = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e) =>{
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            firstName: '',
            lastName: '',
            userEmail: '',
            message: '',
            userTelefonNummber: ''
        })
    }
    render() { 
        return ( 
            <div className={styles.box}>
                <h1>Wir sind für dich da</h1>
            <form>
              <input name="firstName" value={this.state.firstName} onChange={e => this.changeHandler(e)}></input>
              <label>Vorname: </label>
              <br/>
              <input name="lastName" value={this.state.lastName} onChange={e => this.changeHandler(e)}></input>
              <label>Nachname: </label>
              <br/>
              <input name="userEmail" value={this.state.userEmail} onChange={e => this.changeHandler(e)}></input>
              <label>E-mail: </label>
              <br/>
              <textarea name="message" value={this.state.message} onChange={e => this.changeHandler(e)}></textarea>
              <label>Nachricht: </label>
              <br/>
              <input name="userTelefonNummber" value={this.state.userTelefonNummber} onChange={e => this.changeHandler(e)}></input>
              <label>Telefonnummer: </label>
              <br/>
              <button onClick={e => this.onSubmit(e)}>Absenden</button>  
            </form>
            </div>
         );
    }
}
export default Form;