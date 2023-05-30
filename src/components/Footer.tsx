import React from "react";
import FooterLogo from "@/components/icons/FooterLogo";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="relative flex flex-col text-center text-white">
        <img
          src="/footer-bg.png"
          className="absolute bottom-0 left-0 right-0 top-0 -z-10 h-full w-full"
        />

        <div className="mx-auto max-w-[1728px] py-8">
          <FooterLogo className="mx-auto mb-4 h-[40px] w-[250px]" />

          <h4 className="mx-auto mb-4 w-full px-4 leading-[30px] lg:w-4/12">
            SUPERLIT, “Sürekli Elyaf Sarma”, “Savurma Döküm” ve “Helisel Sarma”
            yöntemleriyle Türkiye’de 3 farklı teknoloji ile cam elyaf takviyeli
            polyester (CTP) boru üretimi yapabilen tek boru üreticisidir.
          </h4>

          <img src="/karamanci-logo.png" className="mx-auto mb-4 h-16 w-16" />

          <h4>
            <span className="font-semibold">SUPERLİT</span> bir{" "}
            <span className="font-semibold">KAMANCI HOLDİNG</span> kuruluşudur.
          </h4>
        </div>

        <div className="w-full  bg-custom-gray10 px-5 py-6 text-white">
          <div className="mx-auto flex max-w-[1728px] flex-col justify-between xl:flex-row xl:px-[150px]">
            <DesktopItems />

            <div className="mb-4 flex flex-col space-y-2 text-custom-sm xl:hidden">
              <span>KVKK Metni</span>
              <span>Bilgi Toplumu Hizmetlerik</span>
              <span>Sürdürülebilirlik</span>
            </div>
            <div className="text-custom-sm">
              © {new Date().getFullYear()} SUPERLIT Boru San. A.Ş. her hakkı
              saklıdır.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DesktopItems = () => (
  <div className="hidden items-center space-x-4 text-custom-sm xl:flex">
    <Link href="">KVKK Metni &nbsp;</Link> |
    <Link href="">Bilgi Toplumu Hizmetleri &nbsp;</Link> |
    <Link href=""> Sürdürülebilirlik</Link>
  </div>
);

export default Footer;
