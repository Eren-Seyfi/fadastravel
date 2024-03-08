"use client";
import { GoStarFill } from "react-icons/go";
import TourInput from "../Input/Input";
import PhoneNumber from "../Input/PhoneNumber";
import DataInput from "../Input/DateInput";
import NumberInput from "../Input/NumberInput";
import { Button } from "@material-tailwind/react";

const ToursForm = ({ items }) => {
  return (
    <div className="flex flex-col items-center w-full ml-0 md:ml-10">
      <div className="flex flex-col justify-center items-center h-full w-full gap-10">
        <img className="rounded-3xl w-96 " src={items[0].Map} alt="" />
        <form
          action=""
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
            <TourInput props={{ label: "First Name" }} />
            <TourInput props={{ label: "Last Name" }} />
            <NumberInput props={{ label: "Number of Adults" }} />
            <NumberInput props={{ label: "Number of Infant (0-2 years)" }} />
            <NumberInput props={{ label: "Number of Kids (2-12 years)" }} />
            <NumberInput props={{ label: "Number of Rooms" }} />
            <PhoneNumber props={{ required: true }} />
            <TourInput props={{ label: "Email Address" }} />
            <DataInput props={{ label: "Tour Start Date" }} />
            <Button
              className="mt-6 rounded-full"
              size="lg"
              color="red"
              fullWidth
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
