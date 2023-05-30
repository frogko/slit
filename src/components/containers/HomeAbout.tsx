import Button from "@/components/Button";
import React from "react";
import RightLinkButton from "../RightLinkButton";

const HomeAbout = () => {
  return (
    <>
      <div className="w-full xl:w-4/12">
        <h3 className="mb-2 text-center text-[18px] font-light tracking-widest text-custom-red md:text-[32px] xl:text-left">
          SUPERLİT
        </h3>

        <h3 className="mb-8 text-center text-[24px] font-bold tracking-[0.5rem] text-custom-gray2 md:text-[42px] xl:mb-6 xl:text-left">
          HAKKINDA
        </h3>

        <div className="mb-6 hidden text-[14px] font-medium leading-9 text-custom-black md:block md:text-center md:text-[18px] xl:block xl:text-left xl:text-[24px]">
          Kurulu kapasite açısından dünya çapında CTP boru sektörünün lider
          kuruluşlarından biridir.
        </div>

        <RightLinkButton className="hidden items-center font-semibold text-custom-red xl:flex">
          HAKKIMIZDA
        </RightLinkButton>
      </div>

      <div className="mb-4 w-full text-justify xl:mb-0 xl:w-8/12 xl:pl-[14rem]">
        <div className="no-scrollbar mb-6 flex justify-center space-x-6 overflow-y-scroll xl:justify-normal">
          <img className="h-24 w-24 rounded-full" src={"/hakkinda-1.png"} />
          <img className="h-24 w-24 rounded-full" src={"/hakkinda-2.png"} />
          <img className="h-24 w-24 rounded-full" src={"/hakkinda-3.png"} />
          <img className="h-24 w-24 rounded-full" src={"/hakkinda-4.png"} />
          <img className="h-24 w-24 rounded-full" src={"/hakkinda-5.png"} />
          <img className="h-24 w-24 rounded-full" src={"/hakkinda-6.png"} />
        </div>

        <div className="hidden font-medium leading-7 text-custom-gray3 md:block md:text-center xl:text-left">
          Basınçlı ve basınçsız CTP (Cam Elyaf Takviyeli Polyester) boruların
          uluslararası standartlara uygun üretimini ve satışını yapmakta olan
          SUPERLİT, geniş ürün yelpazesi, güvenilir kalitesi ile satış öncesi ve
          sonrası teknik/danışmanlık hizmetleri sayesinde 5 kıtada tercih edilen
          bir marka olmuştur.
        </div>

        <div className="mx-auto mb-6 w-full text-center font-medium text-custom-black md:hidden">
          Kurulu kapasite açısından dünya çapında CTP boru sektörünün lider
          kuruluşlarından biridir.
        </div>

        <Button className="mx-auto block w-48 px-6 py-3 md:hidden">
          HAKKIMIZDA
        </Button>
      </div>
    </>
  );
};

export default HomeAbout;
