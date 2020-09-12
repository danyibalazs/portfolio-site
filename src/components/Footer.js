import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="main-container">
        <div className="footer-wrapper">
          <div className="form-area">
          <h3 id="form-title">Get in touch</h3>
          <form id="contact-form">
            <input className="input-field" type="text" placeholder="Name"/>
            <input className="input-field" type="text" placeholder="Subject"/>
            <input className="input-field" type="text" placeholder="Email"/>
            <textarea className="input-field" placeholder="Message" />
            <button id="submit-btn" type="submit">Send</button>
          </form>
          </div>
          
        </div>
      </div>

    </footer>
  )
}

export default Footer;