"use client";
import { GoStarFill } from "react-icons/go";
import TourInput from "../PrivateTours/Input/Input";
import PhoneNumber from "../PartnerWithUsPage/PhoneNumber";
import DataInput from "../PrivateTours/Input/DateInput";
import NumberInput from "../PrivateTours/Input/NumberInput";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import axios from "axios";
const ToursForm = () => {
  const [useFirstName, setFirstName] = useState("");
  const [useLastName, setLastName] = useState("");
  const [useNumberOfAdults, setNumberOfAdults] = useState("");
  const [useNumberOfInfant, setNumberOfInfant] = useState("");
  const [useEmail, setEmail] = useState("");
  const [usePhoneNumber, setPhoneNumber] = useState("");
  const [useCountry, setCountry] = useState("");

  const [useNumberOfKids, setNumberOfKids] = useState("");
  const [useNumberOfRooms, setNumberOfRooms] = useState("");

  const handleSubmit = async (event) => {
    const url = "http://fnb.mn/x/MM3TQNqBU";

    // Yeni pencereyi aç
    window.open(url, "_blank");
    event.preventDefault();
    await axios
      .post("/api/sendEmail/MinikAyaklar", {
        TurName: "Minik Ayaklar",
        FirstName: useFirstName,
        LastName: useLastName,
        Email: useEmail,
        PhoneNumber: usePhoneNumber,
        Country: useCountry,
        NumberOfAdults: useNumberOfAdults,
        NumberOfInfant: useNumberOfInfant,
        NumberOfKids: useNumberOfKids,
        NumberOfRooms: useNumberOfRooms,
      })
      .then(function (response) {
        console.log(response);
        setFirstName("");
        setLastName("");
        setNumberOfAdults("");
        setNumberOfInfant("");
        setEmail("");
        setPhoneNumber("");
        setCountry("");

        setNumberOfKids("");
        setNumberOfRooms("");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col items-center w-full ml-0 md:ml-10">
      <div className="flex flex-col justify-center items-center h-full w-full gap-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center md:items-start h-full w-full gap-10 px-4 md:px-0"
        >
          <h1 className="flex items-center justify-center bg-[#4792BE] w-full rounded-t-3xl h-20 text-white text-xl font-bold">
            Minik Ayaklar
          </h1>

          <div className="flex flex-col items-center justify-center h-full w-full gap-4 ">
            <TourInput
              props={{
                label: "İsim",
                value: useFirstName,
                setValue: setFirstName,
              }}
            />
            <TourInput
              props={{
                label: "Soyisim",
                value: useLastName,
                setValue: setLastName,
              }}
            />
            <NumberInput
              props={{
                label: "Çocuk Sayısı",
                value: useNumberOfAdults,
                setValue: setNumberOfAdults,
              }}
            />
            <NumberInput
              props={{
                label: "Yetişkin Sayısı",
                value: useNumberOfInfant,
                setValue: setNumberOfInfant,
              }}
            />

            <NumberInput
              props={{
                label: "Oda Sayısı",
                value: useNumberOfRooms,
                setValue: setNumberOfRooms,
              }}
            />
            <PhoneNumber
              props={{
                required: true,
                value: usePhoneNumber,
                setValue: setPhoneNumber,
                setCountry: setCountry,
              }}
            />
            <TourInput
              props={{
                label: "Mail Adresi",
                value: useEmail,
                setValue: setEmail,
              }}
            />

            <Button
              className="mt-6 rounded-full"
              size="lg"
              color="red"
              fullWidth
              type="submit"
            >
              Rezervasyon ödemesi yap
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ToursForm;
