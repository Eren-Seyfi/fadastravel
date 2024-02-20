/* Takım Kartı */
import Image from "next/image";
const TeamCard = () => {
  return (
    <section className="flex flex-col justify-center items-center h-full w-96 gap-4">
      <Image
        src={props.src}
        width={400}
        height={400}
        className="rounded-3xl h-72"
        alt=""
      />

      <h1 className="font-bold text-lg text-red-500 text-center">
        {props.head}
      </h1>

      <span className="text-slate-600">{props.content}</span>
    </section>
  );
};
export default TeamCard;
