const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/submitForm", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ message: "Please fill all the required fields." });
  }

  // Adjusting mailOptions to include the sender's email dynamically
  const mailOptions = {
    from: email, // Use the email from the form
    to: "destinationemail@example.com", // Destination email address
    subject: `New Submission from ${name}`,
    text: `You have received a new submission from ${name} (${email}): ${message}`,
    //`You have received a new submission from ${name} (${email}): ${message}\nReply to: ${email}`
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

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
