import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Success.module.css";

const success = () => {
  return (
    <div className={styles.container}>
      <NavLink  key="1" className={styles.navButton} to="/">
        <div className={styles.successElement}>
          <h1>Geschickt!</h1>
          Zurück zur Hauptseite
        </div>
      </NavLink>
    </div>
  );
};
export default success;
