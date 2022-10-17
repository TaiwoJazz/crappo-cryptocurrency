import React from 'react';

import Anchor from '../UI/Anchor';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '../../assets/Divider.svg';

function MenuItems({ showMenu, active }) {
  return (
    <div
      className={
        active
          ? 'lg:hidden flex flex-col items-center justify-center gap-16 fixed inset-0  sm:text-xl text-2xl text-center text-white'
          : 'hidden'
      }
    >
      <div className='flex flex-col gap-12 h-screen w-screen justify-center bg-brandPrimaryColor/70 backdrop-blur-3xl'>
        <CloseIcon
          onClick={showMenu}
          sx={{ fontSize: 40 }}
          className='absolute cursor-pointer top-10 right-7'
        />
        <ul className='flex flex-col gap-8'>
          {[
            ['Product', 'link'],
            ['Feature', 'link'],
            ['About', 'link'],
            ['Contact', 'link']
          ].map(([title, url]) => (
            <li key={title} onClick={showMenu}>
              <a href={url}>{title}</a>
            </li>
          ))}
        </ul>
        <div className='flex items-center justify-center'>
          <a className='font-medium' href='https://#'>
            Login
          </a>
          <img className='px-6' src={Divider} alt='' />
          <Anchor href='https://#' className='py-2.5 px-5'>
            Register
          </Anchor>
        </div>
      </div>
    </div>
  );
}

export default MenuItems;
