import React, { useRef } from "react";
import Slider from "react-slick";
import { HiChevronDoubleDown as DownIcon } from "react-icons/hi";
import {
  AiOutlineRight as NextIcon,
  AiOutlineLeft as PrevIcon,
} from "react-icons/ai";
import Link from "next/link";
import Container from "../Container";
import Image from "next/image";

function Next({ onClick }) {
  return (
    <NextIcon
      onClick={onClick}
      id="next-icon"
      className="absolute right-[150px] top-1/2 z-10 hidden -translate-y-1/2  cursor-pointer text-5xl text-white lg:block "
    />
  );
}
function Prev({ onClick }) {
  return (
    <PrevIcon
      onClick={onClick}
      id="next-icon"
      className="absolute left-[150px] top-1/2 z-10 hidden -translate-y-1/2 cursor-pointer text-5xl text-white lg:block"
    />
  );
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  customPaging: (i) => (
    <div className="absolute bottom-0 h-5 w-5 rounded-full border border-white" />
  ),
};

const HomeTopSlider = () => {
  const sliderRef = useRef();

  return (
    <div className="relative">
      <Slider ref={sliderRef} {...settings} className="homepage-slider">
        <SliderItem fetchPriority="high" priority />
        <SliderItem />
        <SliderItem />
      </Slider>

      <div className="absolute left-1/2 top-1/2 mx-auto h-[48px] w-full max-w-[1728px] -translate-x-1/2 -translate-y-1/2">
        <Prev onClick={() => sliderRef.current.slickPrev()}>Previous</Prev>

        <Next onClick={() => sliderRef.current.slickNext()}>Next</Next>
      </div>
    </div>
  );
};

const SliderItem = ({ fetchPriority = "auto", priority }) => (
  <div className="relative h-[800px] w-full md:h-[900px]">
    <Image
      fetchPriority={fetchPriority}
      priority={priority}
      fill
      alt="Cam Elyaf Takviyeli Polyester Boru"
      className="absolute z-[-5] h-full w-full object-cover"
      src={"/top-slider-first-image.png"}
    />

    <Container className="h-full">
      <div className="absolute left-1/2 top-1/2 w-full max-w-[1728px] -translate-x-1/2 -translate-y-1/2 px-5 text-center text-white xl:px-[150px]">
        <h2 className="mb-3 text-custom-2xl font-bold md:text-7xl">
          CAM ELYAF TAKVİYELİ
        </h2>
        <h2 className="mb-4 text-3xl font-bold md:text-7xl">
          POLYESTER (CTP) BORU
        </h2>
        <h3 className="text-custom-basex font-medium md:text-custom-md md:font-semibold">
          CTP Boru, Manşon ve Ek parçaları
        </h3>
        <div className="mb-12 text-custom-basex font-medium md:text-custom-md md:font-semibold">
          inceleyin..
        </div>

        <div className="mb-4 flex justify-center">
          <DownIcon className="text-3xl" />
        </div>

        <Link
          href="/product/ctp-pipe"
          className=" text-custom-basex font-bold tracking-[1rem] md:text-custom-xmd md:font-semibold"
        >
          DETAYLAR
        </Link>
      </div>
    </Container>
  </div>
);

export default HomeTopSlider;
