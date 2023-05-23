import React from "react";
import CustomSlider from "../CustomSlider";
import { AiOutlineDoubleRight as RightIcon } from "react-icons/ai";
import RightLinkButton from "../RightLinkButton";

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
      <h2 className="mb-8 text-center font-bold tracking-widest lg:text-3xl">
        VİDEOLAR
      </h2>

      <CustomSlider
        arrowClass="text-red"
        className="lg:px-[50px]"
        settings={settings}
      >
        <VideoItem />
        <VideoItem />
        <VideoItem />
        <VideoItem />
      </CustomSlider>
    </>
  );
};

const VideoItem = () => (
  <div className="relative flex p-12">
    <img
      src="/video-1-bg.png"
      className="absolute bottom-0 left-0 right-0 top-0 -z-10 h-full w-full rounded-xl"
    />

    <div className="w-1/2 ">
      <div className="mb-12 flex items-center">
        <h2 className=" text-4xl font-bold text-white">SUPERLİT </h2>
        <h2 className="ml-2 text-4xl text-white">CTP</h2>
      </div>

      <p className="mb-12 font-medium text-white">
        SUPERLİT CTP Full Face Manşon® animasyon filmi, deniz altı için üretilen
        en büyük çaplı CTP borunun döşeme ve montaj videosu ve diğer tanıtım
        videolarımız
      </p>

      <RightLinkButton className="text-white">TÜM VİDEOLARIMIZ</RightLinkButton>
    </div>

    <div className="w-1/2">
      <video></video>
    </div>
  </div>
);

export default HomeVideos;
