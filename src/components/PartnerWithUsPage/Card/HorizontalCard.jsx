"use client";

import { useEffect } from "react";
import AOS from "aos";

const PartnerWithUsHorizontalCard = ({ props }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      className={` font-poppins container flex justify-center items-center lg:flex-nowrap flex-wrap gap-10 px-2 md:px-6 `}
    >
      <img
        src="/PartnerWithUsPage/image-007.webp"
        className="rounded-3xl h-full md:h-96 bg-contain bg-center  "
        alt=""
        data-aos="fade-right"
      />
      <div className="space-y-4">
        <h1
          className="font-bold text-2xl md:text-3xl text-slate-700 "
          data-aos="fade-left"
        >
          B2B Partnerships
        </h1>
        <p
          className=" text-base  md:text-[1.2rem] font-thin tracking-widest font-poppins text-gray-700 text-justify w-full md:w-[42rem]" /* w-[40vw] */
          data-aos="fade-up"
        >
          As Fadas Travel, we have partners across the globe. We work with both
          large and small companies that organize tours in Turkey. With our
          experience and expertise, we are able to create amazing Turkish
          experiences and solve problems on a local level for our partners. We
          listen closely to our partner’s needs and address specific details for
          their clients. Please fill in the form and we will get in touch with
          you. We hope to see you soon!
        </p>
      </div>
    </section>
  );
};
export default PartnerWithUsHorizontalCard;
