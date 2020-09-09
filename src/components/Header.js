import React from 'react';

import profilePic from '../images/profilePic.png';

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
              <h2 >What I do</h2>
              <p>
                I am a career entrant Web Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;


