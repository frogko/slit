import React from "react";

type Props = {};

const HomeAbout = (props: Props) => {
  return (
    <div className="mx-[150px] my-20 flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/4">
        <h3 className="mb-2 text-3xl font-light tracking-widest text-red">
          SUPERLİT
        </h3>

        <h3 className="mb-6 text-4xl font-bold tracking-[0.275em] text-custom-gray2">
          HAKKINDA
        </h3>

        <div className="mb-6 hidden text-2xl font-medium leading-9 text-custom-black lg:block">
          Kurulu kapasite açısından dünya çapında CTP boru sektörünün lider
          kuruluşlarından biridir.
        </div>
        <div className="font-semibold text-red">HAKKIMIZDA</div>
      </div>

      <div className="w-full text-justify lg:w-3/4 lg:pl-[14rem]">
        <div className="no-scrollbar mb-6 flex space-x-6 overflow-y-scroll">
          <img className="h-24 w-24 rounded-full" src={"/hakkinda-1.png"} />
          <img className="h-24 w-24 rounded-full" src={"/hakkinda-2.png"} />
          <img className="h-24 w-24 rounded-full" src={"/hakkinda-3.png"} />
          <img className="h-24 w-24 rounded-full" src={"/hakkinda-4.png"} />
          <img className="h-24 w-24 rounded-full" src={"/hakkinda-5.png"} />
          <img className="h-24 w-24 rounded-full" src={"/hakkinda-6.png"} />
        </div>

        <div className="hidden font-medium leading-7 text-custom-gray3 lg:block ">
          Basınçlı ve basınçsız CTP (Cam Elyaf Takviyeli Polyester) boruların
          uluslararası standartlara uygun üretimini ve satışını yapmakta olan
          SUPERLİT, geniş ürün yelpazesi, güvenilir kalitesi ile satış öncesi ve
          sonrası teknik/danışmanlık hizmetleri sayesinde 5 kıtada tercih edilen
          bir marka olmuştur.
        </div>
      </div>

      <div className="text-custom-black lg:hidden">
        Kurulu kapasite açısından dünya çapında CTP boru sektörünün lider
        kuruluşlarından biridir.
      </div>
    </div>
  );
};

export default HomeAbout;
