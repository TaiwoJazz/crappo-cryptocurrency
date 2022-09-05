import React from "react";
import illustration from "../../img/Illustrations.svg";

function WhyCrappoContent() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center 2xl:justify-center space-y-16 lg:space-x-10 xl:space-x-16">
      <img src={illustration} alt="" />
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left" data-aos="fade-left">
        <strong className=" text-white sm:text-3xl md:text-4xl text-4xl xl:text-4xl 2xl:text-4xl font-extrabold leading-relaxed md:leading-relaxed xl:leading-relaxed">
          Why you should choose CRAPPO
        </strong>
        <p className="text-textLight font-extralight text-base 2xl:text-xl leading-relaxed 2xl:leading-relaxed mt-6 mb-8 max-w-2xl xl:max-w-sm 2xl:max-w-lg">
          Experience the next generation cryptocurrency platform. No financial
          borders, extra fees, and fake reviews.
        </p>
        <a
          className="text-white px-6 py-4 bg-brandAcent rounded-[32px] font-medium w-[8.2rem]"
          href="https://#"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}

export default WhyCrappoContent;
