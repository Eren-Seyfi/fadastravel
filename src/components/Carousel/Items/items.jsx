import Image from "next/image";

const CarouselItem = ({ props }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-10">
        <Image src={props.src} width={150} height={150} />
        <p className="md:w-[50vw] px-4 text-lg font-medium text-white">
          {props.content}
        </p>
        <h3 className="text-2xl text-white font-semibold">{props.history}</h3>
      </div>
    </>
  );
};
export default CarouselItem;
