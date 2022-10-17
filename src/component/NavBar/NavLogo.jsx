import React from "react";
import brandLogo from "../../assets/Logo.svg"

function NavLogo() {
  let url="#";
  return (
    <div className="flex items-center space-x-4 text-white text-lg font-semibold">
      <a href={url}>
        <img src={brandLogo} alt="" />
      </a>
      <a href={url}>CRAPPO</a>
    </div>
  );
}

export default NavLogo;