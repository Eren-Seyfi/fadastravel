// pages/api/sendEmail.js

import { NextResponse } from "next/server";
import transporterMail from "../mail";

export async function POST(req) {
  try {
    const data = await req.json();
    const { Name, Email, Message } = data;

    const mailOptions = {
      from: "fadastourism@gmail.com",
      to: "eren50seyfi@gmail.com",
      subject: "CONTACT",
      html: `
        <p>Name: ${Name}</p>
        <p>Email: ${Email}</p>
        <p>Message: ${Message}</p>
      `,
    };

    await transporterMail.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Başarıyla mesajınız alındı", status: "success" },
      { status: 200 }
    );
  } catch (error) {
    console.error("post isteği başarısız:", error);

    return NextResponse.json(
      { message: "post isteği başarısız:" },
      { status: 500 },
      {
        error: error,
      }
    );
  }
}
