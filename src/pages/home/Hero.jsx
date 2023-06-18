const Hero = () => {
  return (
    <section className="wrapper bg-primary pt-[130px] lg:pt-[170px] pb-10 lg:pb-[70px]">
      <div className="w-[90%] max-w-[1000px] flex justify-start items-start flex-col gap-10">
        <div className="w-full lg:flex-row flex-col flex justify-between items-center gap-10">
          <div className="flex justify-start items-start flex-col gap-5 text-center lg:text-left lg:gap-28">
            <div>
              <h3 className="font-oswald italic font-medium text-white text-[60px] sm:text-[72px]">
                SAKE 酒{" "}
              </h3>
              <p className="text-white mt-1 text-xl">
                Sake is undrinkable for bots <br /> 飲みにくい{" "}
              </p>
            </div>
            <div className="flex justify-center lg:justify-start items-center gap-5">
              <a
                href="https://twitter.com/Sake_ERC_"
                target="blank"
                className="bg-white hover:opacity-70 transition-all duration-300 text-[rgb(16,19,23)] text-base w-[106px] h-[45px] grid place-items-center"
              >
                Twitter
              </a>
              <a
                href="#"
                target="blank"
                className="bg-transparent hover:bg-white text-white transition-all duration-300 hover:text-[rgb(16,19,23)] text-base w-[106px] h-[45px] grid place-items-center border border-solid border-white"
              >
                Dextools
              </a>
            </div>
          </div>
          <div className="relative isolate">
            <img
              src="/hero.webp"
              className="w-full max-w-[460px] object-contain"
              alt=""
            />
            <div className="bg-white sm:block hidden w-full h-full absolute -z-10 -right-2 sm:-right-6 top-2 sm:top-6"></div>
          </div>
        </div>
        <div className="flex mt-0 sm:mt-10 lg:mt-16 justify-start items-center flex-col gap-2 w-full text-center">
          <h3 className="font-medium font-oswald text-[26px] sm:text-[40px] text-white">
            BUYING - SELLING TAXES 0 / 0
          </h3>
          <p className="text-white">
            Single buy allowed in a block only & no contracts. NFT releases &
            marketplace Q3-Q4 <br /> 月に行こう
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
