import ProductDetailTemplate from "@/components/containers/ProductDetailTemplate";
import React from "react";
import CenterBanner from "@/components/containers/CenterBanner";
import CorporateTabFirst from "@/components/containers/CorporateTabFirst";
import CorporateTabSecond from "@/components/containers/CorporateTabSecond";
import CorporateTabThird from "@/components/containers/CorporateTabThird";
import CorporateTabFourth from "@/components/containers/CorporateTabFourth";

const tabs = [
  {
    text: "HAKKIMIZDA",
    component: <CorporateTabFirst />,
  },
  {
    text: "ZAMAN TÜNELİ",
    component: <CorporateTabSecond />,
  },
  {
    text: "YÖNETİM",
    component: <CorporateTabThird />,
  },
  {
    text: "KALİTE POLİTİKALARIMIZ",
    component: <CorporateTabFourth />,
  },
  // {
  //   text: "İNSAN KAYNAKLARI",
  //   component: <CorporateTabFirst />,
  // },
];

const Corporate = () => {
  return (
    <>
      <ProductDetailTemplate
        tabs={tabs}
        productBanner={
          <CenterBanner
            title="SUPERLIT KURUMSAL"
            breadCrumbText="KURUMSAL"
            imgUrl="/kurumsal-bg.png"
          />
        }
      />
    </>
  );
};

export default Corporate;
