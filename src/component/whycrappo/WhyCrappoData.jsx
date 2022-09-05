import React from "react";
import icon1 from "../../img/Icon.svg";
import icon2 from "../../img/Icon-1.svg";
import icon3 from "../../img/Icon-2.svg";

function WhyCrappoData() {
  return (
    <div className="flex flex-col lg:flex-row self-center lg:self-auto lg:items-center space-y-14 md:space-y-20 lg:space-y-0 lg:gap-6 xl:gap-0 justify-between">
      <div className="flex items-center">
        <img src={icon1} alt="" />
        <div className="ml-6">
          <strong className="block text-white sm:text-3xl text-4xl 2xl:text-5xl font-extrabold pb-2">
            $30B
          </strong>
          <span className="text-textLight font-light text-base 2xl:text-xl">
            Digital Currency Exchanged
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <img src={icon2} alt="" />
        <div className="ml-6">
          <strong className="block text-white sm:text-3xl text-4xl 2xl:text-5xl font-extrabold pb-2">
            10M+
          </strong>
          <span className="text-textLight font-light text-base 2xl:text-xl">
            Trusted Wallets Investor
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <img src={icon3} alt="" />
        <div className="ml-6">
          <strong className="block text-white sm:text-3xl text-4xl 2xl:text-5xl font-extrabold pb-2">
            195
          </strong>
          <p className="text-textLight font-light text-base 2xl:text-xl md:mr-16 lg:mr-8 xl:mr-16">
            Countries Supported
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhyCrappoData;
