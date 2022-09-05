import React, { useState } from "react";
import NavLogo from "./NavLogo";
import MenuItems from "./MenuItems";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Divider from "../../img/Divider.svg";

function NavBar() {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="flex w-full fixed justify-between py-6 px-6 md:py-6 lg:py-4 lg:px-[80px] xl:px-[120px] 2xl:px-[180px] font-rubik top-0 z-10 bg-brandPrimaryColor/100 ">
      <NavLogo />
      <div className="md:hidden cursor-pointer"> 
        <MenuOutlinedIcon
          onClick={showMenu}
          sx={{ fontSize: 40 }}
          color="primary"
        />
      </div>
      <div className="hidden md:flex items-center text-base text-white">
        <ul className="flex flex-col md:flex-row md:space-x-5 space-x-8 xl:space-x-8 2xl:space-x-10 font-extralight">
          <li>
            <a href="https://#">Product</a>
          </li>
          <li>
            <a href="https://#">Feature</a>
          </li>
          <li>
            <a href="https://#">About</a>
          </li>
          <li>
            <a href="https://#">Contact</a>
          </li>
        </ul>
        <a className="md:pl-6 pl-14 xl:pl-14 font-medium" href="https://#">
          Login
        </a>
        <img className="md:p-4 px-6 xl:px-4 2xl:px-7" src={Divider} alt="" />
        <a
          className="md:px-4 px-8 xl:px-8 md:py-2.5 py-3.5 xl:py-3.5 bg-brandAcent rounded-[32px] font-medium"
          href="https://#"
        >
          Register
        </a>
      </div>
      <MenuItems showMenu={showMenu} active={active} />
    </div>
  );
}

export default NavBar;
