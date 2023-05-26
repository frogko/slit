import React from "react";
import Slider from "react-slick";
import { HiChevronDoubleDown as DownIcon } from "react-icons/hi";
import {
  AiOutlineRight as NextIcon,
  AiOutlineLeft as PrevIcon,
} from "react-icons/ai";
import Link from "next/link";

function Next({ onClick }) {
  return (
    <NextIcon
      onClick={onClick}
      id="next-icon"
      className="absolute right-10 top-1/2 z-10 hidden -translate-y-1/2  cursor-pointer text-5xl text-white lg:block "
    />
  );
}
function Prev({ onClick }) {
  return (
    <PrevIcon
      onClick={onClick}
      id="next-icon"
      className="absolute left-10 top-1/2 z-10 hidden -translate-y-1/2 cursor-pointer text-5xl text-white lg:block"
    />
  );
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <Next />,
  prevArrow: <Prev />,
  customPaging: (i) => (
    <div className="absolute bottom-0 h-5 w-5 rounded-full border border-white" />
  ),
};

const HomeTopSlider = () => {
  return (
    <>
      <Slider {...settings} className="homepage-slider relative">
        <SliderItem />
        <SliderItem />
        <SliderItem />
      </Slider>
    </>
  );
};

const SliderItem = () => (
  <div className="relative">
    <img
      className="h-[calc(100vh-210px)] w-full object-cover"
      src={"top-slider-first-image.png"}
    />

    <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-5 text-center text-white lg:px-0">
      <h2 className="mb-3 text-3xl font-bold lg:text-6xl">
        CAM ELYAF TAKVİYELİ
      </h2>
      <h2 className="mb-4 text-3xl font-bold lg:text-6xl">
        POLYESTER (CTP) BORU
      </h2>
      <h3 className="lg:text-2xl">CTP Boru, Manşon ve Ek parçaları</h3>
      <div className="mb-12 lg:text-2xl">inceleyin..</div>

      <div className="mb-4 flex justify-center">
        <DownIcon className="text-3xl" />
      </div>

      <Link
        href="/product/ctp-pipe"
        className="text-xl font-medium tracking-[1rem]"
      >
        DETAYLAR
      </Link>
    </div>
  </div>
);

export default HomeTopSlider;
