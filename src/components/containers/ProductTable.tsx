import React from "react";

type Props = {
  data: {
    head: string[];
    body: {
      text: string[];
    }[];
  };
};

const ProductTable = ({ data }: Props) => {
  return (
    <div className="flex flex-col border border-gray-400">
      <div className="flex">
        {data.head.map((item, index) => (
          <div
            className={`flex-1 py-2 text-center text-white ${
              index % 2 === 0 ? "bg-red-700" : "bg-red-800"
            }`}
            dangerouslySetInnerHTML={{ __html: item }}
          />
        ))}
      </div>

      <div className="divide-y divide-gray-400">
        {data.body.map((item, bodyIndex) => (
          <div key={bodyIndex} className="flex divide-x divide-gray-400">
            {item.text.map((bodyText, index) => (
              <div
                key={index}
                className={`flex-1 py-2 text-center ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-200"
                }`}
              >
                {bodyText}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductTable;
