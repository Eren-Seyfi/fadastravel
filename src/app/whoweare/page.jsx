"use client";

import { useEffect } from "react";
import AOS from "aos";
import RoundCard from "@/components/Card/RoundCard";
import TeamCard from "@/components/Card/TeamCard";
import ExploreTurkeyWithUs from "@/components/ExploreTurkeyWithUs/ExploreTurkeyWithUs";
import SubscribeToOurNewsletter from "@/components/SubscribeToOurNewsletter/SubscribeToOurNewsletter";
import CarouselMenü from "@/components/Carousel/Carousel";
import OurStoryCard from "@/components/whoweare/OurStoryCard";

const WhoWeArePage = () => {
  const RoundCardProps = [
    {
      head: "We Care About Your Turkish Experience…",
      content:
        "As experienced travelers we understand the problems that come your way and know what bad hospitality looks like. With us, you are in safe hands! We have been working with our guides, partner hotels, and transportation managers for years and designed our tours to be as comfortable and enjoyable as possible. Instead of worrying about minor problems we want you to enjoy our beautiful country of Turkey!",
      src: "/WhoWeArePage/who-we-are-2-photoaidcom-cropped.webp",
      position: "flex-row-reverse", // left (flex-row-reverse) right (flex-row)
    },
    {
      head: "Owners of Mak’s Cave House…",
      content:
        "Our hotel, Mak’s Cave House, opened in June 2021 in the town of Uçhisar, Cappadocia. It is a luxury boutique hotel with impressive views of the Cappadocia landscape. Since our opening, we have quickly become the highest rated hotel in Cappadocia with hundreds of people speaking of our comfort and hospitality. We have received countless gifts and awards due to the welcoming atmosphere and personal touch our hotel provides. With Fadas Travel, our mission is to provide these same concepts we deliver in our hotel to your entire stay in Turkey.",
      src: "/WhoWeArePage/ZmlsZU5hbWU9V2hhdHNBcHAtSW1hZ2UtMjAyMi0xMS0yNC1hdC0yMy41OC4xNA_20221219115952-photoaidcom-cropped.webp",
      position: "flex-row", // left (flex-row-reverse) right (flex-row)
    },
  ];
  const TeamCardProps = [
    {
      head: "Makbule",
      role: "Co-Founder & Travel Designer",
      content:
        "Makbule was born and grew up in Cappadocia. She chose to become a textile engineer and worked for 20 years in three different countries. Every time she visited a new place and returned to Turkey, she realized how beautiful her country was. After COVID-19, Makbule and her family moved back to Turkey permanently. Now with Mak’s Cave House and Fadas Travel, she is sharing this love for her country with the entire world.",
      src: "/WhoWeArePage/Team/Makbule.webp",
    },
    {
      head: "Seçkin",
      role: "Co-Founder & Sales Manager",
      content:
        "Seckin found his love for travel during their family trips with Makbule. He has a background in textile engineering and business development. Seckin has spent many years managing large corporations in developing countries. He now leads our operations in Turkey and our partnerships across the globe.",
      src: "/WhoWeArePage/Team/Seçkin.webp",
    },
    {
      head: "Başar",
      role: "Marketing Director",
      content:
        "From a young age, Basar started traveling all over the world with his family. He is currently studying at New York University and is passionate about travel media. Basar manages our online profiles and helps connect us with our guests!",
      src: "/WhoWeArePage/Team/Başar.webp",
    },
    {
      head: "Sanya",
      role: "Regional Expert • Istanbul",
      content:
        "Sanya has been living in Istanbul for over a decade now, but she is from Arkhangelsk, Russia. She studied tourism at St. Petersburg University and is an avid traveler herself. Sanya is very helpful in selecting our tour guides and activities in Istanbul!",
      src: "/WhoWeArePage/Team/Sanya.webp",
    },
    {
      head: "Özer",
      role: "Regional Expert • Istanbul",
      content:
        "Özer has had a lifetime of exploration and experiences. He currently resides in Istanbul but attended university in Russia. He is fluent in Russian, English, and Turkish. He does all our quality checks in Istanbul and thanks to him we are able to provide the highest quality of service!",
      src: "/WhoWeArePage/Team/Özer.webp",
    },
    {
      head: "Nilay",
      role: "Regional Expert • Cappadocia",
      content:
        "Due to her love of culture and history, Nilay has been traveling the globe for a long time. She is an international businesswoman and is fluent in Spanish, English, and Turkish. Like Makbule, she has always felt a special connection to Turkey. She has hotel projects in Cappadocia and is an expert in the Antalya region. Thanks to Nilay, we can create amazing experiences in Antalya as well!",
      src: "/WhoWeArePage/Team/Nilay.webp",
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <section className="bg-[url('/WhoWeArePageBg.webp')] w-full h-full">
        <h1 className="text-center py-16 text-3xl font-bold">
          Helping people see Turkey in the most beautiful way possible
        </h1>
        <div className="container py-20">
          <div className="flex flex-col items-center justify-center w-full h-full gap-10">
            <OurStoryCard />
            {RoundCardProps.map((props, index) => {
              return <RoundCard props={props} key={index} />;
            })}
          </div>
        </div>
      </section>
      <section className="space-y-10 pt-20">
        <h1
          className="text-center text-5xl text-red-300 font-extrabold"
          data-aos="zoom-in"
        >
          Meet the Team
        </h1>
        <span className="flex w-full justify-center">
          <hr className=" bg-blue-500 h-0.5 w-[80vw] " />
        </span>
        <div className=" container flex flex-wrap gap-4 items-start justify-center ">
          {TeamCardProps.map((props, index) => {
            return <TeamCard props={props} key={index} />;
          })}
        </div>
      </section>
      <CarouselMenü  />

      <ExploreTurkeyWithUs />
      <SubscribeToOurNewsletter />
    </div>
  );
};
export default WhoWeArePage;
