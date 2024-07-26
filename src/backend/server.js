const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());

// Define the transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "nabiljohny.0429@gmail.com", // Your Gmail address
    pass: "nabil0429", // Your Gmail password or App Password
  },
});

app.post("/api/submitForm", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ message: "Please fill all the required fields." });
  }

  const mailOptions = {
    from: email, // Use the email from the form
    to: "destinationemail@example.com", // Destination email address
    subject: `New Submission from ${name}`,
    text: `You have received a new submission from ${name} (${email}): ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res
        .status(200)
        .json({ message: `Thanks ${name}, I will shortly connect with you!` });
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
