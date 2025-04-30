import express from "express";
import { Resend } from "resend";
import MyEmail from "./emails/MyEmail";
import AutoReplyEmail from "./emails/AutoReplyEmail";
import cors from "cors";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(express.json());
app.use(cors());

// Email sending endpoint
app.post("/api/send-email", async (req, res) => {
  try {
    const { name, email, subject, message, phone } = req.body;

    // Send main email to you
    const mainEmail = await resend.emails.send({
      from: "Portfolio Contact <info@gabara.se>",
      to: ["bazo.assyr@gmail.com"], // Replace with your email
      subject: `New Contact Form Message: ${subject}`,
      replyTo: email,
      react: MyEmail({
        name,
        email,
        subject,
        message,
        phone,
      }),
    });

    // Send auto-reply to the sender
    const autoReply = await resend.emails.send({
      from: "Keorkes Azdo <info@gabara.se>",
      to: [email],
      subject: "Thank you for your message!",
      react: AutoReplyEmail({
        name,
      }),
    });

    res.status(200).json({ success: true, mainEmail, autoReply });
  } catch (error) {
    console.error("Failed to send email:", error);
    res.status(500).json({
      success: false,
      error: "Failed to send email",
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
