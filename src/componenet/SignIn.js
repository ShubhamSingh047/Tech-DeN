import React from "react";
import "./SignIn.css";
import ReactLogo from "./logo/google-icon.svg";

function SignIn() {
  return (
    <div>
      <div className="img">
        <img
          src="https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt="signIn img"
        />
      </div>
      <div className="form_signIn">
        <form action="submit">
          <h2>Welcome to TechHouse Sign In to get started</h2>
          <p className="signIn_txt">Enter your details to procced further</p>

          <label htmlFor="">Email </label>

          <input
            type="email"
            id="fname"
            s
            name="email"
            placeholder="Enter email"
          />
          <hr />
          <label htmlFor="">Password</label>
          <input type="password" placeholder="********" />
          <hr />
          <input type="checkbox" id="checkbox" />

          <label htmlFor="checkbox" className="remember_me">
            Remember Me
          </label>

          <a href="#" className="forget_psd">
            Forget password?
          </a>
          <button className="signIn_btn">Sign In</button>
          <button className="signIn_btn_ggl">
            <img src={ReactLogo} alt="google logo" />
            <p>Sign Up with Google</p>
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
