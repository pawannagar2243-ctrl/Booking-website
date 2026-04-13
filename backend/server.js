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
    from: "Contact Form <onboarding@resend.dev>",
    to: "pawannagar2243@gmail.com",
    subject: subject || "New Message",
    html: `
      <h3>New Contact</h3>
      <p>Name: ${firstName} ${lastName}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
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
