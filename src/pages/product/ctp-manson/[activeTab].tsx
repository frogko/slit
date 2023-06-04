import Layout from "@/components/Layout";
import CtpMansonTabFirst from "@/components/containers/CtpMansonTabFirst";
import CtpMansonTabSecond from "@/components/containers/CtpMansonTabSecond";
import CtpMansonTabThird from "@/components/containers/CtpMansonTabThird";
import ProductDetailBanner from "@/components/containers/ProductDetailBanner";
import ProductDetailTemplate from "@/components/containers/ProductDetailTemplate";
import tabParamsGenerator from "@/helpers/tabParamsGenerator";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";

const tabs = [
  {
    text: "CTP FULL-FACE® MANŞON",
    component: <CtpMansonTabFirst />,
    key: "full-face",
    productBannerDetails: {
      bannerUrl: "/ctp-fullface-urun.png",
      title: "CTP Full-Face Manşon",
      description:
        "SUPERLİT CTP manşonlarının iç yüzeyi EPDM conta ile tamamen kaplıdır ve benzer sistemlerle karşılaştırıldığında daha güvenli birleştirme sıkılığı sağlar; yüksek basınçlarda su sızdırmazlığını garanti eder.",
    },
  },
  {
    text: "CTP KAYAR MANŞON",
    component: <CtpMansonTabSecond />,
    key: "slight",
    productBannerDetails: {
      bannerUrl: "/ctp-kayar-urun.png",
      title: "CTP KAYAR MANŞON",
      description:
        "Boru üzerinde her iki yönde de hareket edebilecek şekilde tasarlanmış profil yapısı sayesinde, hasar görmüş boru hattı tamirinde ve montaj boşluklarının kapatılmasında ara kapama gibi teknik problemlerin çözümüne, korozyona uğramayan CTP kompozit malzeme ile çözüm sunar.",
    },
  },

  {
    text: "CTP JACKING MANŞON",
    component: <CtpMansonTabThird />,
    key: "jacking",
    productBannerDetails: {
      bannerUrl: "/ctp-jacking-urun.png",
      title: "CTP Jacking Manşon",
      description:
        "Yeni geliştirilen CTP jacking manşon, kazısız uygulamalarda kullanılan çelik manşonun alternatifi olarak tasarlanmıştır.",
    },
  },
];

const CtpManson = ({
  bannerDetails,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  return (
    <Layout>
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
          <ProductDetailBanner {...bannerDetails} breadcrumbText="CTP MANŞON" />
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

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ activeTab: string }>) => {
  const foundParam = tabs.find((tab) => tab.key === params!.activeTab);

  return {
    props: {
      bannerDetails: foundParam!.productBannerDetails,
    },
  };
};

export default CtpManson;
