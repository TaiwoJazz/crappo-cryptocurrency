import React from 'react';
import Heading from './Heading';
import TopSection from './TopSection';
import BottomSection from './BottomSection';

const Earn = () => {
  return (
    <React.Fragment>
      <div className='bg-brandPrimaryColor pt-20'>
        <div className='text-center mx-auto px-4 sm:px-10 lg:px-0'>
          <Heading />
          <TopSection />
        </div>
      </div>
      <BottomSection />
    </React.Fragment>
  );
};

export default Earn;
