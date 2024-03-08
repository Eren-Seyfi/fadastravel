"use client";
import {
  FaPlaceOfWorship,
  FaClipboardList,
  FaBed,
  FaCar,
  FaMotorcycle,
  FaUtensils,
  FaPlus,
} from "react-icons/fa";
import PrivateToursAccordionMenü from "../Accordion/Accordion";
const ToursCountent = ({ items }) => {
  return (
    <div className="col-span-2 flex flex-col items-center justify-between container shadow-lg rounded-3xl w-full  h-full pt-10">
      {/* Tur Name */}
      <div className="space-y-4">
        <h1 className="text-3xl p-4 font-bold">{items[0].Headers}</h1>
        <p className="p-4 text-justify">{items[0].Content}</p>
        {/* Itinerary */}
        <div className="bg-[#4792BE] w-36 h-12 flex items-center justify-center gap-3 rounded-r-2xl">
          <FaPlaceOfWorship className="text-xl text-white" />
          <span className="text-white font-normal">Itinerary</span>
        </div>
        {/*   ============================ Accordion Menü ============================ */}
        <PrivateToursAccordionMenü props={items[1]} />
        {/*   ============================ Content ============================ */}
        {/*  Inclusions */}
        <div className="bg-[#4792BE] w-36 h-12 flex items-center justify-center gap-3 rounded-r-2xl">
          <FaClipboardList className="text-xl text-white" />
          <span className="text-white font-normal">Inclusions</span>
        </div>

        <div className="px-1 space-y-1.5">
          {/*  Luxury Accomodations */}
          <div className="rounded-2xl bg-[#FAF4E4] px-4 py-8 space-y-3">
            <h1 className="flex items-center gap-2">
              <FaBed className="text-xl" />
              <span className="text-lg">Luxury Accomodations</span>
            </h1>
            <ul className="pl-8 list-disc">
              {items[2][0].map((list, index) => {
                return (
                  <li className="font-light text-sm" key={index}>
                    {list}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Transportation */}
          <div className="rounded-2xl bg-[#FAF4E4] px-4 py-8 space-y-3">
            <h1 className="flex items-center gap-2">
              <FaCar className="text-xl" />
              <span className="text-lg">Transportation</span>
            </h1>
            <ul className="pl-8 list-disc">
              {items[2][1].map((list, index) => {
                return (
                  <li className="font-light text-sm" key={index}>
                    {list}
                  </li>
                );
              })}
            </ul>
          </div>

          {/*  Activities */}
          <div className="rounded-2xl bg-[#FAF4E4] px-4 py-8 space-y-3">
            <h1 className="flex items-center gap-2">
              <FaMotorcycle className="text-xl" />{" "}
              <span className="text-lg">Activities</span>
            </h1>
            <ul className="pl-8 list-disc">
              {items[2][2].map((list, index) => {
                return (
                  <li className="font-light text-sm" key={index}>
                    {list}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Meals */}
          <div className="rounded-2xl bg-[#FAF4E4] px-4 py-8 space-y-3">
            <h1 className="flex items-center gap-2">
              <FaUtensils className="text-xl" />{" "}
              <span className="text-lg">Meals</span>
            </h1>
            <ul className="pl-8 list-disc">
              {items[2][3].map((list, index) => {
                return (
                  <li className="font-light text-sm" key={index}>
                    {list}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Add On Activities */}
          <div className="rounded-2xl bg-[#FAF4E4] px-4 pt-8 space-y-3">
            <h1 className="flex items-center gap-2">
              <FaPlus className="text-xl" />{" "}
              <span className="text-lg">Add On Activities</span>
            </h1>

            {items[2][4].map((list, index) => {
              return (
                <div key={index} className="space-y-6 pb-4">
                  <h1>{list[0].Head}</h1>
                  <ul className="pl-8 list-disc">
                    {list[1].map((tur, index) => {
                      return (
                        <li className="font-light text-sm" key={index}>
                          {tur}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ToursCountent;
