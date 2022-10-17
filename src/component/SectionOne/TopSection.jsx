import React from 'react';

const TopSection = () => {
  return (
    <div className='flex flex-col justify-between lg:flex-row items-center gap-10 bg-white mx-auto w-full md:w-[36.35rem] lg:w-fit p-10 rounded-tr-2xl rounded-tl-2xl'>
      <input
        type='number'
        placeholder='Enter your hash rate'
        className='w-full lg:w-96 border-b outline-none border-naturalGrey'
      />
      <select name='select' className='w-full xl:w-48 mx-10 border-b border-naturalGrey outline-none'>
        <option value='TH/s'>TH/s</option>
        <option value='H/s'>H/s</option>
        <option value='KH/s'>KH/s</option>
        <option value='MH/s'>MH/s</option>
        <option value='GH/s'>GH/s</option>
      </select>
      <button className='text-white py-4 px-10 bg-brandAcent rounded-[32px] font-medium'>
        Calculate
      </button>
    </div>
  );
};

export default TopSection;
