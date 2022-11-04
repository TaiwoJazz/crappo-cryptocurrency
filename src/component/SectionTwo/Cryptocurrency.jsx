import React, { useState } from 'react';
import arrow from '../../assets/arrow.svg';
import itemsArray from './ItemArray';

const Cryptocurrency = () => {
  const [items, setItems] = useState({
    activeItems: itemsArray[0],
    itemsArray
  });

  const handleToggle = index => {
    setItems({ ...items, activeItems: items.itemsArray[index] });
  };

  const toggleActiveClass = index => {
    if (items.itemsArray[index] === items.activeItems) {
      return 'py-12 px-6 w-fit border text-center rounded-2xl bg-brandSecondaryColor text-white transition-all duration-100 ease-in-out';
    } else {
      return 'py-12 px-6 w-fit border text-center rounded-2xl transition-all duration-100 ease-in-out';
    }
  };

  const toggleActiveSubtitle = index => {
    if (items.itemsArray[index] === items.activeItems) {
      return 'text-sm text-white/70 md:mt-2 font-medium';
    } else {
      return 'text-sm text-naturalGrey md:mt-2 font-medium';
    }
  };

  const toggleActiveParagraph = index => {
    if (items.itemsArray[index] === items.activeItems) {
      return 'max-w-[318px] text-md text-white';
    } else {
      return 'max-w-[322px] text-md text-naturalGrey-4';
    }
  };

  const toggleActiveDiv = index => {
    if (items.itemsArray[index] === items.activeItems) {
      return (
        <div className='bg-brandAcent rounded-full mt-6 mx-auto w-fit flex items-center justify-center py-4 px-5 m-2'>
          Start mining
          <img
            className='w-6 h-6 bg-white p-2 ml-4 rounded-full inline-block'
            src={arrow}
            alt={arrow}
          />
        </div>
      );
    } else {
      return (
        <div className='border-2 rounded-full mt-6 mx-auto w-16 h-16 flex items-center justify-center'>
          <img className='h-5 w-3' src={arrow} alt={arrow} />
        </div>
      );
    }
  };

  return (
    <section className='mb-24 text-center md:w-[40rem] lg:w-[60rem] xl:w-[75rem] 2xl:w-[95rem] mx-auto px-6 lg:px-0'>
      <h2 className='text-3xl font-bold max-w-3xl mx-auto mb-16 xl:leading-relaxed'>
        Trade securely and market the high growth cryptocurrencies.
      </h2>
      <div className='flex flex-col lg:flex-row items-center justify-center gap-12 cursor-pointer'>
        {items.itemsArray.map((item, index) => (
          <div
            id={item.subtitle}
            key={index}
            onClick={() => handleToggle(index)}
            className={toggleActiveClass(index)}
          >
            <img className='mx-auto' src={item.icon} alt={item.subtitle} />
            <span className='flex gap-2 mt-12 justify-center'>
              <h3 className='font-bold text-2xl mb-[17px]'>{item.title}</h3>
              <span className={toggleActiveSubtitle(index)}>
                {item.subtitle}
              </span>
            </span>
            <p className={toggleActiveParagraph(index)}>{item.description}</p>
            {toggleActiveDiv(index)}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cryptocurrency;
