"use client";
import { useEffect } from "react";
import AOS from "aos";
import VerticalCard from "../Card/VerticalCard";

const WhyAreWeDifferent = () => {
  const WhyAreWeDifferentProps = [
    {
      id: 1,
      head: "People",
      content:
        "Our tour guides and partners are not just professionals doing their job; they are people with a love for their country and their craft. You will meet them as a guest and leave as a close friend.",
      src: "WhyAreWeDifferent/1.webp",
    },
    {
      id: 2,
      head: "Passion",
      content:
        "At Fadas Travel, we are committed to not being just another travel company that automates their tours; we want you to feel the unique experience we have designed for you. Our goal is to show you the best version of Turkey possible.",
      src: "WhyAreWeDifferent/2.webp",
    },
    {
      id: 3,
      head: "Presence",
      content:
        "Our Regional Experts will be available 24/7 during your stay to ensure all your needs are met. Also, when you are in the Cappadocia region, our owners will meet you personally and make sure everything is going well.",
      src: "WhyAreWeDifferent/3.webp",
    },
  ];
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className="container space-y-10 px-5 md:px-0"
      data-aos="fade-right"
    >
      <h1 className="text-center font-bold text-5xl text-black/80">
        Why are we different?
      </h1>
      <div className="flex flex-wrap items-start justify-center w-full h-full gap-10">
        {WhyAreWeDifferentProps.map((props, index) => {
          return <VerticalCard props={props} key={index} />;
        })}
      </div>
    </section>
  );
};
export default WhyAreWeDifferent;
