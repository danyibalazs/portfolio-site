import React from 'react';

const About = () => {
  return (
    <section>
      <div className="main-container">
        <div className="about-wrapper">
          <div className="more-column">
            <h3>More about me</h3>
            <p className="about-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed felis pulvinar, pharetra ipsum vitae, dapibus nunc. Praesent vel interdum risus. Quisque non magna vitae arcu laoreet mattis in tincidunt diam. Mauris ut ante justo. Mauris vulputate nulla consequat interdum varius.
            </p>
          </div>
          <div className="expertise-column">
            <h3>My Skills</h3>
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