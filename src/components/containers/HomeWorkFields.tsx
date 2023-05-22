import React from "react";
import Button from "@/components/Button";
import CustomSlider from "../CustomSlider";

const HomeWorkFields = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="relative py-[40px]">
      <img
        src="/work-fields-bg.jpg"
        className="absolute bottom-0 left-0 right-0 top-0 -z-10 h-full w-full"
      />
      <h2 className="mb-12 text-center text-2xl font-bold tracking-widest text-custom-gray5 lg:text-4xl lg:tracking-[1rem]">
        UYGULAMA ALANLARI
      </h2>

      <CustomSlider
        settings={settings}
        arrowClass="text-red"
        className="relative lg:px-[150px] lg:py-[100px]"
      >
        <WorkFieldCard />
        <WorkFieldCard />
        <WorkFieldCard />
        <WorkFieldCard />
        <WorkFieldCard />
        <WorkFieldCard />
      </CustomSlider>

      <Button className="mx-auto mt-10 w-max py-3 lg:mt-20">
        TÜM UYGULAMA ALANLARI
      </Button>
    </div>
  );
};

const WorkFieldCard = () => (
  <div className="relative m-3 h-[288px]">
    <div className="bottom-0 left-0 right-0 top-0 h-full w-full" />
    <img
      src="/atik-su.png"
      className="absolute bottom-0 left-0 right-0 top-0 h-full w-full"
    />
    <div className="text-white">
      <div>icon</div>
      <div>Temiz su ve içme suyu</div>
    </div>

    <div className="absolute right-0 top-0">icon</div>
  </div>
);
export default HomeWorkFields;
