"use client";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const ToursCarousel = ({ items }) => {
  return (
    <Swiper
      modules={[Navigation, A11y]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={15}
      loop={true}
      style={{ "--swiper-navigation-color": "white" }}
      breakpoints={{ 768: { slidesPerView: 3 }, 576: { slidesPerView: 1 } }}
    >
      {items[3].map((data, index) => {
        return (
          <SwiperSlide key={index} className="border-none border-0">
            <img
              src={data}
              alt={index}
              className="rounded-3xl border-none border-0"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ToursCarousel;
