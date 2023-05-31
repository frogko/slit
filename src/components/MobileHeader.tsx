import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import cx from "classnames";

import Logo from "./Logo";

const MobileHeader = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="relative">
      <div className="flex items-center justify-between p-5">
        <Logo className="h-[65px] w-[175px]" />

        {isToggled ? (
          <IoCloseSharp
            className="h-10 w-10 cursor-pointer text-custom-red"
            onClick={() => setIsToggled(false)}
          />
        ) : (
          <RxHamburgerMenu
            className="h-10 w-10 cursor-pointer text-custom-red"
            onClick={() => setIsToggled(true)}
          />
        )}
      </div>

      <div
        className={cx(
          "absolute left-0 top-full z-10 flex h-0 w-full flex-col justify-center overflow-hidden bg-white",
          {
            "h-auto transition-all": isToggled,
          }
        )}
      >
        <div className="flex w-full flex-col space-y-8 bg-custom-gray17 px-8 py-8 text-custom-basex font-semibold text-custom-gray18">
          <div className="font-medium">KURUMSAL</div>
          <div className="font-medium">ÜRÜN VE HİZMETLER</div>
          <div className="font-medium">TEKNOLOJİ VE KALİTE</div>
          <div className="font-medium">DÜNYA’DA SUPERLİT</div>
          <div className="font-medium">İLETİŞİM</div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
