import React from "react";
import Container from "../Container";
import Button from "../Button";
import Link from "next/link";

type Props = {};

const ProductDetailBanner = (props: Props) => {
  return (
    <div className="relative z-[3] h-[460px] w-full">
      <img
        src="/head-bg.png"
        className="absolute bottom-0 left-0 right-0 top-0 -z-[1] h-full w-full"
      />
      <Container className="z-3 h-full">
        <div className="flex h-full">
          <div className="flex w-1/2 items-center">
            <img src="/ctp-boru-urun.png" className="mr-8 h-60 w-60" />
            <div className="space-y-4">
              <ProductTag />
              <ProductTitle />
              <ProductDescription />
            </div>
          </div>
          <div className="ml-auto flex w-1/2 flex-col items-end justify-between py-10">
            <BreadCrumb text="CTP BORU" />

            <div className="flex flex-col">
              <Button className="mb-3 !w-[340px] py-3">ÜRÜN VİDEOSU</Button>
              <Button variant="ghost" className="!w-[340px] py-3">
                ÜRÜN BROŞÜRÜ
              </Button>
            </div>

            <div />
          </div>
        </div>
      </Container>
    </div>
  );
};

const ProductTag = () => (
  <div className="max-w-max rounded-md bg-red-600 p-[2px] font-medium text-white">
    ÜRÜNLER VE HİZMETLER
  </div>
);
const ProductTitle = () => (
  <div className="text-3xl font-bold text-white">CTP BORU</div>
);
const ProductDescription = () => (
  <div className="text-sm leading-6 text-white">
    CTP boru esnek davranış gösteren, cam elyaf takviyeli termoset reçine ve
    silika kumdan oluşan kompozit bir malzemedir.
  </div>
);

const BreadCrumb = ({ text }) => (
  <div className="text-white">
    <Link href="/">ANASAYFA</Link>
    <span className="mx-2">/</span> <Link href="/">ÜRÜNLER VE HİZMETLER</Link>
    <span className="mx-2">/</span> {text}
  </div>
);

export default ProductDetailBanner;
