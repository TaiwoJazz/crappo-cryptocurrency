import React from 'react';

import Button from '../UI/Button';
import arrow from '../../assets/Vector.svg';

const Content = () => {
  return (
    <div className='flex flex-col items-center lg:items-start md:-mt-24'>
      <div className='text-white bg-lightBrandPrimaryColor sm:text-[.7rem] md:text-[1rem] text-xs p-1 md:pr-6 pr-4 rounded-full font-extralight max-w-[18.5rem] md:max-w-fit lg:max-w-fit'>
        <span className='bg-white sm:px-2 md:px-4 px-4 py-1 mr-4 text-brandPrimaryColor text-[.5rem] sm:text-[.8rem] rounded-full font-bold ml-0'>
          75% SAVE
        </span>
        <span className='text-[.5rem] sm:text-[.8rem] md:text-[.9rem]'>For the Black Friday weekend</span>
      </div>

      <h1 className='text-white font-bold md:max-w-xl 2xl:max-w-3xl text-5xl leading-tight xl:leading-tight md:my-12 my-8'>
        Fastest & secure platform to invest in crypto
        {/* text-2xl sm:text-3xl md:text-5xl lg:text-4xl xl: */}
      </h1>

      <p className='text-textLight font-normal text-md leading-loose 2xl:leading-relaxed md:w-[26rem] 2xl:w-[32rem]'>
        Buy and sell cryptocurrencies, trusted by 10M wallets with over $30
        billion in transactions.
      </p>
      <Button
        href='/'
        extraClass='sm:pl-2 pl-6 lg:pl-6 py-4 md:mt-14 mt-8 2xl:mb-32 w-44'
      >
        Try for FREE
        <img
          className='w-6 h-6 bg-white p-2 ml-4 rounded-full inline-block'
          src={arrow}
          alt=''
        />
      </Button>
    </div>
  );
};

export default Content;
