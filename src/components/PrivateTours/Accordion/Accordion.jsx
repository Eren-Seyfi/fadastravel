"use client";

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { FaBed, FaMotorcycle, FaUtensils } from "react-icons/fa";
import { LiaPlusSolid } from "react-icons/lia";
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

export default function PrivateToursAccordionMenü({ props }) {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section className="container space-y-2">
      {props.map((data, index) => {
        return (
          <Accordion
            key={index}
            open={open === data.id}
            icon={<Icon id={data.id} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(data.id)}
              className={`border-none border-0 font-sans pl-4 pr-5 text-base font-medium hover:bg-red-300 hover:text-white ${
                open === data.id
                  ? "bg-[#F56960] hover:!text-white text-white"
                  : "text-black"
              }`}
            >
              {data.title}
            </AccordionHeader>
            <AccordionBody className="px-10 text-justify">
              <ul className="pl-8 list-disc  space-y-4">
                {data.list.map((list, index) => {
                  return (
                    <li
                      className=" text-base text-black font-light font-poppins"
                      key={index}
                    >
                      {list}
                    </li>
                  );
                })}
              </ul>
              <br />
              <div className="grid grid-cols-1 md:grid-cols-2 justify-start items-start gap-y-10 gap-x-2">
                {/*  Luxury Accomodations */}
                {data.LuxuryAccomodations ? (
                  <div className="w-full space-y-3">
                    <h1 className="flex items-center gap-2 text-base font-bold text-black">
                      <FaBed /> <span>Luxury Accomodations</span>
                    </h1>
                    <ul className="pl-8 list-disc text-base text-black/80">
                      {data.LuxuryAccomodations.map(
                        (LuxuryAccomodations, index) => {
                          return <li key={index}>{LuxuryAccomodations}</li>;
                        }
                      )}
                    </ul>
                  </div>
                ) : (
                  ""
                )}

                {/* Included IncludedMeals */}
                {data.IncludedMeals ? (
                  <div className="w-full space-y-3">
                    <h1 className="flex items-center gap-2 text-base font-bold text-black">
                      <FaUtensils />
                      <span>Included IncludedMeals</span>
                    </h1>
                    <ul className="pl-8 list-disc text-base text-black/80">
                      {data.IncludedMeals.map((IncludedMeals, index) => {
                        return <li key={index}>{IncludedMeals}</li>;
                      })}
                    </ul>
                  </div>
                ) : (
                  ""
                )}

                {/* Included Activity */}

                {data.IncludedActivity ? (
                  <div className="w-full space-y-3">
                    <h1 className="flex items-center gap-2 text-base font-bold text-black">
                      <FaMotorcycle /> <span>Included Activity</span>
                    </h1>
                    <ul className="pl-8 list-disc text-base text-black/80">
                      {data.IncludedActivity.map((IncludedActivity, index) => {
                        return <li key={index}>{IncludedActivity}</li>;
                      })}
                    </ul>
                  </div>
                ) : (
                  ""
                )}

                {/* Add On AddOnActivities */}
                {data.AddOnActivities ? (
                  <div className="w-full space-y-3">
                    <h1 className="flex items-center gap-2 text-base font-bold text-black">
                      <LiaPlusSolid className="text-black/50 text-lg font-body" />
                      <span>Add On AddOnActivities</span>
                    </h1>
                    <ul className="pl-8 list-disc text-base text-black/80">
                      {data.AddOnActivities.map((AddOnActivities, index) => {
                        return <li key={index}>{AddOnActivities}</li>;
                      })}
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </AccordionBody>
          </Accordion>
        );
      })}
    </section>
  );
}
