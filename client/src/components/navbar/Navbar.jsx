import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="containers-n">
      <div className="navbar">
        <img src={logo} alt="" className="logo" />
        <ul className="ul-navbar">
          <Link to="/">
            <li className="li-navbar">Home</li>
          </Link>
          <Link to="/donate">
            <li className="li-navbar">Donate</li>
          </Link>
          <Link to="/">
            <li className="li-navbar">Contact Us</li>
          </Link>
          <Link to="/about">
            <li className="li-navbar">About</li>
          </Link>
        </ul>
        <div className="button-nav">
          <Link to="./login">
            <button className="bn632-hover bn26">Login</button>
          </Link>
          <Link to="./signup">
            <button className="bn632-hover bn26">SignUp</button>
          </Link>
        </div>
      </div>
      <div className="button-nav"></div>
    </div>
  );
}

export default Navbar;
