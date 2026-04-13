require("dotenv").config();
const { Resend } = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);
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
  family: 4,        // 🔥 force IPv4
  connectionTimeout: 10000,
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
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.EMAIL_USER,
      subject: subject || "Contact Form",
      html: `
        <h3>New Message</h3>
        <p>${firstName} ${lastName}</p>
        <p>${email}</p>
        <p>${message}</p>
      `,
    });

    res.json({ success: true });

  } catch (err) {
    console.log(err);
    res.json({ success: false, msg: err.message });
  }
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
