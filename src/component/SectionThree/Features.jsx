import React from 'react';
import InvestSmart from './InvestSmart';
import DetailedStatistics from './DetailedStatistics';

import Circle from '../../assets/circle.svg';
import Circle2 from '../../assets/circle2.svg';
import GrowProfit from './GrowProfit';

const Features = () => {
  return (
    <section className='py-28 px-8 bg-brandSecondaryColor relative'>
      <h2 className='text-2xl text-white text-center font-bold max-w-[40rem] mx-auto mb-6 lg:mb-20 lg:leading-relaxed'>
        Market sentiments, portfolio, and run the infrastructure of your choice
      </h2>
      <InvestSmart />
      <DetailedStatistics />
      <GrowProfit />
      <img
        src={Circle}
        alt=''
        className='absolute top-0 left-0 lg:left-25 z-50'
      />
      <img
        src={Circle2}
        alt=''
        className='absolute bottom-0 right-0 lg:left-25 z-50'
      />
    </section>
  );
};

export default Features;
