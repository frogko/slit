import ProductDetailBanner from "@/components/containers/ProductDetailBanner";
import ProductDetailTabs from "@/components/containers/ProductDetailTabs";
import React from "react";
import CtpTabFirst from "@/components/containers/CtpTabFirst";
import CtpTabSecond from "@/components/containers/CtpTabSecond";
import CtpTabThird from "@/components/containers/CtpTabThird";
import ProductDetailTemplate from "@/components/containers/ProductDetailTemplate";
import Layout from "@/components/Layout";

const tabs = [
  {
    text: "ÜRETİM TEKNOLOJİLERİMİZ",
    component: <CtpTabFirst />,
  },
  {
    text: "KULLANIM ALANLARI VE AVANTAJLARI",
    component: <CtpTabSecond />,
  },

  {
    text: "BORU ÇAPLARI VE TEKNİK ÖZELLİKLERİ",
    component: <CtpTabThird />,
  },
];
const Ctp = () => {
  return (
    <Layout>
      <ProductDetailTemplate
        tabs={tabs}
        productBanner={
          <ProductDetailBanner
            bannerUrl="/ctp-boru-urun.png"
            breadcrumbText="CTP BORU"
            title="CTP BORU"
            description="CTP boru esnek davranış gösteren, cam elyaf takviyeli termoset reçine ve silika kumdan oluşan kompozit bir malzemedir."
          />
        }
      ></ProductDetailTemplate>
    </Layout>
  );
};

export default Ctp;
