import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="wrapper">
      <div className="login-box">
        <div className="login-header">
          <span>Login</span>
        </div>

        <form action="/login" method="post">
          <div className="input-box">
            <input
              type="email"
              name="email"
              id="user"
              className="input-field"
              autoComplete="off"
              required
            />
            <label htmlFor="user" className="label">
              E-mail
            </label>
          </div>
          <div className="input-box">
            <input
              name="password"
              type="password"
              id="pass"
              class="input-field"
              autocomplete="off"
            />
            <label htmlFor="pass" className="label">
              Password
            </label>
          </div>

          <div className="remember-forgot">
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <div class="forgot">
              <a href="#">Forgot password</a>
            </div>
          </div>

          <div className="input-box">
            <button className="input-submit">Login</button>
          </div>
          <div className="register">
            <span>
              Don't have an account? <Link to="/signup">Register</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
