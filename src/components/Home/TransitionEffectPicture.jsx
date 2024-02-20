import Image from "next/image";

const TransitionEffectPicture = () => {
  const imageList = [
    "We-design-experiences-that-create-lifelong-memories.webp",
    "Home-2-scaled.webp",
    "",
  ];
  return (
    <>
      <Image
        src="/1920x1080.webp"
        width={1920}
        height={1080}
        alt=""
        priority={true}
        className=" w-full h-full"
      />
    </>
  );
};
export default TransitionEffectPicture;
