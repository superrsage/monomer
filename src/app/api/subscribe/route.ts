import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
  }

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log(`[subscribe] New signup: ${email}`);
    return NextResponse.json({ ok: true });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER,
    subject: `New signup: ${email}`,
    text: `New email signup from the Monomer landing page:\n\n${email}`,
  });

  return NextResponse.json({ ok: true });
}
