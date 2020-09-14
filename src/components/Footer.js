import React, { useState } from 'react';
// import emailjs from 'emailjs-com';
import axios from 'axios';

const Footer = () => {

  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // const [disabled, setDisabled] = useState(false);
  const [emailSent, setEmailSent] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      subject,
      email,
      message
    }

    axios.post('/api/email', data)
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })

    e.target.reset();
  }

  return (
    <footer>
      <div className="main-container">
        <div className="footer-wrapper">
          <div className="form-area">
            <h3 id="form-title">Get in touch</h3>
            <form id="contact-form" onSubmit={onSubmit}>
              <input 
                className="input-field" 
                type="text" 
                placeholder="Name" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input 
                className="input-field" 
                type="text" 
                placeholder="Subject" 
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <input 
                className="input-field" 
                type="email" 
                placeholder="Email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea 
                className="input-field" 
                placeholder="Message" 
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button id="submit-btn" type="submit">Send</button>
            </form>
          </div> 
          <div className="message-area">
             {/* <p>Email Sent</p> */}
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer;