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
      spaceBetween={10}
      loop={true}
      style={{ "--swiper-navigation-color": "white" }}
      breakpoints={{
        1024: { slidesPerView: 6 },
        768: { slidesPerView: 4 },
        640: { slidesPerView: 3 },
        320: { slidesPerView: 1 },
      }}
    >
      {items.map((data, index) => {
        return (
          <SwiperSlide key={index} className="border-none border-0">
            <img
              src={data}
              alt={index}
              className="rounded-3xl border-none border-0 md:h-96 h-[32rem] w-full"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ToursCarousel;
