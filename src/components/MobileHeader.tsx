import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";

import SearchIcon from "./icons/SearchIcon";
import Logo from "./Logo";

const MobileHeader = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex items-center justify-between p-5">
      <Logo className="h-[65px] w-[175px]" />

      <RxHamburgerMenu
        className="h-10 w-10 cursor-pointer text-red"
        onClick={() => setShow(true)}
      />

      <div className="absolute left-0 top-0">
        <Menu
          customBurgerIcon={false}
          customCrossIcon={false}
          isOpen={show}
          right
          onOpen={() => setShow(true)}
          onClose={() => setShow(false)}
        >
          <div className="flex h-full w-full flex-col  p-10">
            <div className="space-y-2 text-[18px] text-white lg:flex">
              <div className="font-medium">KURUMSAL</div>
              <div className="font-medium">ÜRÜN VE HİZMETLER</div>
              <div className="font-medium">TEKNOLOJİ VE KALİTE</div>
              <div className="font-medium">DÜNYA’DA SUPERLİT</div>
              <div className="font-medium">İLETİŞİM</div>
              {/* <div className="flex items-center">
                <SearchIcon className="mb-[3px] leading-none" />
              </div> */}
            </div>

            <IoCloseSharp
              className="absolute right-4 top-4 text-4xl text-white"
              onClick={() => setShow(false)}
            />
          </div>
        </Menu>
      </div>
    </div>
  );
};

export default MobileHeader;
