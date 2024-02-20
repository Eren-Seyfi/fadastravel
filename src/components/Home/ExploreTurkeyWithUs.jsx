import Link from "next/link";
const ExploreTurkeyWithUs = () => {
  return (
    <section className="w-full h-[40vh] bg-[#F9F3EE] flex flex-col justify-center items-center gap-10">
      <h1 className="font-bold text-5xl text-center">Explore Turkey with us</h1>
      <Link
        href="/privatetours"
        className="bg-rose-400 hover:bg-slate-400 transition text-white rounded-full py-4 px-6 font-bold"
      >
        View Tours
      </Link>
    </section>
  );
};
export default ExploreTurkeyWithUs;
