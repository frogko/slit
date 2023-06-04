import ProductDetailBanner from "@/components/containers/ProductDetailBanner";
import React from "react";
import CtpTabFirst from "@/components/containers/CtpTabFirst";
import CtpTabSecond from "@/components/containers/CtpTabSecond";
import CtpTabThird from "@/components/containers/CtpTabThird";
import ProductDetailTemplate from "@/components/containers/ProductDetailTemplate";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import tabParamsGenerator from "@/helpers/tabParamsGenerator";

const tabs = [
  {
    text: "ÜRETİM TEKNOLOJİLERİMİZ",
    component: <CtpTabFirst />,
    key: "produce",
  },
  {
    text: "KULLANIM ALANLARI VE AVANTAJLARI",
    component: <CtpTabSecond />,
    key: "fields",
  },

  {
    text: "BORU ÇAPLARI VE TEKNİK ÖZELLİKLERİ",
    component: <CtpTabThird />,
    key: "technical",
  },
];

const CtpPipe = () => {
  const router = useRouter();

  return (
    <Layout>
      <ProductDetailTemplate
        tabs={tabs}
        onTabChange={(activeTabKey) =>
          router.push({
            query: {
              activeTab: activeTabKey,
            },
          })
        }
        activeTabKey={router.query.activeTab as string}
        productBanner={
          <ProductDetailBanner
            bannerUrl="/ctp-boru-urun.png"
            breadcrumbText="CTP BORU"
            title="CTP BORU"
            description="CTP boru esnek davranış gösteren, cam elyaf takviyeli termoset reçine ve silika kumdan oluşan kompozit bir malzemedir."
          />
        }
      />
    </Layout>
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

export default CtpPipe;
