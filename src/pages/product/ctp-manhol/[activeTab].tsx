import CtpManholTabFifth from "@/components/containers/CtpManholTabFifth";
import CtpManholTabFirst from "@/components/containers/CtpManholTabFirst";
import CtpManholTabFourth from "@/components/containers/CtpManholTabFourth";
import CtpManholTabSecond from "@/components/containers/CtpManholTabSecond";
import CtpManholTabThird from "@/components/containers/CtpManholTabThird";
import ProductDetailBanner from "@/components/containers/ProductDetailBanner";
import ProductDetailTemplate from "@/components/containers/ProductDetailTemplate";
import tabParamsGenerator from "@/helpers/tabParamsGenerator";
import React from "react";

const tabs = [
  {
    text: "MANHOL MODELLERİ",
    component: <CtpManholTabFirst />,
    key: "models",
    productBannerDetails: {
      bannerUrl: "/ctp-fullface-urun.png",
      title: "CTP Full-Face Manşon",
      description:
        "SUPERLİT CTP manşonlarının iç yüzeyi EPDM conta ile tamamen kaplıdır ve benzer sistemlerle karşılaştırıldığında daha güvenli birleştirme sıkılığı sağlar; yüksek basınçlarda su sızdırmazlığını garanti eder.",
    },
  },
  {
    text: "KULLANIM ALANLARI VE AVANTAJLARI",
    component: <CtpManholTabSecond />,
    key: "advantages",
    productBannerDetails: {
      bannerUrl: "/ctp-kayar-urun.png",
      title: "CTP KAYAR MANŞON",
      description:
        "Boru üzerinde her iki yönde de hareket edebilecek şekilde tasarlanmış profil yapısı sayesinde, hasar görmüş boru hattı tamirinde ve montaj boşluklarının kapatılmasında ara kapama gibi teknik problemlerin çözümüne, korozyona uğramayan CTP kompozit malzeme ile çözüm sunar.",
    },
  },

  {
    text: "TASARIM VE AKSESUARLAR",
    component: <CtpManholTabThird />,
    key: "design",
    productBannerDetails: {
      bannerUrl: "/ctp-jacking-urun.png",
      title: "CTP Jacking Manşon",
      description:
        "Yeni geliştirilen CTP jacking manşon, kazısız uygulamalarda kullanılan çelik manşonun alternatifi olarak tasarlanmıştır.",
    },
  },
  {
    text: "DÖŞEME VE TEKNİK BİLGİLER",
    component: <CtpManholTabFourth />,
    key: "technical",
    productBannerDetails: {
      bannerUrl: "/ctp-jacking-urun.png",
      title: "CTP Jacking Manşon",
      description:
        "Yeni geliştirilen CTP jacking manşon, kazısız uygulamalarda kullanılan çelik manşonun alternatifi olarak tasarlanmıştır.",
    },
  },
  {
    text: "BROŞÜR VE DÖKÜMANLAR",
    component: <CtpManholTabFifth />,
    key: "",
    productBannerDetails: {
      bannerUrl: "/ctp-jacking-urun.png",
      title: "CTP Jacking Manşon",
      description:
        "Yeni geliştirilen CTP jacking manşon, kazısız uygulamalarda kullanılan çelik manşonun alternatifi olarak tasarlanmıştır.",
    },
  },
];

const CtpManhol = () => {
  return (
    <>
      <ProductDetailTemplate
        tabs={tabs}
        onTabChange={(index) => {
          const selectedTab = tabs[index];

          setProductBannerDetails(selectedTab.productBannerDetails);
        }}
        productBanner={
          <ProductDetailBanner
            bannerUrl=""
            description="The basic models are well accepted by the designers and end users according to the general requirements of the non-pressure lines such as gravity sewer, wastewater lines and stormwater lines."
            breadcrumbText="CTP MANŞON"
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

export default CtpManhol;
