import React from "react";
import FooterLogo from "@/components/icons/FooterLogo";
import Link from "next/link";

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

        <h4 className="mx-auto w-full px-4 leading-[30px] lg:w-4/12">
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

      <div className="flex w-full flex-col justify-between bg-custom-gray10 px-5 py-6 text-white lg:flex-row lg:px-[150px]">
        <div className="hidden items-center space-x-4 lg:flex">
          <Link href="">KVKK Metni &nbsp;</Link> |
          <Link href="">Bilgi Toplumu Hizmetleri &nbsp;</Link> |
          <Link href=""> Sürdürülebilirlik</Link>
        </div>
        <div className="mb-4 flex flex-col space-y-2 lg:hidden">
          <span>KVKK Metni</span>
          <span>Bilgi Toplumu Hizmetlerik</span>
          <span>Sürdürülebilirlik</span>
        </div>
        <div>
          © {new Date().getFullYear()} SUPERLIT Boru San. A.Ş. her hakkı
          saklıdır.
        </div>
      </div>
    </div>
  );
};

export default Footer;
