import React from "react";
import { NavLink } from "react-router-dom";

const success = () => {

  return (
    <div style={{marginTop:'150px'}}>
        <h1>Geschickt!</h1>
        <NavLink key="1" className="navButton" to='/'>Zurück zur Hauptseite</NavLink>
    </div>
  );
};
export default success;