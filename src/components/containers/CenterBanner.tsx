import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  breadCrumbText: string;
  imgUrl: string;
};

const CenterBanner = ({ title, breadCrumbText, imgUrl }: Props) => {
  return (
    <div className="relative z-[3] flex h-[283px] w-full flex-col text-white">
      <img
        src={imgUrl}
        className="absolute bottom-0 left-0 right-0 top-0 -z-[1] h-full w-full"
      />

      <div className="flex h-full flex-col items-center justify-center">
        <h1 className="mb-4 text-3xl font-semibold tracking-[10px]">{title}</h1>
        <div>
          <Link href="/">ANASAYFA</Link> <span className="mx-2 text-xl">/</span>{" "}
          {breadCrumbText}
        </div>
      </div>
    </div>
  );
};

export default CenterBanner;
