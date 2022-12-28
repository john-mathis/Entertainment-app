import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";

const SignUp = () => {
  return (
    <>
      <section className="login-container">
        <h1 className="large-fs light-fw">Sign Up</h1>
        <img className="logo-img" alt="logo" src={Logo} />
        <form className="form-container">
          <input type="text" placeholder="Email address" />
          <input type="text" placeholder="Password" />
          <input type="text" placeholder="Repeat Password" />
          <button className="cta-btn">Create account</button>
          <p className="cta-heading xs-fs light-fw">
            Already have an account?
            <Link to="/login">
              <span>Login</span>
            </Link>
          </p>
        </form>
      </section>
    </>
  );
};

export default SignUp;
