import React from "react";
import CustomSlider from "../CustomSlider";
import Button from "../Button";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
};

const HomeGreenHouseSolutions = (props: Props) => {
  return (
    <div className="relative px-[200px] py-[50px]">
      <h2 className="mb-8 text-center font-bold tracking-widest text-white lg:text-3xl">
        SUPERLİT SERA ÇÖZÜMLERİ
      </h2>

      <img
        src="/sera-bg.jpg"
        className="absolute bottom-0 left-0 right-0 top-0 -z-10 h-full w-full"
      />

      <CustomSlider
        settings={settings}
        arrowClass="text-white"
        className="lg:px-[200px]"
      >
        <div className="mx-4 flex items-center justify-center bg-white">
          <img src="/cokeltme-tanklari.jpg" />
        </div>

        <div className="mx-4 flex items-center justify-center bg-white">
          <img src="/cokeltme-tanklari.jpg" />
        </div>

        <div className="mx-4 flex items-center justify-center bg-white">
          <img src="/cokeltme-tanklari.jpg" />
        </div>

        <div className="mx-4 flex items-center justify-center bg-white">
          <img src="/cokeltme-tanklari.jpg" />
        </div>

        <div className="mx-4 flex items-center justify-center bg-white">
          <img src="/cokeltme-tanklari.jpg" />
        </div>

        <div className="mx-4 flex items-center justify-center bg-white">
          <img src="/cokeltme-tanklari.jpg" />
        </div>

        <div className="mx-4 flex items-center justify-center bg-white">
          <img src="/cokeltme-tanklari.jpg" />
        </div>

        <div className="mx-4 flex items-center justify-center bg-white">
          <img src="/cokeltme-tanklari.jpg" />
        </div>
      </CustomSlider>

      <Button
        variant="secondary"
        className="mx-auto mt-8 w-max bg-white tracking-wider"
      >
        TÜM SERA ÇÖZÜMLERİMİZ
      </Button>
    </div>
  );
};

export default HomeGreenHouseSolutions;
