import React, { useState } from "react";
import axios from "axios";

const Footer = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [emailSent, setEmailSent] = useState(null);

  const resetForm = () => {
    setName("");
    setSubject("");
    setEmail("");
    setMessage("");
  };

  const resetButton = () => {
    setTimeout(() => {
      setEmailSent("");
    }, 3000);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setEmailSent("sending");

    const data = {
      name,
      subject,
      email,
      message,
    };

    axios
      .post("/api/email", data)
      .then((res) => {
        console.log(res.data);

        if (res.data === "success") {
          setEmailSent("success");
          resetForm();
          resetButton();
        } else {
          setEmailSent("failure");
          resetButton();
        }
      })
      .catch((err) => {
        setEmailSent("failure");
        console.log(err.message);
      });
  };

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
              {!emailSent && (
                <button id="submit-btn" type="submit">
                  Send
                </button>
              )}
              <div>
                {emailSent === "sending" && (
                  <p className="email-message">Sending...</p>
                )}
                {emailSent === "success" && (
                  <p className="email-message" style={{ color: "#5cb85c" }}>
                    Email sent successfully!
                  </p>
                )}
                {emailSent === "failure" && (
                  <p className="email-message" style={{ color: "#d9534f" }}>
                    Something went wrong!
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
