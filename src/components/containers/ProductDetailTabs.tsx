import React, { useState } from "react";
import Button from "../Button";

type Props = {
  tabs: string[];
};

const ProductDetailTabs = ({
  onChange = () => {},
  selectedIndex = 0,
  tabs,
  className,
  children,
}: Props) => {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <div className={`${className} flex flex-col`}>
      <div className="flex space-x-4">
        {tabs.map((tab, index) => (
          <Button
            className="h-[60px] flex-1 px-3 py-2"
            variant={selectedTab === index ? "primary" : "gray"}
            onClick={() => {
              console.log("test");
              setSelectedTab(index);
              onChange(index);
            }}
          >
            {tab}
          </Button>
        ))}
      </div>

      <div>
        {children({
          index: selectedTab,
        })}
      </div>
    </div>
  );
};

export default ProductDetailTabs;
