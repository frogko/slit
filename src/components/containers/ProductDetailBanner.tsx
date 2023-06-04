import React from "react";
import Container from "../Container";
import Button from "../Button";
import Link from "next/link";
import VideoIcon from "@/components/icons/VideoIcon";
import PdfIcon from "@/components/icons/PdfIcon";

type Props = {
  bannerUrl?: string;
  title: string;
  description: string;
  breadcrumbText: string;
};

const ProductDetailBanner = ({
  bannerUrl,
  title,
  description,
  breadcrumbText,
}: Props) => {
  return (
    <div className="relative z-[3] h-[460px] w-full">
      <img
        src="/head-bg.png"
        className="absolute bottom-0 left-0 right-0 top-0 -z-[1] h-full w-full"
      />
      <Container className="z-3 h-full">
        <div className="flex h-full">
          <div className="flex w-1/2 items-center">
            <img src={bannerUrl} className="mr-8 h-60 w-60" />
            <div className="space-y-4">
              <ProductTag text="ÜRÜNLER VE HİZMETLER" />
              <ProductTitle text={title} />
              <ProductDescription text={description} />
            </div>
          </div>
          <div className="ml-auto flex w-1/2 flex-col items-end justify-between py-10">
            <BreadCrumb text={breadcrumbText} />

            <div className="flex flex-col">
              <Button className="mb-3 flex !w-[340px] items-center justify-center space-x-2 py-3">
                <VideoIcon className="h-8 w-8" />
                <span>ÜRÜN VİDEOSU</span>
              </Button>
              <Button
                variant="ghost"
                className="flex !w-[340px] items-center justify-center space-x-2 py-3"
              >
                <PdfIcon className="h-7 w-7" />
                <span>ÜRÜN BROŞÜRÜ</span>
              </Button>
            </div>

            <div />
          </div>
        </div>
      </Container>
    </div>
  );
};

const ProductTag = ({ text }) => (
  <div className="max-w-max rounded-md bg-custom-red p-[2px] font-medium text-white">
    {text}
  </div>
);
const ProductTitle = ({ text }) => (
  <div className="text-3xl font-bold text-white">{text}</div>
);
const ProductDescription = ({ text }) => (
  <div className="text-sm leading-6 text-white">{text}</div>
);

const BreadCrumb = ({ text }) => (
  <div className="text-white">
    <Link href="/">ANASAYFA</Link>
    <span className="mx-2">/</span> <Link href="/">ÜRÜNLER VE HİZMETLER</Link>
    <span className="mx-2">/</span>
    <span>{text}</span>
  </div>
);

export default ProductDetailBanner;
