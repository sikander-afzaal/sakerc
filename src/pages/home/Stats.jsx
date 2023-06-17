const Stats = () => {
  return (
    <section className="bg-white py-[50px] wrapper">
      <div className="flex flex-wrap justify-around items-center gap-x-12 gap-y-8 w-[90%]">
        <div className="flex justify-start items-start flex-col gap-1">
          <h4 className="text-[rgb(16,19,23)] font-medium text-[60px] sm:text-[72px] font-oswald ">
            0%
          </h4>
          <p className="text-[rgb(16,19,23)] text-base sm:text-xl font-normal">
            CEX
          </p>
        </div>
        <div className="flex justify-start items-start flex-col gap-1">
          <h4 className="text-[rgb(16,19,23)] font-medium text-[60px] sm:text-[72px] font-oswald ">
            0%
          </h4>
          <p className="text-[rgb(16,19,23)] text-base sm:text-xl font-normal">
            Marketing
          </p>
        </div>
        <div className="flex justify-start items-start flex-col gap-1">
          <h4 className="text-[rgb(16,19,23)] font-medium text-[60px] sm:text-[72px] font-oswald ">
            0%
          </h4>
          <p className="text-[rgb(16,19,23)] text-base sm:text-xl font-normal">
            Liquidity Provider
          </p>
        </div>
        <div className="flex justify-start items-start flex-col gap-1">
          <h4 className="text-[rgb(16,19,23)] font-medium text-[60px] sm:text-[72px] font-oswald ">
            0%
          </h4>
          <p className="text-[rgb(16,19,23)] text-base sm:text-xl font-normal">
            Dev Fee
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
