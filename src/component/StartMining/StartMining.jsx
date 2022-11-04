import React from 'react';
import Vector1 from '../../assets/Vector1.svg';
import Vector2 from '../../assets/Vector2.svg';
import Vector3 from '../../assets/Vector3.svg';
import Vector4 from '../../assets/Vector4.svg';

const StartMining = () => {
  return (
    <div className='py-20 bg-gradient-to-b from-[#2B076E] to-[#0D0D2B] px-8 relative overflow-hidden'>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-32 bg-brandAcent mx-auto lg:max-w-fit py-12 px-10 rounded-2xl text-textLight relative'>
        <div className='w-fit text-center lg:text-left'>
          <h2 className='text-xl font-bold mb-6'>Start mining now</h2>
          <p className='max-w-[23rem]'>
            Join now with CRAPPO to get the latest news and start mining now
          </p>
        </div>
        <div className='flex flex-col lg:flex-row items-center gap-8'>
          <input
            type='email'
            name='email'
            placeholder='Enter your email'
            className='w-80 border-b border-gray-400 pb-2 outline-none bg-transparent placeholder:text-textLight font-light'
          />
          <button className='text-dark bg-white py-3.5 px-8 rounded-[32px] font-medium border hover:text-white hover:bg-dark hover:border-none transition-all ease-in-out duration-300'>
            Subscribe
          </button>
        </div>
        <img src={Vector1} alt='Vector' className='absolute top-0 left-5' />
        <img src={Vector2} alt='Vector' className='absolute bottom-0 right-5' />
      </div>
      <img src={Vector3} alt='Vector' className='absolute bottom-0 right-52' />
      <img src={Vector4} alt='Vector' className='absolute bottom-0 left-20' />
    </div>
  );
};

export default StartMining;
