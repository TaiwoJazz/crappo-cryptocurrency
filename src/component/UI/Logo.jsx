import React from 'react';
import brandLogo from '../../assets/Logo.svg';

function Logo() {
  return (
    <div className='flex items-center space-x-4 text-white text-lg font-semibold'>
      <a href='/'>
        <img src={brandLogo} alt='' />
      </a>
      <a href='/'>CRAPPO</a>
    </div>
  );
}

export default Logo;
