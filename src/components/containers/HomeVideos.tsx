import React from "react";
import CustomSlider from "../CustomSlider";
import { AiOutlineDoubleRight as RightIcon } from "react-icons/ai";
import RightLinkButton from "../RightLinkButton";
import Button from "../Button";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: false,
      },
    },
  ],
};

const HomeVideos = () => {
  return (
    <>
      <h2 className="mb-8 text-center text-xl font-bold tracking-widest lg:text-3xl">
        VİDEOLAR
      </h2>

      <CustomSlider
        arrowClass="text-red"
        className="homepage-video-slider lg:px-[50px]"
        settings={settings}
      >
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
      </CustomSlider>

      <Button className="mx-auto mt-12 block px-12 py-3 lg:hidden">
        TÜM VİDEOLARIMIZ
      </Button>
    </>
  );
};

const VideoItem = () => (
  <div className="relative flex flex-col-reverse items-center p-6 lg:flex-row lg:p-12">
    <img
      src="/video-1-bg.png"
      className="absolute bottom-0 left-0 right-0 top-0 -z-10 h-full w-full rounded-xl"
    />

    <div className="w-full space-y-6 lg:w-1/2 lg:space-y-12 lg:pr-16">
      <div className="flex items-center">
        <h2 className=" text-4xl font-bold text-white">SUPERLİT </h2>
        <h2 className="ml-2 text-4xl text-white">CTP</h2>
      </div>

      <p className="font-medium text-white">
        SUPERLİT CTP Full Face Manşon® animasyon filmi, deniz altı için üretilen
        en büyük çaplı CTP borunun döşeme ve montaj videosu ve diğer tanıtım
        videolarımız
      </p>

      <RightLinkButton className="text-white">TÜM VİDEOLARIMIZ</RightLinkButton>
    </div>

    <div className="w-full lg:w-1/2">
      <img
        src="/video.png"
        className="mb-6 h-full max-h-[300px] w-full object-cover lg:mb-0"
      />
    </div>
  </div>
);

export default HomeVideos;
