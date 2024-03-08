"use client";
import { useEffect } from "react";
import AOS from "aos";

import Link from "next/link";
const ExploreTurkeyWithUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="w-full h-[40vh] bg-[#F9F3EE] flex flex-col justify-center items-center gap-10">
      <h1 className="font-bold text-5xl text-center" data-aos="fade-right">
        Explore Turkey with us
      </h1>
      <Link
        href="/privatetours"
        className="bg-red-400 hover:bg-blue-gray-400 transition text-white rounded-full py-4 px-9 font-bold"
        data-aos="fade-up"
      >
        View Tours
      </Link>
    </section>
  );
};
export default ExploreTurkeyWithUs;
