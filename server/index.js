const express = require("express");
const cors = require("cors");
const path = require("path");
const axios = require("axios");

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static("build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});


app.post("/api/email", async (req, res) => {
  const { name, subject, email, message } = req.body;

  if (!name || !subject || !email || !message) {
    return res.json("empty");
  }

  const data = {
    service_id: process.env.SERVICE_ID,
    template_id: process.env.TEMPLATE_ID,
    user_id: process.env.USER_ID,
    template_params: {
      name: name,
      subject: subject,
      email: email,
      message: message,
    },
  };

  let response = null;

  await axios
    .post("https://api.emailjs.com/api/v1.0/email/send", data)
    .then((res) => {
      response = res.data;
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

  if (response === "OK") {
    res.status(200).json("success");
  } else {
    res.status(400).json("failure");
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));
