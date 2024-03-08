import ToursCard from "../Card/ToursCard";
import { getDataTours } from "@/lib/getdata";

const OurPrivateTours = async () => {
  const OurPrivateToursProps = await getDataTours();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center px-16 gap-4">
      {OurPrivateToursProps.map((props, index) => {
        return <ToursCard props={props} key={index} />;
      })}
    </section>
  );
};
export default OurPrivateTours;
