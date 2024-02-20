import HorizontalCard from "@/components/Card/HorizontalCard";

import TransitionEffectPicture from "@/components/Home/TransitionEffectPicture";
import ExploreTurkeyWithUs from "@/components/Home/ExploreTurkeyWithUs";
import SubscribeToOurNewsletter from "@/components/Home/SubscribeToOurNewsletter";
import Gallery from "@/components/Home/Gallery";
import WhyAreWeDifferent from "@/components/Home/WhyAreWeDifferent";
import OurPrivateTours from "@/components/Home/OurPrivateTours";

const WeDesignTurkishMemories = {
  head: "We design Turkish memories",
  content:
    "At Fadas Travel, our values are simple: we create the most comfortable and immersive experiences of Turkey possible. While doing so, we connect width our guests and make sure that no one leaves unhappy. Remember, we are not a corporate company; we are locals of the region and can find the best solutions for anything you need during your trip.",
  src: "/We-design-experiences-that-create-lifelong-memories.webp",
  width: 350,
  height: 418,
  position: "flex-row", // left (flex-row-reverse) right (flex-row)
};

const OurFounders = {
  head: "Our Founders",
  content:
    "Fadas Travel was founded by Makbule and Seckin, a couple who have lived all over the world and worked in industries outside of tourism. After restoring their hotel in Cappadocia and starting Fadas Travel, they fell in love with the work. Today, they are living in Turkey and are dedicated to showing people how special their homeland is. Meet our team…",
  src: "/tourist.webp",
  width: 350,
  height: 418,
  position: "flex-row-reverse", // left (flex-row-reverse) right (flex-row)
};

const Home = () => {
  return (
    <div className="space-y-10">
      <TransitionEffectPicture />
      <HorizontalCard props={WeDesignTurkishMemories} />
      <OurPrivateTours />
      <HorizontalCard props={OurFounders} />
      <WhyAreWeDifferent />
      <ExploreTurkeyWithUs />
      <SubscribeToOurNewsletter />
      <Gallery />
    </div>
  );
};
export default Home;
