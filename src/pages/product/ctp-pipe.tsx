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
    <div className="relative bg-custom-gray14">
      <ProductDetailBanner />

      <ProductDetailTabs
        className="absolute left-0 z-[3] -my-9 w-full px-[150px]"
        tabs={tabs}
      >
        {({ index }) => (
          <div className="mt-12">
            {index === 0 && <CtpTabFirst />}
            {index === 1 && <CtpTabSecond />}
            {index === 2 && <CtpTabThird />}
            {/* {index === 3 && <div>4</div>} */}
            {/* {index === 4 && <div>5</div>} */}
          </div>
        )}
      </ProductDetailTabs>
    </div>
  );
};

export default ctp;
