import React from "react";

import profilePic from "../images/profilePic.png";

const Header = () => {
  return (
    <header>
      <div className="main-container">
        <div className="background-image">
          <div className="greeting-wrapper">
            <h1>Hi, I am Balazs Danyi</h1>
          </div>
          <div className="intro-wrapper">
            <div className="left-column">
              <img id="profile-pic" src={profilePic} alt="Profile" />
            </div>
            <div className="right-column">
              <h2>What I do</h2>
              <p id="header-p">
                I am a Junior Web Developer focusing on JavaScript related
                technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
