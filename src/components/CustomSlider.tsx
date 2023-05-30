import React from "react";
import Slider from "react-slick";
import cx from "classnames";
import { AiOutlineDoubleRight as RightIcon } from "react-icons/ai";
import { Settings } from "http2";

function Next({ onClick, arrowClass }) {
  return (
    <RightIcon
      onClick={onClick}
      id="next-icon"
      className={cx(
        arrowClass,
        "absolute right-0 top-1/2 z-10 h-[50px] w-[50px] -translate-y-1/2 cursor-pointer md:right-4 lg:block xl:right-0"
      )}
    />
  );
}
function Prev({ onClick, arrowClass }) {
  return (
    <RightIcon
      onClick={onClick}
      id="next-icon"
      className={cx(
        arrowClass,
        "absolute left-0 top-1/2 z-10 h-[50px] w-[50px] -translate-y-1/2 rotate-180 cursor-pointer md:left-4 lg:block xl:left-0"
      )}
    />
  );
}

type Props = {
  className: string;
  arrowClass?: string;
  children: React.ReactElement | React.ReactElement[];
  settings: Settings;
};

const CustomSlider = ({ className, arrowClass, children, settings }: Props) => {
  return (
    <Slider
      className={className}
      {...settings}
      customPaging={() => (
        <div className="slick-dot-item absolute bottom-0 h-4 w-4 rounded-full border border-custom-gray11 bg-custom-gray11" />
      )}
      nextArrow={<Next arrowClass={arrowClass} />}
      prevArrow={<Prev arrowClass={arrowClass} />}
    >
      {children}
    </Slider>
  );
};

export default CustomSlider;
