import RoundCard from "@/components/Card/RoundCard";

const WhoWeArePage = () => {
  const RoundCardProps = [];
  return (
    <div className="">
      <section className="bg-[url('/WhoWeArePageBg.webp')] w-full h-full">
        <h1 className="text-center py-10 text-3xl font-medium">
          Helping people see Turkey in the most beautiful way possible
        </h1>
        <div className="container">
          <div className="flex flex-col items-center justify-center w-full h-full gap-10">
            {RoundCardProps.map((props, index) => {
              return <RoundCard props={props} key={index} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
export default WhoWeArePage;
