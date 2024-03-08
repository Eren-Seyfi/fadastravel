"use client";

import { useEffect } from "react";
import AOS from "aos";
import Link from "next/link";
const OurStoryCard = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        className={`flex-row container flex justify-center items-center md:flex-nowrap flex-wrap gap-10 px-6`}
      >
        <div className="space-y-4">
          <h1
            className="font-bold text-xl text-slate-700"
            data-aos="fade-right"
          >
            Our Story…
          </h1>
          <p
            className=" text-gray-700 font-poppins text-base text-justify w-full md:w-[525px]"
            data-aos="fade-up"
          >
            At Fadas Travel, we are travelers ourselves. As the owners,{" "}
            <a
              referrerpolicy="no-referrer"
              href="#team-card"
              className="text-red-500"
            >
              <strong>Makbule</strong>
            </a>{" "}
            and{" "}
            <a
              referrerpolicy="no-referrer"
              href="#team-card"
              className="text-red-500"
            >
              <strong>Seçkin</strong>
            </a>
            , we have visited over 30 countries across 6 different continents,
            stayed in every type of hotel you can think of, and participated in
            all the activities specific to our travel destinations. But, while
            experiencing these places, we realized one thing: Turkey, our home
            country, is not shown enough to the world. That’s why, we have
            dedicated our life to showing people Turkey in the most beautiful
            way possible
          </p>
        </div>
        <img
          src="/WhoWeArePage/image-001-photoaidcom-cropped.webp"
          className="rounded-full w-[35rem]"
          priority={true}
          data-aos="fade-left"
        />
      </section>
    </>
  );
};
export default OurStoryCard;
