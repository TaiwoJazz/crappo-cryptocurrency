import React from 'react';
import Content from './Content';
import illustration from '../../assets/Illustration.svg';
import backgroundDesign from '../../assets/design1.svg';


const Hero = () => {
  return (
    <div className='bg-brandPrimaryColor'>
      <div className='flex flex-col lg:flex-row items-center 2xl:justify-center lg:align-baseline text-center lg:text-left px-6 lg:pb-20 font-rubik pt-32 md:pt-60 2xl:gap-12 realtive md:w-[40rem] lg:w-[60rem] xl:w-[75rem] 2xl:w-[95rem] mx-auto'>
        <Content />
        <img
          className='md:mt-16 mt-12 lg:-mt-24 md:w-[28rem] lg:w-[32rem] xl:mb-24 2xl:w-[45rem] 2xl:-mt-32'
          src={illustration}
          alt=''
        />
        <img className='absolute -bottom-10' src={backgroundDesign} alt='' />
      </div>
    </div>
  );
}

export default Hero;
