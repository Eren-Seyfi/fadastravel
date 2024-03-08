import { Typography } from "@material-tailwind/react";

const CarouselItem = ({ item }) => {
  const { img, content, footer } = item;

  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 grid h-full w-full place-items-center bg-[#04A9DE]">
        <div className="w-3/4 text-center space-y-10">
          <div className="flex flex-col items-center justify-center space-y-10">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Reviews
            </Typography>
            {img && <img src={img} alt="" className="w-36 h-36" />}
          </div>
          <Typography
            variant="h4"
            color="white"
            className="mb-12 opacity-80 font-medium font-poppins italic"
          >
            {content}
          </Typography>
          <Typography color="white" variant="h4" className="font-bold italic">
            {footer}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
