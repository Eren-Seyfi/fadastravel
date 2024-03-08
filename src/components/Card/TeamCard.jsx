/* Takım Kartı */
"use client";

import { useEffect } from "react";
import AOS from "aos";

const TeamCard = ({ props }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className="flex flex-col justify-center items-center h-full w-96 gap-2 p-4"
      data-aos="fade-up"
      id="team-card"
    >
      <img src={props.src} className="rounded-3xl h-96" alt="" />

      <h1 className="font-bold text-lg text-red-500 text-center">
        {props.head}
      </h1>
      <span className=" font-black  text-black">{props.role}</span>
      <span className="text-black text-justify text-base ">
        {props.content}
      </span>
    </section>
  );
};
export default TeamCard;
