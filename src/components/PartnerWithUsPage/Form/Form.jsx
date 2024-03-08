"use client";
import { useState } from "react";
import axios from "axios";
import FormInput from "../FormInput";
import FormTextArea from "../FormTextArea";
import PhoneNumber from "../PhoneNumber";
const PartnerWithUsPageForm = () => {
  const [useFullName, setFullName] = useState("");
  const [useNameOfCompany, setNameOfCompany] = useState("");
  const [usePositionInCompany, setPositionInCompany] = useState("");
  const [useEmail, setEmail] = useState("");
  const [usePhoneNumber, setPhoneNumber] = useState("");
  const [useCountry, setCountry] = useState("");
  const [useMessage, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post("/api/sendEmail/PartnerWithUsPage", {
        Name: useFullName,
        NameOfCompany: useNameOfCompany,
        PositionInCompany: usePositionInCompany,
        Email: useEmail,
        PhoneNumber: usePhoneNumber,
        Country: useCountry,
        Message: useMessage,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setFullName("");
    setNameOfCompany("");
    setPositionInCompany("");
    setPositionInCompany("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className=" md:w-[40vw] space-y-10 mt-20">
      {/* Full Name */}
      <h1 className="text-center font-bold text-2xl">Partnership Form</h1>
      <FormInput
        props={{
          label: "Full Name ",
          placeholder: "Full Name",
          name: "fullname",
          required: true,
          value: useFullName,
          setValue: setFullName,
        }}
      />
      {/* Name of Company  */}

      <FormInput
        props={{
          label: "Name of Company",
          placeholder: "Name of Company",
          name: "nameofcompany",
          required: true,
          value: useNameOfCompany,
          setValue: setNameOfCompany,
        }}
      />
      {/*  Position in Company  */}

      <FormInput
        props={{
          label: "Position in Company",
          placeholder: "Position in Company",
          name: "positionincompany",
          required: true,
          value: usePositionInCompany,
          setValue: setPositionInCompany,
        }}
      />
      {/*     E-Mail  */}

      <FormInput
        props={{
          label: "E-Mail",
          placeholder: "E-Mail",
          name: "email",
          required: true,
          value: useEmail,
          setValue: setEmail,
        }}
      />
      {/*     Phone Number  */}
      <PhoneNumber
        props={{
          required: true,
          value: usePhoneNumber,
          setValue: setPhoneNumber,
          setCountry: setCountry,
        }}
      />
      {/*    Message  */}
      <FormTextArea
        props={{
          label: "Message",
          name: "message",
          required: true,
          value: useMessage,
          setValue: setMessage,
        }}
      />
      <button
        class="mt-6 block select-none rounded-full bg-blue-400 py-2 px-8 text-center align-middle 
  font-sans text-base   text-white shadow-md shadow-gray-900/10 transition-all 
  hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] 
  active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};
export default PartnerWithUsPageForm;
