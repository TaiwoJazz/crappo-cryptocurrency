import React from 'react';
import Logo from '../UI/Logo';
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import linkedin from '../../assets/linkedin.svg';
import twitter from '../../assets/twitter.svg';
import youtube from '../../assets/youtube.svg';
import visa from '../../assets/Visa.svg';
import mastercard from '../../assets/Mastercard.svg';
import bitcoin from '../../assets/BitcoinFooter.svg';

const Footer = () => {
  return (
    <div className='py-24 px-8 xl:px-24 bg-dark text-white'>
      <div className='flex flex-col gap-24 max-w-[90rem] mx-auto'>
        <div className='flex flex-col lg:flex-row items-center lg:items-start gap-12 justify-between'>
          <Logo />
          <div className='text-center lg:text-left'>
            <h3 className='text-[20px] font-medium mb-4 lg:mb-8'>Quick Link</h3>
            <span className='flex flex-col gap-4 font-light text-xs cursor-pointer'>
              <p>Home</p>
              <p>Products</p>
              <p>About</p>
              <p>Features</p>
              <p>Contact</p>
            </span>
          </div>
          <div className='text-center lg:text-left'>
            <h3 className='text-[20px] font-medium mb-4 lg:mb-8'>Resources</h3>
            <span className='flex flex-col gap-4 font-light text-xs cursor-pointer'>
              <p>Download Whitepaper</p>
              <p>Smart Token</p>
              <p>Blockchain Explorer</p>
              <p>Crypto API</p>
              <p>Interest</p>
            </span>
          </div>
          <div className='text-center lg:text-left'>
            <h2 className='text-xl max-w-sm font-medium leading-relaxed mb-12'>
              We accept following payment systems
            </h2>
            <div className='flex justify-center lg:justify-start flex-wrap gap-6 cursor-pointer'>
              <img src={visa} alt='visa' />
              <img src={mastercard} alt='mastercard' />
              <img src={bitcoin} alt='bitcoin' />
            </div>
          </div>
        </div>
        <div className='flex flex-col-reverse lg:flex-row items-center gap-10 justify-between cursor-pointer'>
          <p>©2021 CRAPPO. All rights reserved</p>
          <div className='flex gap-10 flex-wrap'>
            <img src={facebook} alt='facebook' />
            <img src={instagram} alt='instagram' />
            <img src={youtube} alt='youtube' />
            <img src={twitter} alt='twitter' />
            <img src={linkedin} alt='linkedin' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
