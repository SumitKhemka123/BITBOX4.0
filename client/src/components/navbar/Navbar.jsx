import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="containers">
      <div className="navbar">
        <img src={logo} alt="" className="logo" />
        <ul className="ul-navbar">
          <li className="li-navbar">Home</li>
          <li className="li-navbar">Donate</li>
          <li className="li-navbar">Contact Us</li>
          <li className="li-navbar">About</li>
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
