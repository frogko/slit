import React from "react";
import Logo from "./Logo";
import SearchIcon from "@/components/icons/SearchIcon";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex h-[113px] w-full items-center justify-between bg-white px-[150px] lg:h-[150px]">
      <Logo className="h-[65px] w-[250px]" />
      <div className="hidden space-x-6 text-[18px] lg:flex">
        <div className="font-medium">KURUMSAL</div>
        <div className="font-medium">ÜRÜN VE HİZMETLER</div>
        <div className="font-medium">TEKNOLOJİ VE KALİTE</div>
        <div className="font-medium">DÜNYA’DA SUPERLİT</div>
        <div className="font-medium">İLETİŞİM</div>
        <div className="flex items-center">
          <SearchIcon className="mb-[3px] leading-none" />
        </div>
      </div>
    </div>
  );
};

export default Header;
