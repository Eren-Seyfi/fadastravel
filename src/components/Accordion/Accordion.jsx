"use client";
import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default function AccordionMenü({ data }) {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section className="container space-y-2">
      <h1 className="text-2xl my-6 font-bold">Turkey Travel FAQs</h1>
      <Accordion key="1" open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`pl-10 pr-5 text-base font-bold border-none ${
            open === 1 ? "bg-red-300 hover:text-white text-white" : "text-black"
          }`}
        >
          Do I need a visa to travel to Turkey?
        </AccordionHeader>
        <AccordionBody className="px-10 text-justify">
          Depending on where you’re from, you may need a visa to enter Turkey.
          Travelers from many countries including New Zealand, the United
          Kingdom, Denmark, Finland, France, Germany, Japan, Norway, Sweden, and
          Switzerland don’t require a visa for stays of less than three months
          if the trip is for tourism purposes. Foreign nationals from countries
          including Australia, Canada, South Africa, and the USA will need an
          e-visa. An e-visa allows you to stay in Turkey for up to 90 days
          within a 180-day period. E-visas will be verified by passport control
          officers on their systems at ports of entry, but it’s a good idea to
          keep a copy of your e-visa on your phone, tablet, or as a hard copy,
          just in case. To see the complete list of countries that do and do not
          require a visa to travel to Turkey, please visit the{" "}
          <a
            href="https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
            target="_blank"
            className="text-red-500"
          >
            official Turkish government website.
          </a>
        </AccordionBody>
      </Accordion>

      {data.map((item) => (
        <Accordion
          key={item.id}
          open={open === item.id}
          icon={<Icon id={item.id} open={open} />}
        >
          <AccordionHeader
            onClick={() => handleOpen(item.id)}
            className={`pl-10 pr-5 text-base font-bold border-none ${
              open === item.id
                ? "bg-red-300 hover:text-white text-white"
                : "text-black"
            }`}
          >
            {item.title}
          </AccordionHeader>
          <AccordionBody className="px-10 text-justify">
            {item.content}
          </AccordionBody>
        </Accordion>
      ))}
    </section>
  );
}
