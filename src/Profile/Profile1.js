import React from "react";
import ProfileBase from "./ProfileBase";
import "./profile.css";
import user_1 from "../images/user_1.svg";
import linkedIn from "../images/linkedIn.svg";
import notify from "../images/notify.svg";
import envelope from "../images/envelope.svg";
import Group01 from "../images/Group 30250.svg";
import portfolio from "../images/portfolio.svg";
import search from "../images/search.svg";
import setting from "../images/setting.svg";
import roundeUser from "../images/roundeUser.svg";

function Profile1() {
  return (
    <ProfileBase>
      <div className="general">
        <div className="leftside">
         <div className="avatarProfile"></div>
        <div className="profileName">Vishal M</div>
          <div className="professionName">React-dev</div>
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
              <div className="mainItem">
                <div className="fieldValue"></div>
                <div className="fieldIcon">
                  <img src={user_1} alt="" />
                </div>
              </div>
            </div>
            <div className="detailField">
              <div className="subHeader">Username(optional)</div>
              <div className="mainItem">
                <div className="fieldValue"></div>
                <div className="fieldIcon">
                  <img src={user_1} alt="" />
                </div>
              </div>
            </div>
            <div className="detailField">
              <div className="subHeader">Email</div>
              <div className="mainItem">
                <div className="fieldValue">modanwalvishal@gmail.com</div>
                <div className="fieldIcon">
                  <img src={envelope} alt="" />
                </div>
              </div>
            </div>
            
            <div className="detailFields">
              <div className="subHeader"></div>
              <div className="mainItem">
                <div className="fieldValue"></div>
                <div className="fieldIcon"></div>
              </div>
            </div>
            <div className="detailField">
              <div className="subHeader">Department</div>
              <div className="mainItem">
                <div className="fieldValue"></div>
                <div className="fieldIcon">
                  <img src={portfolio} alt="" />
                </div>
              </div>
            </div>
            <div className="detailField">
              <div className="subHeader">Designation</div>
              <div className="mainItem">
                <div className="fieldValue"></div>
                <div className="fieldIcon">
                  {" "}
                  <img src={portfolio} alt="" />
                </div>
              </div>
            </div>
            <div className="detailField">
              <div className="subHeader">LinkedIn Profile URL</div>
              <div className="mainItem">
                <div className="fieldValue"></div>
                <div className="fieldIcon">
                  <img src={linkedIn} alt="" />
                </div>
              </div>
            </div>
            <div className="detailField">
              <div className="subHeader">Github Profile URL</div>
              <div className="mainItem">
                <div className="fieldValue"></div>
                <div className="fieldIcon">G</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProfileBase>
  );
}

export default Profile1;
