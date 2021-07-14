import React from "react";
import "./profile.css";

import notify from "../images/notify.svg";
import search from "../images/search.svg";
import setting from "../images/setting.svg";
import dashboard from "../images/dashboard.svg";

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
              <input type="text" placeholder={`  search...`} />
            </div>
            <div className="notification">
              <img src={notify} alt="" />
            </div>
            <div className="profile-pic"></div>
          </div>
        </div>
      </div>
      <div className="sidebar">
        <div className="logoTD">TD</div>
        <div className="dashB">
          <img src={dashboard} alt="" />
        </div>
        <div className="setting">
          <img src={setting} alt="" />
        </div>
      </div>

      <div className="children">{children}</div>
    </div>
  );
}

export default ProfileBase;
