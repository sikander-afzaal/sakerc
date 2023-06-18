const Tokenomics = () => {
  return (
    <section className="wrapper sm:bg-tokenomics sm:py-[80px] bg-cover bg-center bg-no-repeat">
      <div className="w-full  sm:w-[90%] bg-[rgb(16,19,23)] py-[50px] sm:py-[150px] px-5 sm:px-0 flex justify-start items-start sm:items-center flex-col gap-[80px] sm:gap-[130px]">
        <h4 className="font-oswald text-white uppercase font-normal text-[40px]">
          Tokenomics
        </h4>
        <div className="flex justify-start items-start sm:items-center flex-col text-left sm:text-center gap-1">
          <p className="text-white text-base font-bold">
            10 000 000 000 Total Supply
          </p>
          <p className="text-base text-white">
            0 / 0 Tax Beginning To End 幸運を
          </p>
          <p className="text-base text-white">
            Liquidity Locked - Contract Renounced
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
