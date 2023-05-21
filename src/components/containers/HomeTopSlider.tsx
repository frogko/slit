import NextIcon from "@/components/icons/NextIcon";
import PrevIcon from "@/components/icons/PrevIcon";
import DownIcon from "@/components/icons/DownIcon";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import cx from "classnames";

type Props = {};

function Next({ onClick }) {
  return (
    <NextIcon
      onClick={onClick}
      id="next-icon"
      className="absolute right-10 top-1/2 z-10 hidden h-8 w-5 -translate-y-1/2 cursor-pointer text-white lg:block "
    />
  );
}
function Prev({ onClick }) {
  return (
    <PrevIcon
      onClick={onClick}
      id="next-icon"
      className="absolute left-10 top-1/2 z-10 hidden h-8 w-5 -translate-y-1/2 cursor-pointer text-white lg:block"
    />
  );
}

const HomeTopSlider = (props: Props) => {
  return (
    <div>
      <Carousel
        className="homepage-slider  relative"
        renderArrowNext={(clickHandler) => <Next onClick={clickHandler} />}
        renderArrowPrev={(clickHandler) => <Prev onClick={clickHandler} />}
        showThumbs={false}
        swipeable
        showStatus={false}
        renderIndicator={(clickHandler, isSelected) => (
          <div
            onClick={clickHandler}
            className={cx(
              "mr-2 inline-block h-5 w-5 cursor-pointer rounded-full border border-white bg-transparent",
              {
                "!border-custom-gray !bg-custom-gray": isSelected,
              }
            )}
          />
        )}
      >
        <div>
          <img
            className="h-[calc(100vh-210px)] object-cover"
            src={"top-slider-first-image.png"}
          />

          <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-white lg:text-center">
            <h2 className="mb-3 text-3xl font-bold lg:text-6xl">
              CAM ELYAF TAKVİYELİ
            </h2>
            <h2 className="mb-4 text-3xl font-bold lg:text-6xl">
              POLYESTER (CTP) BORU
            </h2>
            <h3 className="lg:text-2xl">CTP Boru, Manşon ve Ek parçaları</h3>
            <div className="mb-12 lg:text-2xl">inceleyin..</div>

            <div className="mb-4 flex justify-center">
              <DownIcon />
            </div>

            <button className="cursor-pointer text-xl font-medium tracking-[1rem]">
              DETAYLAR
            </button>
          </div>
        </div>

        <div>
          <img
            className="h-[calc(100vh-210px)] object-cover"
            src={"top-slider-first-image.png"}
          />

          <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-white lg:text-center">
            <h2 className="mb-3 text-3xl font-bold lg:text-6xl">
              CAM ELYAF TAKVİYELİ
            </h2>
            <h2 className="mb-4 text-3xl font-bold lg:text-6xl">
              POLYESTER (CTP) BORU
            </h2>
            <h3 className="lg:text-2xl">CTP Boru, Manşon ve Ek parçaları</h3>
            <div className="mb-12 lg:text-2xl">inceleyin..</div>

            <div className="mb-4 flex justify-center">
              <DownIcon />
            </div>

            <button className="cursor-pointer text-xl font-medium tracking-[1rem]">
              DETAYLAR
            </button>
          </div>
        </div>

        <div>
          <img
            className="h-[calc(100vh-210px)] object-cover"
            src={"top-slider-first-image.png"}
          />

          <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-white lg:text-center">
            <h2 className="mb-3 text-3xl font-bold lg:text-6xl">
              CAM ELYAF TAKVİYELİ
            </h2>
            <h2 className="mb-4 text-3xl font-bold lg:text-6xl">
              POLYESTER (CTP) BORU
            </h2>
            <h3 className="lg:text-2xl">CTP Boru, Manşon ve Ek parçaları</h3>
            <div className="mb-12 lg:text-2xl">inceleyin..</div>

            <div className="mb-4 flex justify-center">
              <DownIcon />
            </div>

            <button className="cursor-pointer text-xl font-medium tracking-[1rem]">
              DETAYLAR
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HomeTopSlider;
