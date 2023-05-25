import React from "react";
import Button from "@/components/Button";
import RotatedArrowIcon from "@/components/icons/RotatedArrowIcon";
import CustomSlider from "../CustomSlider";
import { Settings } from "react-slick";

const HomeWorkFields = () => {
  const settings: Settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    dots: true,
    appendDots: (dots) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          left: 0,
          right: 0,
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
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

  return (
    <>
      <img
        src="/work-fields-bg.jpg"
        className="absolute bottom-0 left-0 right-0 top-0 -z-10 h-full w-full"
      />
      <h2 className="mb-8 text-center text-xl font-bold tracking-widest text-custom-gray5 lg:text-4xl lg:tracking-[1rem]">
        UYGULAMA ALANLARI
      </h2>

      <CustomSlider
        settings={settings}
        arrowClass="text-red"
        className="homepage-workfields-slider relative mb-8 px-14 lg:py-[80px]"
      >
        <WorkFieldCard iconUrl="/water.png" bgUrl="/temiz-su.png" />
        <WorkFieldCard iconUrl="/wasted-water.png" bgUrl="/atik-su.png" />
        <WorkFieldCard iconUrl="/water-store.png" bgUrl="/su-depolama.png" />

        <WorkFieldCard iconUrl="/water.png" bgUrl="/temiz-su.png" />
        <WorkFieldCard iconUrl="/wasted-water.png" bgUrl="/atik-su.png" />
        <WorkFieldCard iconUrl="/water-store.png" bgUrl="/su-depolama.png" />
      </CustomSlider>

      <Button className="mx-auto block w-max py-3 lg:mt-20">
        TÜM UYGULAMA ALANLARI
      </Button>
    </>
  );
};

const WorkFieldCard = ({ iconUrl, bgUrl }) => (
  <div className="relative flex h-[190px] p-4 md:mx-4 lg:h-[288px]">
    <img
      src={bgUrl}
      className="absolute bottom-0 left-0 right-0 top-0 -z-10 h-full w-full"
    />
    <div className="mt-auto text-white">
      <img className="mb-2 h-8 w-8" src={iconUrl} />
      <div className="font-semibold">Temiz su ve içme suyu</div>
    </div>

    <RotatedArrowIcon className="absolute right-4 top-4 cursor-pointer  text-xl" />
  </div>
);
export default HomeWorkFields;
