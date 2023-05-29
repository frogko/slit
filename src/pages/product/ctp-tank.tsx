import CtpMansonTabSecond from "@/components/containers/CtpMansonTabSecond";
import CtpMansonTabThird from "@/components/containers/CtpMansonTabThird";
import CtpTankTabFirst from "@/components/containers/CtpTankTabFirst";
import CtpTankTabSecond from "@/components/containers/CtpTankTabSecond";
import CtpTankTabThird from "@/components/containers/CtpTankTabThird";
import ProductDetailBanner from "@/components/containers/ProductDetailBanner";
import ProductDetailTemplate from "@/components/containers/ProductDetailTemplate";
import React from "react";

const tabs = [
  {
    text: "TANK MODELLERİ",
    component: <CtpTankTabFirst />,
  },
  {
    text: "KULLANIM ALANLARI VE AVANTAJLARI",
    component: <CtpTankTabSecond />,
  },
  {
    text: "TASARIM VE AKSESUARLAR",
    component: <CtpTankTabThird />,
  },
  {
    text: "DÖŞEME VE TEKNİK BİLGİLER",
    component: <CtpMansonTabThird />,
  },
];

const CtpTank = () => {
  return (
    <>
      <ProductDetailTemplate
        tabs={tabs}
        productBanner={
          <ProductDetailBanner
            bannerUrl="/ctp-tank-urun.png"
            title="CTP Tank"
            description="CTP Tankı, tasarım ve uygulamaya bağlı olarak cam elyafı, termoset reçine ve silika kum dolgunun birleştirilmesiyle üretilen kompozit bir malzemedir."
            breadcrumbText="CTP TANK"
          />
        }
      />
    </>
  );
};

export default CtpTank;
