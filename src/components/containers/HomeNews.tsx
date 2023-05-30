import React from "react";
import RightLinkButton from "../RightLinkButton";
import Button from "../Button";
import Line from "../Line";
import Logo from "../Logo";

const HomeNews = () => {
  return (
    <>
      <h2 className="mb-8 text-center text-custom-md font-medium tracking-widest md:mb-16 md:text-custom-lg md:tracking-[0.5rem]">
        SON HABERLER
      </h2>

      <div className="mb-16 flex gap-8">
        <NewsItem className=" w-full md:w-1/2 xl:block xl:w-1/3" />
        <NewsItem className=" hidden w-full md:block md:w-1/2 xl:w-1/3" />
        <NewsItem className=" hidden w-full md:w-1/2 xl:block xl:w-1/3" />
      </div>

      <Button className="mx-auto mb-6 block !px-20 py-3 text-custom-basex">
        TÜM HABERLER
      </Button>

      <div className="mx-auto w-full md:w-1/2">
        <Line>
          <Logo className="text-8xl" />
        </Line>
      </div>
    </>
  );
};

const NewsItem = ({ className }) => (
  <div className={`${className}`}>
    <img src="/news-img-1.png" className="mb-4" />

    <h3 className="mb-8 line-clamp-2 text-custom-xmd font-semibold leading-[40px] text-black md:text-custom-mds">
      Hınıs Başköy Barajı Sulamasında Superlit İmzası
    </h3>

    <p className="mb-8 leading-7 text-custom-gray6">
      Hınıs Başköy Barajı Sulaması Malzeme Alımı 2.Kısım sözleşmesi 04.01.2023
      tarihinde DSİ 8.Böxle Müdürlüğünde Sayın Böxle Müdürümüz Oğuzhan Yavuz
      tarafından imzalanmıştır.
    </p>

    <RightLinkButton className="text-custom-red">DETAYLAR</RightLinkButton>
  </div>
);

export default HomeNews;
