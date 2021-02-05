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

      notification: "",
    };
  }
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  createFormDataObj = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k) => {
      formData.append(k, data[k]);
    });
    return formData;
  };

  onSubmit = (event) => {
    event.preventDefault();

    const data = {
      "form-name": "contact",
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      message: this.state.message,
      userEmail: this.state.userEmail,
      userTelefonNummber: this.state.userTelefonNummber
    };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(this.createFormDataObj(data)).toString(),
    })
      .then(() => {
        this.setState({
          notification: "Daten wurden abgeschickt",
        });
        // TODO Felder leeren
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          notification: "Fehlerlein..." + error,
        });
      });
  };
  showlala = () => {
    alert("lala");
  };
  render() {
    return (
      <div>
        <div className={styles.box}>
          <div className={styles.boxForm}>
            <form name="contact" method="post" onSubmit={this.onSubmit}>
              <h1>Nofitification:{this.state.notification}</h1>{" "}
              <input type="hidden" name="form-name" value="contact" />
              <div className={styles.row}>
                <div
                  className={styles.closeIframe}
                  onClick={(event) => (window.location.href = "/")}
                >
                  <i className="fas fa-times"></i>
                </div>
              </div>
              <div className={styles.row}>
                <h1>Wir sind für dich da</h1>
              </div>
              <br></br>
              <div className={styles.row}>
                <input
                  name="firstName"
                  value={this.state.firstName}
                  onChange={(e) => this.changeHandler(e)}
                ></input>
              </div>
              <div className={styles.row}>
                <label>Vorname </label>
              </div>
              <div className={styles.row}>
                <input
                  name="lastName"
                  value={this.state.lastName}
                  onChange={(e) => this.changeHandler(e)}
                ></input>
              </div>
              <div className={styles.row}>
                <label>Nachname </label>
              </div>
              <div className={styles.row}>
                <input
                  name="userEmail"
                  value={this.state.userEmail}
                  onChange={(e) => this.changeHandler(e)}
                ></input>
              </div>
              <div className={styles.row}>
                <label>E-mail </label>
              </div>
              <div className={styles.row}>
                <textarea
                  name="message"
                  value={this.state.message}
                  onChange={(e) => this.changeHandler(e)}
                ></textarea>
              </div>
              <div className={styles.row}>
                <label>Nachricht </label>
              </div>
              <div className={styles.row}>
                <input
                  name="userTelefonNummber"
                  value={this.state.userTelefonNummber}
                  onChange={(e) => this.changeHandler(e)}
                ></input>
              </div>
              <div className={styles.row}>
                <label>Telefonnummer </label>
              </div>
              <br></br>
              <div className={styles.row}>
                <input type="submit" value="Absenden"></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Form;
