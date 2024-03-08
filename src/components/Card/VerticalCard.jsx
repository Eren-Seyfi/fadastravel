/* Dikey Kart */
/* {
  id: 3,
  head: "Presence",
  content:
    "Our Regional Experts will be available 24/7 during your stay to ensure all your needs are met. Also, when you are in the Cappadocia region, our owners will meet you personally and make sure everything is going well.",
  src: "/presence-1.webp",
} */
const VerticalCard = ({ props }) => {
  return (
    <section className="flex flex-col justify-center items-center h-full w-96 gap-4">
      <img
        src={props.src}
        width={400}
        height={400}
        className="rounded-3xl h-72"
        alt=""
      />
      <span className=" rounded-full bg-blue-500/95 px-7 py-1 text-center">
        <h1 className="font-bold text-base text-white">{props.head}</h1>
      </span>
      <span className="text-slate-600 text-justify">{props.content}</span>
    </section>
  );
};
export default VerticalCard;
