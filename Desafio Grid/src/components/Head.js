import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="nav-bar">
        <div className="logo">
        <Link to="/">
          <img src="https://cdn-icons-png.freepik.com/512/4275/4275343.png?ga=GA1.1.766279810.1737064943" /> 
        </Link>
        <Link to="/">
          <p> Desafio Grid </p>
        </Link>
        </div>
        <div className="nav">
          <Link to="/List" className="nav-option">
            Lista
          </Link>
          <Link className="fake-button" to="/Form">
            Cadastro
          </Link>
        </div>
      </div>
      <div className="body"></div>
    </>
  );
};

export default Nav;
