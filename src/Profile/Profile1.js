import React from "react";
import ProfileBase from "./ProfileBase";
import "./profile.css";
function Profile1() {
  return (
    <ProfileBase>
      <div className="general">
        <div className="leftside">
          <div className="avatarProfile"></div>
          <div className="profileName">Arijit Singh</div>
          <div className="professionName">Playback singer</div>
          <div className="generalInfo-panel">
            <div className="iconss"> </div>
            <div className="text-info-panel">
              <div className="panel-name-general">General Information</div>
              <div className="panel-subname">Profile</div>
            </div>
          </div>
          <div className="security-panel">
            <div className="iconss"> </div>
            <div className="text-info-panel">
              <div className="panel-name-security">Security</div>
              <div className="panel-subname">Password</div>
            </div>
          </div>
        </div>

        <div className="rightside">
          {/* bro krte hai yr */}
          <div className="topname">General Information</div>
          <div className="detailBox">
            <div className="detailField">
              <div className="subHeader">Name</div>
              <div className="fieldValue"></div>
              <div className="fieldIcon"></div>
            </div>
            <div className="detailField">
              <div className="subHeader">Username(optional)</div>
              <div className="fieldValue"></div>
              <div className="fieldIcon"></div>
            </div>
            <div className="detailField">
              <div className="subHeader">Email</div>
              <div className="fieldValue">modanwalvishal@gmail.com</div>
              <div className="fieldIcon"></div>
            </div>
            <div className="detailField">
              <div className="subHeader">Empty</div>
              <div className="fieldValue"></div>
              <div className="fieldIcon"></div>
            </div>
            <div className="detailField">
              <div className="subHeader">Department</div>
              <div className="fieldValue"></div>
              <div className="fieldIcon"></div>
            </div>
            <div className="detailField">
              <div className="subHeader">Designation</div>
              <div className="fieldValue"></div>
              <div className="fieldIcon"></div>
            </div>
            <div className="detailField">
              <div className="subHeader">LinkedIn Profile URL</div>
              <div className="fieldValue"></div>
              <div className="fieldIcon"></div>
            </div>
            <div className="detailField">
              <div className="subHeader">Github Profile URL</div>
              <div className="fieldValue"></div>
              <div className="fieldIcon"></div>
            </div>
          </div>
        </div>
      </div>
    </ProfileBase>
  );
}

export default Profile1;
