import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, Redirect } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";

const Navbar = () => {
  return (
    <div className="main_nav">
      <div className="logo">
        <a href="#">logo</a>
      </div>
      <ul className="list">
        {!isAuthenticated() && (
          <>
            <NavLink className="NavLink" to="/">
              <li>
                <button>Sign In</button>
              </li>
            </NavLink>
            <NavLink className="NavLink" to="/signup">
              <li>
                <button className="signUp">Sign Up</button>
              </li>
            </NavLink>
          </>
        )}

        {isAuthenticated() && (
          <NavLink className="NavLink" to="/">
            <li>
              <button
                className="signUp"
                onClick={() => {
                  signout(() => {
                    console.log("user sign out");
                  });
                }}
              >
                Sign Out
              </button>
            </li>
          </NavLink>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
