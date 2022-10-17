import React, { useState } from 'react';

import NavLogo from './NavLogo';
import MenuItems from './MenuItems';
import Anchor from '../UI/Anchor';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Divider from '../../assets/Divider.svg';

const NavBar = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(prevActive => !prevActive);
  };

  return (
    <div className='bg-brandPrimaryColor fixed left-0 right-0 z-10'>
      <div className='flex justify-between px-6 py-5 md:px-10 lg:px-0 text-center md:w-full lg:w-[60rem] xl:w-[75rem] 2xl:w-[95rem] mx-auto font-rubik'>
        <NavLogo />
        <div className='lg:hidden cursor-pointer'>
          <MenuOutlinedIcon
            onClick={showMenu}
            sx={{ fontSize: 40 }}
            color='primary'
          />
        </div>
        <div className='hidden lg:flex items-center text-base text-white'>
          <ul className='flex flex-col md:flex-row md:space-x-5 space-x-8 xl:space-x-8 2xl:space-x-10 font-extralight'>
            {[
              ['Product', 'link'],
              ['Feature', 'link'],
              ['About', 'link'],
              ['Contact', 'link']
            ].map(([title, url]) => (
              <li key={title}>
                <a className='text-sm' href={url}>{title}</a>
              </li>
            ))}
          </ul>
          <a className='md:pl-6 pl-14 xl:pl-14 text-sm font-medium' href='https://#'>
            Login
          </a>
          <img className='md:p-4 px-6 xl:px-4 2xl:px-7' src={Divider} alt='' />
          <Anchor
            href='https://#'
            extraClass='md:px-4 px-8 xl:px-8 md:py-2.5 py-3.5 xl:py-3.5 text-sm'
          >
            Register
          </Anchor>
        </div>
        <MenuItems showMenu={showMenu} active={active} />
      </div>
    </div>
  );
}

export default NavBar;
