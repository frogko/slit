import React from "react";
import DownloadIcon from "@/components/icons/DownloadIcon";

type Props = {};

const HomeDocuments = (props: Props) => {
  return (
    <>
      <h2 className="mb-28 text-center text-xl font-bold tracking-[1rem] tracking-widest lg:text-3xl">
        DÖKÜMANLAR
      </h2>

      <div className="grid flex-wrap gap-8 gap-y-16 md:grid-cols-3 lg:grid-cols-4 ">
        <DocumentItem text="Süperlit CTP Ürün Kataloğu 2023" />
        <DocumentItem text="Süperlit CTP Ürün Kataloğu 2023" />
        <DocumentItem text="Süperlit CTP Ürün Kataloğu 2023" />
        <DocumentItem text="Süperlit CTP Ürün Kataloğu 2023" />
        <DocumentItem text="Süperlit CTP Ürün Kataloğu 2023" />
        <DocumentItem text="Süperlit CTP Ürün Kataloğu 2023" />
        <DocumentItem text="Süperlit CTP Ürün Kataloğu 2023" />
        <DocumentItem text="Süperlit CTP Ürün Kataloğu 2023" />
      </div>
    </>
  );
};

const DocumentItem = ({ text }) => (
  <div className="relative">
    <div className="absolute -top-3 left-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-red">
      <DownloadIcon />
    </div>
    <div className="rounded-lg bg-customg-gray8 py-6 text-center font-semibold text-custom-gray7">
      {text}
    </div>
  </div>
);

export default HomeDocuments;
