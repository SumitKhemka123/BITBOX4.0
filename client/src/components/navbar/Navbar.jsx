import React from "react";
import "./Navbar.css";
import logo from "../../../src/assets/logolb.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container">
      <div className="navbar">
        <img src="logo" alt="" className="logo" />
        <ul>
          <li>Home</li>
          <li>Product</li>
          <li>Features</li>
          <li>About</li>
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
