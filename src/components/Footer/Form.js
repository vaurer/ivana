import React, { Component } from "react";
import styles from "./Form.module.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      userEmail: "",
      message: "",
      userTelefonNummber: "",
    };
  }
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onSubmit = (e) => {
    this.props.onSubmit(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      userEmail: "",
      message: "",
      userTelefonNummber: "",
    });
  };
  render() {
    return (
      <div>
        <div className={styles.close}>
        <i className="fas fa-times"></i>
        </div>
      <div className={styles.box}>
        <h1>Wir sind für dich da</h1>     
        <div className={styles.boxForm}>
        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <input
            name="firstName"
            value={this.state.firstName}
            onChange={(e) => this.changeHandler(e)}
          ></input>
          <label>Vorname </label>
          <br />
          <input
            name="lastName"
            value={this.state.lastName}
            onChange={(e) => this.changeHandler(e)}
          ></input>
          <label>Nachname </label>
          <br />
          <input
            name="userEmail"
            value={this.state.userEmail}
            onChange={(e) => this.changeHandler(e)}
          ></input>
          <label>E-mail </label>
          <br />
          <textarea
            name="message"
            value={this.state.message}
            onChange={(e) => this.changeHandler(e)}
          ></textarea>
          <label>Nachricht </label>
          <br />
          <input
            name="userTelefonNummber"
            value={this.state.userTelefonNummber}
            onChange={(e) => this.changeHandler(e)}
          ></input>
          <label>Telefonnummer </label>
          <br />
          <br />
          <br />
          <input type="submit" value="Absenden"></input>
         
        </form>
        </div>
      </div>
      </div>
    );
  }
}
export default Form;
