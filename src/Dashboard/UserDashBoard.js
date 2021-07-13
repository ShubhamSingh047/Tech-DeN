import React from "react";
import { Link, Redirect } from "react-router-dom";
import { signout } from "../auth";
import Base from "../componenet/core/Base";
const UserDashboard = () => {
  return (
    <>
      <div className="test">
        <h1>This is UserDashBoard board page</h1>
        <Link to="/">
          <button
            onClick={() => {
              signout(() => {
                console.log("signout from dashbaord");
              });
            }}
          >
            Signout
          </button>
        </Link>
        <Link to="/profile">
          <button>Go to Profile</button>
        </Link>
      </div>
    </>
  );
};
export default UserDashboard;
