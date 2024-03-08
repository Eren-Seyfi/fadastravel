/* Yatay Yuvarlak Kart */
"use client";

import { useEffect } from "react";
import AOS from "aos";

const RoundCard = ({ props }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        className={`${props.position} container flex justify-center items-center md:flex-nowrap flex-wrap gap-10 px-6`}
      >
        <div className="space-y-4">
          <h1
            className="font-bold text-xl text-slate-700"
            data-aos={
              props.position == "flex-row-reverse" ? "fade-left" : "fade-right"
            }
          >
            {props.head}
          </h1>
          <p
            className=" text-gray-700 font-poppins text-base text-justify w-full md:w-[525px]"
            data-aos="fade-up"
          >
            {props.content}
          </p>
        </div>
        <img
          src={props.src}
          className="rounded-full w-[35rem]"
          priority={true}
          data-aos={
            props.position == "flex-row-reverse" ? "fade-up" : "fade-left"
          }
          alt=""
        />
      </section>
    </>
  );
};
export default RoundCard;
