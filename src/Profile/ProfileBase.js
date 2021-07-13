import React from "react";
import "./profile.css";

import notify from "../images/notify.svg";
import search from "../images/search.svg";

function ProfileBase({ children }) {
  return (
    <div>
      <div className="topbar">
        <div className="settop">
          {" "}
          <div className="p">
            <p>Profile</p>
          </div>
          <div className="topleftbar">
            <div className="searchbar">
              <input type="text" placeholder="Search..." />
            </div>
            <div className="notification">
              N{/* <img width="30px" height="30px" src="" alt="" /> */}
            </div>
            <div className="profile-pic">{/* <img src="" alt="" /> */}P</div>
          </div>
        </div>
      </div>
      <div className="sidebar"></div>
    </div>
  );
}

export default ProfileBase;
