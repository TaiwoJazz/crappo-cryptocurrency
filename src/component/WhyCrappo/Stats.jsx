import React from 'react';
import icon1 from '../../assets/Icon.svg';
import icon2 from '../../assets/Icon-1.svg';
import icon3 from '../../assets/Icon-2.svg';

function WhyCrappoData() {
  return (
    <div className='flex flex-col lg:flex-row self-center lg:self-auto lg:items-center space-y-14 md:space-y-20 lg:space-y-0 lg:gap-6 xl:gap-0 justify-between'>
      {[
        ['Digital Currency Exchanged', '$30B', icon1],
        ['Trusted Wallets Investor', '10M+', icon2],
        ['Countries Supported', '195', icon3]
      ].map(([title, num, icon]) => (
        <div key={num} className='flex items-center'>
          <img src={icon} alt='' />
          <div className='ml-6'>
            <strong className='block text-white text-3xl font-extrabold pb-2'>
              {num}
            </strong>
            <span className='text-textLight font-light text-md'>
              {title}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WhyCrappoData;
