import React from "react";
import CustomSlider from "../CustomSlider";
import RightLinkButton from "../RightLinkButton";
import Button from "../Button";
import Line from "../Line";
import Logo from "../Logo";

const HomeNews = (props: Props) => {
  return (
    <div className="py-[50px]">
      <h2 className="mb-16 text-center font-bold tracking-widest lg:text-3xl">
        SON HABERLER
      </h2>

      <div className="mb-16 flex">
        <NewsItem />
        <NewsItem className="mx-8" />
        <NewsItem />
      </div>

      <Button className="mx-auto mb-6 px-20 py-3">TÜM HABERLER</Button>

      <div className="mx-auto w-1/2">
        <Line>
          <Logo className="text-8xl" />
        </Line>
      </div>
    </div>
  );
};

const NewsItem = ({ className }) => (
  <div className={`${className}`}>
    <img src="/news-img-1.png" className="mb-4" />

    <h3 className="mb-8 text-3xl font-bold leading-[40px] text-black">
      Hınıs Başköy Barajı Sulamasında Superlit İmzası
    </h3>

    <p className="mb-8 text-custom-gray6">
      Hınıs Başköy Barajı Sulaması Malzeme Alımı 2.Kısım sözleşmesi 04.01.2023
      tarihinde DSİ 8.Bölge Müdürlüğünde Sayın Bölge Müdürümüz Oğuzhan Yavuz
      tarafından imzalanmıştır.
    </p>

    <RightLinkButton className="text-red">DETAYLAR</RightLinkButton>
  </div>
);

export default HomeNews;
