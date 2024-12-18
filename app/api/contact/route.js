// app/api/contact/route.js
import { NextResponse } from 'next/server';

// Import Nodemailer only on the server
if (typeof window === 'undefined') {
  const nodemailer = require('nodemailer');
  // Nodemailer logic here
}

export async function POST(request) {
  const body = await request.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: body.email,
    subject: body.subject,
    text: body.message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
