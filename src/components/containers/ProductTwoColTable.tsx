import React from "react";

type Props = {
  data: {
    left: string;
    right: string;
  }[];
  className?: String;
};

const ProductTwoColTable = ({ data, className }: Props) => {
  return (
    <div
      className={`w-full divide-y divide-gray-500 border border-gray-500 ${className}`}
    >
      {data.map((item) => (
        <div className="flex items-center divide-x">
          <div className="w-2/6 bg-red-700 px-6 py-4 text-center font-medium text-white">
            {item.left}
          </div>
          <div className="w-4/6 px-4 text-center font-medium text-custom-gray19">
            {item.right}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductTwoColTable;
