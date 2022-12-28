import React from "react";
import { Link } from "react-router-dom";
import "../Login/Login.css";
import Logo from "../../assets/logo.svg";

const Login = () => {
  return (
    <>
      <section className="login-container">
        <h1 className="large-fs light-fw">Login</h1>
        <img className="logo-img" src={Logo} alt="logo" />
        <form className="form-container">
          <input
            className="login-input"
            type="text"
            placeholder="Email address"
          />
          <input className="login-input" type="text" placeholder="Password" />
          <button className="cta-btn">Login to your account</button>
          <p className="cta-heading xs-fs light-fw">
            Don't have an account?
            <Link to="/signup">
              <span>Sign up</span>
            </Link>
          </p>
        </form>
      </section>
    </>
  );
};

export default Login;
