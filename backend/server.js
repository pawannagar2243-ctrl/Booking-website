require("dotenv").config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors({
  origin: "*",
}));
app.use(express.json());

// 🔥 Email transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  family: 4, // 🔥 IMPORTANT: force IPv4
});

transporter.verify(function (error, success) {
  if (error) {
    console.log("SMTP ERROR:", error);
  } else {
    console.log("SMTP READY ✅");
  }
});

// 🔥 API route
app.post("/contact", async (req, res) => {
  const { firstName, lastName, subject, email, message } = req.body;

  try {
 await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_USER,
  subject: subject || "New Contact Message",
  replyTo: email,
  html: `
    <h3>New Contact Form Message</h3>
    <p><b>Name:</b> ${firstName} ${lastName}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Message:</b> ${message}</p>
  `,
});

    res.json({ success: true });
  }catch (err) {
  console.log("🔥 FULL EMAIL ERROR:");
  console.log(err);
  console.log(err?.response?.data || err.message);

  res.json({ 
    success: false, 
    msg: err.message 
  });
}
});
app.get("/test", async (req, res) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Test Mail",
      text: "Working bro 🔥",
    });

    res.send("Mail Sent ✅");
  } catch (err) {
    console.log(err);
    res.send("Error ❌");
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
