import Button from "@/components/Button";
import React from "react";
import LinkedIcon from "@/components/icons/LinkedinIcon";

type Props = {};

const TopHeader = (props: Props) => {
  return (
    <div className="bg-custom-gray4 hidden h-[60px] items-center px-[150px] lg:flex">
      <LinkedIcon />

      <div className="ml-auto flex space-x-4">
        <Button className="">TEKLİF AL</Button>
        <Button>E-KATALOG</Button>
      </div>
    </div>
  );
};

export default TopHeader;
