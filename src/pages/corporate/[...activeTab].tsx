import ProductDetailTemplate from "@/components/containers/ProductDetailTemplate";
import React from "react";
import { useRouter } from "next/router";
import CenterBanner from "@/components/containers/CenterBanner";
import CorporateTabFirst from "@/components/containers/CorporateTabFirst";
import CorporateTabSecond from "@/components/containers/CorporateTabSecond";
import CorporateTabThird from "@/components/containers/CorporateTabThird";
import CorporateTabFourth from "@/components/containers/CorporateTabFourth";
import CorporateTabFifth from "@/components/containers/CorporateTabFifth";
import tabParamsArrayGenerator from "@/helpers/tabParamsArrayGenerator";

const tabs = [
  {
    text: "HAKKIMIZDA",
    component: <CorporateTabFirst />,
    key: "about-us",
  },
  {
    text: "ZAMAN TÜNELİ",
    component: <CorporateTabSecond />,
    key: "timeline",
  },
  {
    text: "YÖNETİM",
    component: <CorporateTabThird />,
    key: "governance",
  },
  {
    text: "KALİTE POLİTİKALARIMIZ",
    component: <CorporateTabFourth />,
    key: "quality-policy",
  },
  {
    text: "İNSAN KAYNAKLARI",
    component: <CorporateTabFifth />,
    key: "human-resources",
    subKey: ["hr-policy", "job-applications", "applying-jobs"],
  },
];

const Corporate = () => {
  const router = useRouter();

  return (
    <>
      <ProductDetailTemplate
        tabs={tabs}
        onTabChange={(activeTabKey) =>
          router.push({
            query: {
              activeTab: activeTabKey,
            },
          })
        }
        activeTabKey={router.query.activeTab[0] as string[]}
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

export const getStaticPaths = async () => {
  return {
    paths: tabParamsArrayGenerator(tabs),
    fallback: false,
  };
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default Corporate;
