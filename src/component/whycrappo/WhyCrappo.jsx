import React from 'react';
import Stats from './Stats';
import Content from './Content';

function WhyCrappo() {
  return (
    <div className='bg-brandPrimaryColor'>
      <div className='flex flex-col space-y-4 md:space-y-16  px-6 md:w-[40rem] lg:w-[60rem] xl:w-[75rem] 2xl:w-[95rem] mx-auto pt-16 pb-24'>
        <Stats />
        <Content />
      </div>
    </div>
  );
}

export default WhyCrappo;
