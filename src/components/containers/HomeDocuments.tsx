import React from "react";
import HomeDocumentItem from "@/components/containers/HomeDocumentItem";

const HomeDocuments = () => {
  return (
    <>
      <h2
        className="mb-28 text-center text-custom-md font-medium tracking-widest md:text-custom-mds xl:tracking-[0.5rem]
      "
      >
        DÖKÜMANLAR
      </h2>

      <div className="grid flex-wrap gap-8 gap-y-16 md:grid-cols-3 lg:grid-cols-4 ">
        <HomeDocumentItem text="Süperlit CTP Ürün Kataloğu 2023" />
        <HomeDocumentItem text="Süperlit CTP Ürün Kataloğu 2023" />
        <HomeDocumentItem text="Süperlit CTP Ürün Kataloğu 2023" />
        <HomeDocumentItem text="Süperlit CTP Ürün Kataloğu 2023" />
        <HomeDocumentItem text="Süperlit CTP Ürün Kataloğu 2023" />
        <HomeDocumentItem text="Süperlit CTP Ürün Kataloğu 2023" />
        <HomeDocumentItem text="Süperlit CTP Ürün Kataloğu 2023" />
        <HomeDocumentItem text="Süperlit CTP Ürün Kataloğu 2023" />
      </div>
    </>
  );
};

export default HomeDocuments;
