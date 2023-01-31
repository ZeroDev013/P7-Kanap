import React from "react";
import { NavLink } from "react-router-dom";

import '../styles/error.css';

const Error = () => {
  return (
    <main className="main">
      <div className="error">
        <h4 className="errorNumber">
          404
          </h4>
        <h5 className="errorText">
          Oups! La page que vous demandez n'existe pas.
        </h5>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <ul className="errorBackLink">Retourner sur la page d'accueil</ul>
        </NavLink>
      </div>
    </main>
  );
};

export default Error;

