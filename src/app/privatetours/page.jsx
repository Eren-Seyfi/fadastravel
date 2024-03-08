"use client";
import AccordionMenü from "@/components/Accordion/Accordion";
import CarouselMenu from "@/components/Carousel/Carousel";
import ExploreTurkeyWithUs from "@/components/ExploreTurkeyWithUs/ExploreTurkeyWithUs";
import OurPrivateTours from "@/components/Home/OurPrivateTours";
import ToursHorizontalCard from "@/components/PrivateTours/Card/HorizontalCard";
import SubscribeToOurNewsletter from "@/components/SubscribeToOurNewsletter/SubscribeToOurNewsletter";

const PrivateToursPage = () => {
  const WhyTurkeyProps = {
    head: "Why Turkey?  ",
    content:
      "Turkey is surrounded by three different seas, with history and culture that are simply unmatched. It is the origin of civilization, with lands that hundreds of emperors and sultans have walked. It is where the past meets the present – from the 1000-year-old bazaars to the modern cities, from the hot air balloons in Cappadocia to the historic mosques of Istanbul. It is a country that we are proud to call home. At Fadas Travel, our goal is to help you uncover these wonders, and provide the most beautiful Turkish experience possible.",
    src: "/PrivateToursPage/pexels-osman-ozavci-8845364-2048x1536.webp",
  };
  const AccordionMenüProps = [
    {
      id: 2,
      title: "What's the weather like in Turkey?",
      content:
        "Turkey is a very seasonal country, and can be enjoyed in every part of the year. It is hot in the summer and can even snow in the winter. Each season has its own beauty, so we recommend our country year round. We will let you know what clothing to pack before your trip in order to ensure you are weather-prepared!",
    },
    {
      id: 3,
      title: "Are credit cards accepted in Turkey?",
      content:
        "Major credit cards are widely accepted in tourist shopping areas and large hotels in Turkey. However, we still recommend carrying some cash just in case. We can also exchange your currency ourselves at current conversion rates during your trip, so you don’t need to worry about that!",
    },
    {
      id: 4,
      title: "Are meals included?",
      content:
        "All breakfasts are included during your stays and are served at our hotels. Lunch is included during the days you are touring a city. Dinners are not included except for the Turkish Dance Show in Cappadocia. However, we will provide you with the best locations to eat for each city during your stay, so food will definitely won’t be a problem!",
    },
    {
      id: 5,
      title: "Can I use my mobile phone while in Turkey?",
      content:
        "Yes, most mobile services will work in Turkey. Coverage is good in large cities like Istanbul, but may be patchy in remote areas. If you’re visiting for a week or so, it might be better to use the SIM card from your mobile carrier at home. You’ll also need to make sure you have global roaming activated before you depart. However, fees can be on the pricey side so double-check what fees are involved to avoid an unexpected phone bill upon your return.",
    },
  ];

  return (
    <div className="space-y-10 flex flex-col items-center justify-center">
      <img
        src="/PrivateToursPage/14-17.webp"
        className="hidden md:block w-full h-72 bg-center bg-contain"
        alt=""
      />
      <span className="text-center ">
        <p className="hidden md:block w-[42rem] font-medium  text-black/80 font-poppins">
          Our Private Tours were carefully designed so that our guests have the
          best Turkish experience possible. In these tours, we will discover
          Turkey together and show you what can’t be found in guidebooks or
          online. Our knowledgeable and passionate guides will immerse you in
          the history and culture of Turkey. So, come join us on this journey
          and let’s create some unforgettable memories!
        </p>
      </span>
      <h1 className="text-5xl font-extrabold pt-10 text-center">
        Our Private Tours
      </h1>
      <OurPrivateTours />
      <CarouselMenu />
      <ToursHorizontalCard props={WhyTurkeyProps} />
      <section className="px-2 md:px-0 lg:w-[70rem]">
        <AccordionMenü data={AccordionMenüProps} />

        <section className="flex justify-center items-center container">
          <iframe
            src="https://www.youtube.com/embed/6texDFhF_co"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="w-full h-[30vh] md:h-[70vh]"
          ></iframe>
        </section>
      </section>
      <ExploreTurkeyWithUs />
      <SubscribeToOurNewsletter />
    </div>
  );
};

export default PrivateToursPage;
