import React from 'react';

const About = () => {
  return (
    <section>
      <div className="main-container">
        <div className="about-wrapper">
          <div className="more-column">
            <h3>More about me</h3>
            <p className="about-p">
            I am a highly motivated Junior Web Developer with a background in Engineering.
            In previous roles, I developed a strong interest in programming and creating new solutions to complex issues.
            After honing my skills through additional training,
            I am looking forward to putting them to good use in the Tech Industry. 
            </p>
          </div>
          <div className="expertise-column">
            <h3 id="skills-h3">My Skills</h3>
            <div id="terminal">
              <div id="skills-wrapper">
                <div>
                  <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>HTML/CSS</li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>MongoDB</li>
                    <li>Express</li>
                  </ul>
                </div>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;