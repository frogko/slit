import Button from "@/components/Button";
import React from "react";
import LinkedIcon from "@/components/icons/LinkedinIcon";

const TopHeader = () => {
  return (
    <div className="hidden h-[60px] items-center bg-custom-gray4 px-[75px] lg:flex 2xl:px-[150px]">
      <LinkedIcon />

      <div className="ml-auto flex space-x-4">
        <Button className="">TEKLİF AL</Button>
        <Button>E-KATALOG</Button>
      </div>
    </div>
  );
};

export default TopHeader;
