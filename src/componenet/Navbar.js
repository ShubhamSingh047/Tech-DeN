import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="main_nav">
      <div className="logo">
        <a href="#">logo</a>
      </div>
      <ul className="list">
        <li>
          <button>Sign In</button>
        </li>
        <li>
          <button className="signUp">Sign Up</button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
