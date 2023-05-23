import React from "react";
import FooterLogo from "@/components/icons/FooterLogo";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div>
      <div className="relative flex flex-col gap-y-6 py-8 text-center text-white">
        <img
          src="/footer-bg.png"
          className="absolute bottom-0 left-0 right-0 top-0 -z-10 h-full w-full"
        />

        <FooterLogo className="mx-auto h-[40px] w-[250px]" />

        <h4 className="mx-auto w-5/12 px-4 leading-[30px]">
          SUPERLIT, “Sürekli Elyaf Sarma”, “Savurma Döküm” ve “Helisel Sarma”
          yöntemleriyle Türkiye’de 3 farklı teknoloji ile cam elyaf takviyeli
          polyester (CTP) boru üretimi yapabilen tek boru üreticisidir.
        </h4>

        <img src="/karamanci-logo.png" className="mx-auto h-16 w-16" />

        <h4>
          <span className="font-semibold">SUPERLİT</span> bir{" "}
          <span className="font-semibold">KAMANCI HOLDİNG</span> kuruluşudur.
        </h4>
      </div>

      <div className="flex w-full justify-between bg-custom-gray10 py-6 text-white lg:px-[150px]">
        <div>KVKK Metni | Bilgi Toplumu Hizmetleri | Sürdürülebilirlik</div>
        <div>
          © {new Date().getFullYear()} SUPERLIT Boru San. A.Ş. her hakkı
          saklıdır.
        </div>
      </div>
    </div>
  );
};

export default Footer;
