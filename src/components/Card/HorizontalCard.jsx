"use client";

import { useEffect } from "react";
import AOS from "aos";

const HorizontalCard = ({ props }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      className={`${props.position}  container flex justify-center items-center lg:flex-nowrap flex-wrap gap-10 px-2 md:px-6 `}
    >
      <img
        src={props.src}
        className="hidden md:block rounded-3xl h-full md:h-96 bg-contain bg-center  "
        alt=""
        data-aos={
          props.position == "flex-row-reverse" ? "fade-up" : "fade-left"
        }
      />
      <div className="space-y-4">
        <h1
          className="font-extrabold text-2xl md:text-3xl text-slate-700 "
          data-aos={
            props.position == "flex-row-reverse" ? "fade-left" : "fade-right"
          }
        >
          {props.head}
        </h1>
        <p
          className=" text-base  md:text-[1.2rem] font-thin tracking-widest font-poppins text-gray-700 text-justify w-full md:w-[42rem]"
          data-aos="fade-up"
        >
          {props.content}
        </p>
      </div>
      <img
        src={props.src}
        className=" block md:hidden rounded-3xl h-full md:h-96 bg-contain bg-center  "
        alt=""
        data-aos={
          props.position == "flex-row-reverse" ? "fade-up" : "fade-left"
        }
      />
    </section>
  );
};
export default HorizontalCard;
