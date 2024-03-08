import ToursForm from "@/components/PrivateTours/Form/ToursForm";
import ToursCountent from "@/components/PrivateTours/Content/ToursCountent";
import { getDataReviews, getDataContent, getDataPrice } from "@/lib/getdata";
import CarouselMenu from "@/components/Carousel/Carousel";
import ToursCarousel from "@/components/PrivateTours/Carousel/Carousel";
import OurPrivateTours from "@/components/Home/OurPrivateTours";

const PrivateToursPage = async ({ params }) => {
  const DataReviews = await getDataReviews(params.slug);
  const DataContent = await getDataContent(params.slug);
  const DataPrice = await getDataPrice(params.slug);

  return (
    <section className="space-y-20">
      <ToursCarousel items={DataContent} />
      <div className="container grid grid-cols-1 md:grid-cols-3 place-items-start place-content-center  w-full h-full">
        <ToursCountent items={DataContent} />

        <ToursForm items={DataPrice} />
      </div>
      <CarouselMenu items={DataReviews} />
      <OurPrivateTours />
      <br />
      <br />
    </section>
  );
};
export default PrivateToursPage;
