import { NextResponse } from "next/server";
import transporterMail from "../mail";
import nodemailer from "nodemailer";
export async function POST(req) {
  try {
    const data = await req.json();
    const {
      TurName,
      FirstName,
      LastName,
      Email,
      PhoneNumber,
      Country,
      NumberOfAdults,
      NumberOfInfant,
      NumberOfRooms,
    } = data;

    const transporterMailMinikAyaklar = nodemailer.createTransport({
      host: "smtp.gmail.com",
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: "fadastourism@gmail.com",
        pass: "lqec lnss qctk tqza",
      },
    });

    const mailOptions = {
      from: "fadastourism@gmail.com",
      to: "info@fadastravel.com",
      subject: TurName,
      html: `
        <p>Tur Name: ${TurName}</p>
        <p>First Name: ${FirstName}</p>
        <p>Last Name ${LastName}</p>
        <p>Çocuk sayısı: ${NumberOfAdults}</p>
        <p>Yetişkin sayısı: ${NumberOfInfant}</p>
        <p>Phone Number:${Country} ${PhoneNumber}</p>
        <p>Odasayısı: ${NumberOfRooms}</p>
        <p>Email: ${Email}</p>
      `,
    };
    await transporterMailMinikAyaklar.sendMail(mailOptions);
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
