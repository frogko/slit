import React, { useState } from "react";
import Button from "../Button";

type Props = {
  tabs: string[];
  selectedIndex?: number;
  className?: string;
  onChange?: (index: number) => void;
  children: ({ index }: { index: number }) => React.ReactNode;
};

const ProductDetailTabs = ({
  onChange = () => {},
  selectedIndex = 0,
  tabs,
  className,
  children,
}: Props) => {
  const [selectedTab, setSelectedTab] = useState(selectedIndex);

  return (
    <div className={`${className} flex flex-col`}>
      <div className="absolute left-0 top-0 flex w-full space-x-4 px-[150px]">
        {tabs.map((tab, index) => (
          <Button
            className="h-[60px] flex-1 px-3 py-2"
            variant={selectedTab === index ? "primary" : "gray"}
            onClick={() => {
              setSelectedTab(index);
              onChange(index);
            }}
          >
            {tab}
          </Button>
        ))}
      </div>

      {children({
        index: selectedTab,
      })}
    </div>
  );
};

export default ProductDetailTabs;
