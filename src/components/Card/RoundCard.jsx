/* Yatay Yuvarlak Kart */

import Image from "next/image";
const RoundCard = () => {
  return (
    <>
      <section
        className={`${props.position} container flex justify-center items-center md:flex-nowrap flex-wrap gap-10 px-6`}
      >
        <div className="space-y-4">
          <h1 className="font-bold text-2xl md:text-3xl text-slate-700">
            {props.head}
          </h1>
          <p className="text-xl md:text-2xl text-slate-500">{props.content}</p>
        </div>
        <Image
          src={props.src}
          width={props.width}
          height={props.height}
          className=" rounded-3xl w-full h-full"
          alt=""
          priority={true}
        />
      </section>
    </>
  );
};
export default RoundCard;
