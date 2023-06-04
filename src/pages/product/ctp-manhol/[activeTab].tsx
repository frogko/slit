// import CtpMansonTabFirst from "@/components/containers/CtpMansonTabFirst";
// import CtpMansonTabSecond from "@/components/containers/CtpMansonTabSecond";
// import CtpMansonTabThird from "@/components/containers/CtpMansonTabThird";
// import ProductDetailBanner from "@/components/containers/ProductDetailBanner";
// import ProductDetailTemplate from "@/components/containers/ProductDetailTemplate";
// import React, { useState } from "react";

// const tabs = [
//   {
//     text: "CTP FULL-FACE® MANŞON",
//     component: <CtpMansonTabFirst />,
//     productBannerDetails: {
//       bannerUrl: "/ctp-fullface-urun.png",
//       title: "CTP Full-Face Manşon",
//       description:
//         "SUPERLİT CTP manşonlarının iç yüzeyi EPDM conta ile tamamen kaplıdır ve benzer sistemlerle karşılaştırıldığında daha güvenli birleştirme sıkılığı sağlar; yüksek basınçlarda su sızdırmazlığını garanti eder.",
//     },
//   },
//   {
//     text: "CTP KAYAR MANŞON",
//     component: <CtpMansonTabSecond />,
//     productBannerDetails: {
//       bannerUrl: "/ctp-kayar-urun.png",
//       title: "CTP KAYAR MANŞON",
//       description:
//         "Boru üzerinde her iki yönde de hareket edebilecek şekilde tasarlanmış profil yapısı sayesinde, hasar görmüş boru hattı tamirinde ve montaj boşluklarının kapatılmasında ara kapama gibi teknik problemlerin çözümüne, korozyona uğramayan CTP kompozit malzeme ile çözüm sunar.",
//     },
//   },

//   {
//     text: "CTP JACKING MANŞON",
//     component: <CtpMansonTabThird />,
//     productBannerDetails: {
//       bannerUrl: "/ctp-jacking-urun.png",
//       title: "CTP Jacking Manşon",
//       description:
//         "Yeni geliştirilen CTP jacking manşon, kazısız uygulamalarda kullanılan çelik manşonun alternatifi olarak tasarlanmıştır.",
//     },
//   },
// ];

// const CtpManhol = () => {
//   return (
//     <>
//       <ProductDetailTemplate
//         tabs={tabs}
//         onTabChange={(index) => {
//           const selectedTab = tabs[index];

//           setProductBannerDetails(selectedTab.productBannerDetails);
//         }}
//         productBanner={
//           <ProductDetailBanner
//             bannerUrl=""
//             description="The basic models are well accepted by the designers and end users according to the general requirements of the non-pressure lines such as gravity sewer, wastewater lines and stormwater lines."
//             breadcrumbText="CTP MANŞON"
//           />
//         }
//       />
//     </>
//   );
// };

// export default CtpManhol;
