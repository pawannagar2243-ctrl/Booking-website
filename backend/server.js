require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

// Resend setup
const resend = new Resend(process.env.RESEND_API_KEY);

// ✅ CONTACT API (FIXED)
app.post("/contact", async (req, res) => {
  const { firstName, lastName, subject, email, message } = req.body;

  try {
    // Resend SDK returns { data, error }, it does not throw on API errors usually
    const { data, error } =await resend.emails.send({
  from: process.env.EMAIL_USER, // 🔥 better practice
  to: process.env.EMAIL_USER,
  subject: subject || "New Message",
  html: `
    <h3>New Contact</h3>
    <p>Name: ${firstName} ${lastName}</p>
    <p>Email: ${email}</p>
    <p>Message: ${message}</p>
  `,
});

    // ✅ YEH CHECK BOHUT ZAROORI HAI
    if (error) {
      console.error("Resend API Error:", error);
      return res.status(400).json({ success: false, msg: error.message });
    }

    console.log("Email Sent Success:", data);
    res.json({ success: true });

  } catch (err) {
    // Network ya coding errors ke liye
    console.log("Server Crash Error:", err);
    res.status(500).json({ success: false, msg: err.message });
  }
});

app.get("/test", (req, res) => {
  res.send("Server is working 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
