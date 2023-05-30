import React from "react";
import CustomSlider from "../CustomSlider";
import Button from "../Button";
import Container from "../Container";

const settings = {
  slidesToShow: 4,
  slidesToScroll: 4,
  infinite: true,
  dots: false,
  responsive: [
    {
      breakpoint: 1280,
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
      <img
        src="/sera-bg.jpg"
        className="absolute bottom-0 left-0 right-0 top-0 -z-10 h-full w-full"
      />

      <div className="mx-auto max-w-[1728px]">
        <h2 className="mb-8 text-center text-custom-xbase font-bold tracking-[0.25rem] text-white md:text-custom-xl xl:tracking-[0.5rem]">
          SUPERLİT SERA ÇÖZÜMLERİ
        </h2>

        <CustomSlider
          settings={settings}
          arrowClass="text-white"
          className="px-[50px] lg:py-16 xl:px-[0]"
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
          className="mx-auto mt-8 block w-max bg-white px-12 text-custom-xbase tracking-wider md:text-custom-xbase"
        >
          TÜM SERA ÇÖZÜMLERİMİZ
        </Button>
      </div>
    </>
  );
};

const GreenHouseItem = () => (
  <div className="flex flex-col md:mx-4">
    <div className="relative h-[269px] rounded-lg bg-white">
      <img
        src="/cokeltme-tanklari.jpg"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>

    <div className="mt-4 text-center text-custom-sm font-medium text-white md:text-custom-md">
      CTP JEOTERMAL BORU
    </div>
  </div>
);

export default HomeGreenHouseSolutions;
