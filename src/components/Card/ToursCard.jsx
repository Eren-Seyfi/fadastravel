/* Tur Kartı */

import Link from "next/link";
import Image from "next/image";
const ToursCard = ({ props }) => {
  return (
    <section
      className=" lg:w-1/5 md:w-1/3 w-full border-2 rounded-t-xl 
    hover:shadow-2xl hover:scale-105 transition hover:bg-black/15"
    >
      <Link href={props.link}>
        <Image
          src={props.src}
          width={props.width}
          height={props.height}
          className="w-full h-full rounded-t-lg "
          alt={props.head}
          priority={true}
        />
        <div className="p-4">
          <span className=" font-medium text-slate-500">Private Tour</span>
          <h1 className=" font-semibold text-xl">{props.head}</h1>
          <div className="text-end space-x-1 mt-8">
            <span className="text-slate-500 text-base">from</span>
            <span className="font-semibold text-xl">EUR {props.price}</span>
          </div>
        </div>
      </Link>
    </section>
  );
};
export default ToursCard;
