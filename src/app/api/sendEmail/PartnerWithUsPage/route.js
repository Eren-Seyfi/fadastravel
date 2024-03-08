// pages/api/sendEmail.js

import { NextResponse } from "next/server";
import transporterMail from "../mail";

export async function POST(req) {
  try {
    const data = await req.json();
    const {
      Name,
      NameOfCompany,
      PositionInCompany,
      Email,
      PhoneNumber,
      Message,
      Country,
    } = data;

    const mailOptions = {
      from: "fadastourism@gmail.com",
      to: "eren50seyfi@gmail.com",
      subject: "Partner With Us",
      html: `
        <p>Name: ${Name}</p>
        <p>Name Of Company: ${NameOfCompany}</p>
        <p>Position In Company: ${PositionInCompany}</p>
        <p>Email: ${Email}</p>
        <p>Phone Number:${Country} ${PhoneNumber}</p>
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
