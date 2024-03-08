"use client";
import CarouselItem from "./CarouselItem/CarouselItem";
import { Carousel } from "@material-tailwind/react";
import { getDataGlobalCarousel } from "@/lib/getdata";
const CarouselMenu = async () => {
  const data = await getDataGlobalCarousel();
  return (
    <section className="w-full h-screen md:h-[40rem] bg-[#04A9DE]">
      <Carousel className="rounded-xl container " loop autoplay>
        {data.map((data, index) => (
          <CarouselItem item={data} key={index} />
        ))}
      </Carousel>
    </section>
  );
};

export default CarouselMenu;
