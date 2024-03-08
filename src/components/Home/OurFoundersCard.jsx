"use client";

import { useEffect } from "react";
import AOS from "aos";
import Link from "next/link";

const OurFoundersCard = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      className={`flex-row-reverse  font-poppins container flex justify-center items-center lg:flex-nowrap flex-wrap gap-10 px-6`}
    >
      <img
        src="Home/OurFounders.webp"
        className="block md:hidden rounded-3xl h-full md:h-96 bg-contain bg-center  "
        alt=""
        data-aos="fade-left"
      />
      <div className="space-y-4">
        <h1
          className="font-bold text-2xl md:text-3xl text-slate-700 "
          data-aos="fade-left"
        >
          Our Founders
        </h1>
        <p
          className=" text-base  md:text-[1.2rem] font-thin tracking-widest font-poppins text-gray-700 text-justify w-full md:w-[42rem]"
          data-aos="fade-up"
        >
          Fadas Travel was founded by Makbule and Seckin, a couple who have
          lived all over the world and worked in industries outside of tourism.
          After restoring their hotel in Cappadocia and starting Fadas Travel,
          they fell in love with the work. Today, they are living in Turkey and
          are dedicated to showing people how special their homeland is.
          <Link href="whoweare" className="text-red-500">
            Meet our team…
          </Link>
        </p>
      </div>
      <img
        src="Home/OurFounders.webp"
        className="hidden md:block rounded-3xl h-full md:h-96 bg-contain bg-center  "
        alt=""
        data-aos="fade-left"
      />
    </section>
  );
};
export default OurFoundersCard;
