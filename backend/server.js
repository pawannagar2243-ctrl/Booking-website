require("dotenv").config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Transporter (Gmail App Password required)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Verify transporter (startup pe check karega)
transporter.verify((error, success) => {
  if (error) {
    console.log("❌ Email config error:", error);
  } else {
    console.log("✅ Email server is ready");
  }
});

// ✅ Contact API
app.post("/contact", async (req, res) => {
  const { firstName, lastName, subject, email, message } = req.body;

  console.log("📩 Incoming Data:", req.body); // debug

  // ✅ Validation
  if (!firstName || !email || !message) {
    return res.json({ success: false, msg: "Missing required fields" });
  }

  try {
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: subject || "New Contact Message",
      html: `
        <h3>New Contact Form Message</h3>
        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    console.log("✅ Email sent successfully");
    res.json({ success: true });

  } catch (err) {
    console.log("❌ EMAIL ERROR:", err);
    res.json({ success: false });
  }
});

// ✅ Server start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
