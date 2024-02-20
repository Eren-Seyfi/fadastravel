"use client";

import Slider from "react-slick";
import CarouselItem from "./Items/items";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SliderMenü = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  const data = [
    {
      src: "/Carousel/Image-003-1.webp",
      content:
        "The trip lived up to luxury standards. The hotel is very cozy and comfortable boutique hotel. Everything is high quality and very well designed. Staff is so friendly and welcoming. The VIP transfers were convenient, and the Cappadocia tour was perfect to see the history. Also Don’t miss watching the balloons in early morning which is fascinating!",
      history: "Mark · October 2023",
    },
  ];
  return (
    <section className="w-full h-[70vh] bg-sky-500 pt-12">
      <h1 className="text-center text-5xl my-10 font-bold text-white">
        Reviews
      </h1>
      <Slider {...settings}>
        {data.map((props, index) => {
          return <CarouselItem props={props} key={index} />;
        })}
      </Slider>
    </section>
  );
};

export default SliderMenü;
