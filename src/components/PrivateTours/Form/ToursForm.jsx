"use client";
import { GoStarFill } from "react-icons/go";
import TourInput from "../Input/Input";
import PhoneNumber from "../Input/PhoneNumber";
import DataInput from "../Input/DateInput";
import NumberInput from "../Input/NumberInput";
import { Button } from "@material-tailwind/react";
import { useState } from "react";
import axios from "axios";
const ToursForm = ({ items }) => {
  const [useFirstName, setFirstName] = useState("");
  const [useLastName, setLastName] = useState("");
  const [useNumberOfAdults, setNumberOfAdults] = useState("");
  const [useNumberOfInfant, setNumberOfInfant] = useState("");
  const [useEmail, setEmail] = useState("");
  const [usePhoneNumber, setPhoneNumber] = useState("");
  const [useCountry, setCountry] = useState("");
  const [useData, setData] = useState("");
  const [useNumberOfKids, setNumberOfKids] = useState("");
  const [useNumberOfRooms, setNumberOfRooms] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post("/api/sendEmail/PrivateTours", {
        TurName: items[0].Headers,
        FirstName: useFirstName,
        LastName: useLastName,
        Email: useEmail,
        PhoneNumber: usePhoneNumber,
        Country: useCountry,
        Data: useData,
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
        setData("");
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
        <img className="rounded-3xl w-96 " src={items[0].Map} alt="" />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center md:items-start h-full w-full gap-10 px-4 md:px-0"
        >
          <h1 className="flex items-center justify-center bg-[#4792BE] w-full rounded-t-3xl h-20 text-white text-xl font-bold">
            Summary & Booking
          </h1>
          <span className=" font-bold pl-2">{items[0].Headers}</span>
          <div className="flex items-end gap-1">
            <span className="flex items-start space-x-2 font-poppins font-medium text-black/80">
              <span className="text-2xl">{items[0].currency}</span>
              <h1 className="font-bold text-5xl"> {items[0].Price}</h1>
            </span>
            <span className="text-4xl font-bold">/</span>
            <h2 className="font-medium text-4xl font-poppins h-7">person</h2>
          </div>
          <div className="flex items-center gap-2">
            <span>(5.0 Reviews)</span>
            <div className="flex items-center gap-0.5 text-[#EFAD4E]">
              <GoStarFill />
              <GoStarFill />
              <GoStarFill />
              <GoStarFill />
              <GoStarFill />
            </div>
          </div>
          <span className="w-full h-0.5 bg-black"></span>
          <div className="flex flex-col items-center justify-center h-full w-full gap-4 ">
            <TourInput
              props={{
                label: "First Name",
                value: useFirstName,
                setValue: setFirstName,
              }}
            />
            <TourInput
              props={{
                label: "Last Name",
                value: useLastName,
                setValue: setLastName,
              }}
            />
            <NumberInput
              props={{
                label: "Number of Adults",
                value: useNumberOfAdults,
                setValue: setNumberOfAdults,
              }}
            />
            <NumberInput
              props={{
                label: "Number of Infant (0-2 years)",
                value: useNumberOfInfant,
                setValue: setNumberOfInfant,
              }}
            />
            <NumberInput
              props={{
                label: "Number of Kids (2-12 years)",
                value: useNumberOfKids,
                setValue: setNumberOfKids,
              }}
            />
            <NumberInput
              props={{
                label: "Number of Rooms",
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
                label: "Email Address",
                value: useEmail,
                setValue: setEmail,
              }}
            />
          <DataInput
              props={{
                label: "Tour Start Date",
                value: useData,
                setData: setData,
              }}
            />
            <Button
              className="mt-6 rounded-full"
              size="lg"
              color="red"
              fullWidth
              type="submit"
            >
              sign up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ToursForm;
