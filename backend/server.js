require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Resend } = require("resend");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/contact", async (req, res) => {
  const { firstName, lastName, subject, email, message } = req.body;

  try {
    const { data, error } = await resend.emails.send({
      from: "Booking Website <onboarding@resend.dev>",
      // ⬇️ YAHAN APNA RESEND LOGIN EMAIL DAALO (TESTING KE LIYE ZAROORI)
      to: "apna_login_email@gmail.com", 
      subject: subject || "New Message",
      html: `
        <h3>New Contact</h3>
        <p>Name: ${firstName} ${lastName}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `,
    });

    if (error) {
      // Agar Resend API se error aaye
      console.error("Resend Error Details:", error);
      return res.status(400).json({ 
        success: false, 
        msg: error.message || "Resend API Error" 
      });
    }

    console.log("Email Sent Success:", data);
    res.json({ success: true, msg: "Email sent successfully" });

  } catch (err) {
    // Agar code me koi aur error aaye
    console.error("Server Catch Error:", err);
    res.status(500).json({ 
      success: false, 
      msg: err.message || "Internal Server Error" 
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
