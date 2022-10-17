import React from 'react';

const BottomSection = () => {
  return (
    <div className='px-4 mx-auto sm:px-10 lg:px-0 lg:w-[60rem] xl:w-[75rem] 2xl:w-[95rem]'>
      <div className='text-left mx-auto w-full md:w-[36.34rem] lg:w-[52.23rem] xl:w-[60.35rem] p-10 rounded-br-2xl rounded-bl-2xl shadow-lg mb-24'>
        <h3 className='text-brandAcent text-md font-semibold'>
          ESTIMATED 24 HOUR REVENUE:
        </h3>
        <h2 className='font-bold text-2xl mt-5 mb-2'>
          0.055 130 59 ETH <span className='text-brandAcent'>($1275)</span>
        </h2>
        <p className='mb-4 text-md text-naturalGrey'>
          Revenue will change based on mining difficulty and Ethereum price.
        </p>
      </div>
    </div>
  );
};

export default BottomSection;
