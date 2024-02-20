import ToursCard from "../Card/ToursCard";

const OurPrivateTours = () => {
  const OurPrivateToursProps = [
    {
      id: 1,
      head: "4 Days Cappadocia",
      link: "privatetours/4-days-cappadocia",
      src: "/4-days-Cappadocia.webp",
      width: "450",
      height: "350",
      price: "599",
    },
    {
      id: 2,
      head: "4 Days Istanbul",
      link: "privatetours/4-days-istanbul",
      src: "/4-days-Istanbul.webp",
      width: "450",
      height: "350",
      price: "499",
    },
    {
      id: 3,
      head: "7 DAYS CAPPADOCIA & ISTANBUL",
      link: "privatetours/7-days-cappadocia-istanbul",
      src: "/7-days-Cappadocia-Istanbul.webp",
      width: "450",
      height: "350",
      price: "999",
    },
    {
      id: 4,
      head: "11 DAYS TURKEY",
      link: "privatetours/11-days-turkey",
      src: "/11-days-Turkiye.webp",
      width: "450",
      height: "350",
      price: "1.699",
    },
  ];
  return (
    <section className="px-6 flex flex-wrap justify-center items-center gap-10">
      {OurPrivateToursProps.map((props, index) => {
        return <ToursCard props={props} key={index} />;
      })}
    </section>
  );
};
export default OurPrivateTours;
