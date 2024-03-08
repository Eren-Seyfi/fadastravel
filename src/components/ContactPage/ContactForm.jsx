"use client";
import { Card, Button } from "@material-tailwind/react";
import { useState } from "react";
import axios from "axios";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post("/api/sendEmail/Contact", {
        Name: name,
        Email: email,
        Message: message,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Card color="transparent" shadow={false} data-aos="fade-right">
      <div className="flex items-center h-full gap-2">
        <span className="bg-red-500 h-0.5 w-16"></span>

        <span className="text-red-500 text-sm font-medium font-poppins ">
          GET IN TOUCH
        </span>
      </div>
      <form
        onSubmit={handleSubmit}
        className="mt-8 flex flex-col gap-6 mb-2 md:w-[28rem] max-w-screen-lg"
      >
        <input
          name="name"
          type="text"
          className="border border-gray-400 rounded-full p-2.5"
          placeholder="Your Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          name="mail"
          type="mail"
          className="border border-gray-400 rounded-full p-2.5"
          placeholder="Your Mail"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="message"
          placeholder="Message"
          className="border border-gray-400 rounded-2xl h-44 p-2.5"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <Button
          type="submit"
          className="mt-6 py-4 px-8 text-white bg-red-300 rounded-full"
        >
          SUBMIT MESSAGE
        </Button>
      </form>
    </Card>
  );
};
export default ContactForm;
