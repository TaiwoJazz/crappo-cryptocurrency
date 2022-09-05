import React from "react";
import illustration from "../img/Illustration.svg";
import arrow from '../img/Vector.svg';
import design1 from '../img/design1.svg';
// import design2 from '../img/design2.svg';

function Hero() {
  return (
    <div className="flex flex-col lg:flex-row items-center 2xl:justify-center lg:align-baseline text-center lg:text-left bg-brandPrimaryColor px-6 lg:pb-20 lg:px-[80px] xl:px-[120px] font-rubik pt-32 md:pt-60 2xl:gap-12 realtive">
      <div className="flex flex-col items-center lg:items-start md:-mt-24">
        <div className="text-white bg-lightBrandPrimaryColor sm:text-[.7rem] md:text-[1rem] text-xs p-1 md:pr-6 pr-4 rounded-full font-extralight max-w-[18.5rem] md:max-w-fit lg:max-w-fit">
          <span className="bg-white sm:px-2 md:px-4 px-4 py-1 mr-4 text-brandPrimaryColor sm:text-[.8rem] text-sm rounded-full font-bold ml-0">
            75% SAVE
          </span>
          For the Black Friday weekend
        </div>
        
        <h1 className="text-white font-bold md:max-w-xl 2xl:max-w-3xl sm:text-3xl md:text-5xl lg:text-4xl text-4xl xl:text-[4rem] text-light leading-tight xl:leading-tight md:my-12 my-8">
          Fastest & secure platform to invest in crypto
        </h1>
        
        <p className="text-textLight font-normal md:text-base 2xl:text-xl leading-loose 2xl:leading-relaxed md:w-[26rem] 2xl:w-[32rem]">
          Buy and sell cryptocurrencies, trusted by 10M wallets with over $30
          billion in transactions.
        </p>
        
        <a className="text-white sm:pl-2 pl-6 lg:pl-6 py-4 bg-brandAcent rounded-[32px] font-medium md:mt-14 mt-8 2xl:mb-32 w-44" href="https://#">Try for FREE <img className="w-6 h-6 bg-white p-2 ml-4 rounded-full inline-block" src={arrow} alt="" /></a>
      </div>
      
      <img className="md:mt-16 mt-12 lg:-mt-24 xl:mb-24 2xl:w-[45rem] 2xl:-mt-32" src={illustration} alt="" />
     
      <img className="absolute -bottom-10" src={design1} alt="" />
      {/* <img className="absolute top-80 -right-40 overscroll-x-none" src={design2} alt="" /> */}
    </div>
  );
}

export default Hero;