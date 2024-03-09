import { NextResponse } from "next/server";
import transporterMail from "../mail";

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

    const mailOptionsMinikAyaklar = {
      from: "fadastourism@gmail.com",
      to: "seckinbutun@gmail.com",
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

    await transporterMail.sendMail(mailOptionsMinikAyaklar);
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
