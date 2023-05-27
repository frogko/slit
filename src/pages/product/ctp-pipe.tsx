import ProductDetailBanner from "@/components/containers/ProductDetailBanner";
import ProductDetailTabs from "@/components/containers/ProductDetailTabs";
import React from "react";
import CtpTabFirst from "@/components/containers/CtpTabFirst";
import CtpTabSecond from "@/components/containers/CtpTabSecond";
import CtpTabThird from "@/components/containers/CtpTabThird";

const tabs = [
  "ÜRETİM TEKNOLOJİLERİMİZ",
  "KULLANIM ALANLARI VE AVANTAJLARI",
  "BORU ÇAPLARI VE TEKNİK ÖZELLİKLERİ",
  // "BROŞÜR VE DÖKÜMANLAR",
];
const ctp = () => {
  return (
    <div className="relative min-h-screen bg-custom-gray14 pb-4">
      <ProductDetailBanner />

      <ProductDetailTabs
        className="relative left-0 z-[3] -my-9 mb-4 w-full px-5 pt-9 lg:px-[150px]"
        tabs={tabs}
      >
        {({ index }) => (
          <div className="bg-white px-[60px] py-12 pt-16">
            {index === 0 && <CtpTabFirst />}
            {index === 1 && <CtpTabSecond />}
            {index === 2 && <CtpTabThird />}
          </div>
        )}
      </ProductDetailTabs>
    </div>
  );
};

export default ctp;
