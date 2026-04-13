require("dotenv").config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());

// 🔥 Email transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,          // ✅ 465 ki jagah 587
  secure: false,      // ✅ false rakho (important)
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// 🔥 API route
app.post("/contact", async (req, res) => {
  const { firstName, lastName, subject, email, message } = req.body;

  try {
   await transporter.sendMail({
  from: process.env.EMAIL_USER, // 🔥 better practice
  to: process.env.EMAIL_USER,
  subject: subject,
  html: `
    <h3>New Contact Form Message</h3>
    <p><b>Name:</b> ${firstName} ${lastName}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Message:</b> ${message}</p>
  `,
});

    res.json({ success: true });
  }catch (err) {
  console.log("Mail Error:", err);
  res.json({ success: false, msg: "Email not sent" });
}
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
