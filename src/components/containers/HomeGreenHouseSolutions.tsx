import React from "react";
import CustomSlider from "../CustomSlider";
import Button from "../Button";

const settings = {
  slidesToShow: 4,
  slidesToScroll: 4,
  infinite: true,
  dots: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        dots: false,
      },
    },
  ],
};

const HomeGreenHouseSolutions = () => {
  return (
    <>
      <h2 className="mb-8 text-center font-bold tracking-[1rem] text-white lg:text-3xl">
        SUPERLİT SERA ÇÖZÜMLERİ
      </h2>

      <img
        src="/sera-bg.jpg"
        className="absolute bottom-0 left-0 right-0 top-0 -z-10 h-full w-full"
      />

      <CustomSlider
        settings={settings}
        arrowClass="text-white"
        className="lg:py-16"
      >
        <GreenHouseItem />
        <GreenHouseItem />
        <GreenHouseItem />
        <GreenHouseItem />
        <GreenHouseItem />
        <GreenHouseItem />
        <GreenHouseItem />
      </CustomSlider>

      <Button
        variant="secondary"
        className="mx-auto mt-8 w-max bg-white tracking-wider"
      >
        TÜM SERA ÇÖZÜMLERİMİZ
      </Button>
    </>
  );
};

const GreenHouseItem = () => (
  <div className="flex flex-col">
    <div className="relative mx-4 h-[269px]  rounded-lg bg-white">
      <img
        src="/cokeltme-tanklari.jpg"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>

    <div className="mt-4 text-center text-white">CTP JEOTERMAL BORU</div>
  </div>
);

export default HomeGreenHouseSolutions;
