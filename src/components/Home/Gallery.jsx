"use client";
import { useEffect } from "react";
import AOS from "aos";

const Gallery = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="container p-5 sm:p-8">
      <div className="gap-4 columns-2 sm:gap-4 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-4">
        <img
          src="Gallery/1.webp"
          alt=""
          className="rounded-lg"
          data-aos="zoom-in-down"
        />
        <img
          src="Gallery/2"
          alt=""
          className="rounded-lg"
          data-aos="zoom-in-down"
        />
        <img
          src="Gallery/3.webp"
          alt=""
          className="rounded-lg"
          data-aos="zoom-in-down"
        />
        <img
          src="Gallery/4.webp"
          alt=""
          className="rounded-lg"
          data-aos="zoom-in-down"
        />
        <img
          src="Gallery/5.webp"
          alt=""
          className="rounded-lg"
          data-aos="zoom-in-down"
        />
        <img
          src="Gallery/6.jpg"
          alt=""
          className="rounded-lg"
          data-aos="zoom-in-down"
        />
        <img
          src="Gallery/7.webp"
          alt=""
          className="rounded-lg"
          data-aos="zoom-in-down"
        />
        <img
          src="Gallery/8.webp"
          alt=""
          className="rounded-lg"
          data-aos="zoom-in-down"
        />
        <img
          src="Gallery/9.webp"
          alt=""
          className="rounded-lg"
          data-aos="zoom-in-down"
        />
        <img
          src="Gallery/10.webp"
          alt=""
          className="rounded-lg"
          data-aos="zoom-in-down"
        />
      </div>
    </div>
  );
};
export default Gallery;
