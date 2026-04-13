require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

// Resend setup
const resend = new Resend(process.env.RESEND_API_KEY);

// ✅ CONTACT API
app.post("/contact", async (req, res) => {
  const { firstName, lastName, subject, email, message } = req.body;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.EMAIL_USER,
      subject: subject || "Contact Form",
      html: `
        <h3>New Message</h3>
        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    res.json({ success: true });

  } catch (err) {
    console.log("EMAIL ERROR:", err);
    res.json({ success: false, msg: err.message });
  }
});

// ✅ TEST ROUTE
app.get("/test", (req, res) => {
  res.send("Server is working 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
