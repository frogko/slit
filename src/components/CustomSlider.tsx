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
        "absolute right-0 top-1/2 z-10 h-[50px] w-[50px] -translate-y-1/2 cursor-pointer lg:-right-16 lg:block"
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
        "absolute left-0 top-1/2 z-10 h-[50px] w-[50px] -translate-y-1/2 rotate-180 cursor-pointer lg:-left-16 lg:block"
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
      nextArrow={<Next arrowClass={arrowClass} />}
      prevArrow={<Prev arrowClass={arrowClass} />}
    >
      {children}
    </Slider>
  );
};

export default CustomSlider;