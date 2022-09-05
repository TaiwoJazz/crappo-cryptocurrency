import React from "react";
import WhyCrappoData from "./WhyCrappoData";
import WhyCrappoContent from "./WhyCrappoContent";

function WhyCrappo() {
  return (
    <div className="flex flex-col space-y-4 md:space-y-16 bg-brandPrimaryColor px-6 md:px-[120px] lg:px-[80px] xl:px-[120px] 2xl:px-[180px] font-rubik pt-16 pb-24">
      <WhyCrappoData />
      <WhyCrappoContent />
    </div>
  );
}

export default WhyCrappo;
