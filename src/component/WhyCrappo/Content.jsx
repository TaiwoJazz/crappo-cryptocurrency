import React from 'react';

import Anchor from '../UI/Anchor';
import illustration from '../../assets/Illustrations.svg';

function WhyCrappoContent() {
  return (
    <div className='flex flex-col-reverse lg:flex-row items-center 2xl:justify-center space-y-16 lg:space-x-10 xl:space-x-16'>
      <img src={illustration} alt='' />
      <div
        className='flex flex-col items-center lg:items-start text-center lg:text-left'
        data-aos='fade-left'
      >
        <strong className=' text-white text-3xl font-extrabold xl:leading-normal xl:w-[29rem]'>
          Why you should choose CRAPPO
        </strong>
        <p className='text-textLight font-extralight text-md leading-relaxed 2xl:leading-relaxed mt-6 mb-8 max-w-2xl xl:max-w-sm 2xl:max-w-lg'>
          Experience the next generation cryptocurrency platform. No financial
          borders, extra fees, and fake reviews.
        </p>
        <Anchor href='https://facebook.com' extraClass='px-6 w-fit'>
          Learn More
        </Anchor>
      </div>
    </div>
  );
}

export default WhyCrappoContent;
