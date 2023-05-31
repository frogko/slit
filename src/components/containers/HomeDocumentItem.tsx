import React from "react";
import DownloadIcon from "@/components/icons/DownloadIcon";

const HomeDocumentItem = ({ text }: { text: string }) => (
  <div className="relative  w-full">
    <div className="absolute -top-3 left-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-custom-red">
      <DownloadIcon />
    </div>
    <div className="custom-base rounded-lg bg-custom-gray8 px-7 pb-6 pt-8 text-center font-semibold text-custom-gray7">
      {text}
    </div>
  </div>
);

export default HomeDocumentItem;
