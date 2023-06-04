import CtpMansonTabSecond from "@/components/containers/CtpMansonTabSecond";
import CtpMansonTabThird from "@/components/containers/CtpMansonTabThird";
import CtpTankTabFirst from "@/components/containers/CtpTankTabFirst";
import CtpTankTabSecond from "@/components/containers/CtpTankTabSecond";
import CtpTankTabThird from "@/components/containers/CtpTankTabThird";
import ProductDetailBanner from "@/components/containers/ProductDetailBanner";
import ProductDetailTemplate from "@/components/containers/ProductDetailTemplate";
import router, { useRouter } from "next/router";
import React from "react";

const tabs = [
  {
    text: "TANK MODELLERİ",
    component: <CtpTankTabFirst />,
    key: "models",
  },
  {
    text: "KULLANIM ALANLARI VE AVANTAJLARI",
    component: <CtpTankTabSecond />,
    key: "workfields",
  },
  {
    text: "TASARIM VE AKSESUARLAR",
    component: <CtpTankTabThird />,
    key: "design",
  },
  {
    text: "DÖŞEME VE TEKNİK BİLGİLER",
    component: <CtpMansonTabThird />,
    key: "technical",
  },
];

const CtpTank = () => {
  const router = useRouter();

  return (
    <>
      <ProductDetailTemplate
        tabs={tabs}
        activeTabKey={router.query.activeTab as string}
        onTabChange={(activeTabKey) =>
          router.push({
            query: {
              activeTab: activeTabKey,
            },
          })
        }
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

export const getStaticPaths = async () => {
  return {
    paths: tabParamsGenerator(tabs),
    fallback: false,
  };
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default CtpTank;
