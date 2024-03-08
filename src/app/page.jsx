"use client";
import HorizontalCard from "@/components/Card/HorizontalCard";
import TransitionEffectPicture from "@/components/Home/TransitionEffectPicture";
import ExploreTurkeyWithUs from "@/components/ExploreTurkeyWithUs/ExploreTurkeyWithUs";
import SubscribeToOurNewsletter from "@/components/SubscribeToOurNewsletter/SubscribeToOurNewsletter";
import Gallery from "@/components/Home/Gallery";
import WhyAreWeDifferent from "@/components/Home/WhyAreWeDifferent";
import OurPrivateTours from "@/components/Home/OurPrivateTours";
import CarouselMenü from "@/components/Carousel/Carousel";
import OurFoundersCard from "@/components/Home/OurFoundersCard";

const WeDesignTurkishMemories = {
  head: "We design Turkish memories",
  content:
    "At Fadas Travel, our values are simple: we create the most comfortable and immersive experiences of Turkey possible. While doing so, we connect width our guests and make sure that no one leaves unhappy. Remember, we are not a corporate company; we are locals of the region and can find the best solutions for anything you need during your trip.",
  src: "/WeDesignTurkishMemories.webp",
  position: "flex-row-reverse", // left (flex-row-reverse) rigCarouselMenüPropsht (flex-row)
};

const Home = () => {
  return (
    <div className="space-y-10">
      <TransitionEffectPicture />
      <HorizontalCard props={WeDesignTurkishMemories} />
      <h1
        className="text-center font-bold text-3xl md:text-5xl pt-8"
        data-aos="fade-right"
      >
        Our Private Tours
      </h1>
      <OurPrivateTours />

      <OurFoundersCard />
      <a href="whoweare" className="text-red-500"></a>
      <WhyAreWeDifferent />
      <CarouselMenü />

      <ExploreTurkeyWithUs />
      <SubscribeToOurNewsletter />
      <Gallery />
    </div>
  );
};
export default Home;
