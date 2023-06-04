import React, { useState } from "react";
import Button from "../Button";

type Props = {
  tabs: {
    text: string;
    component: React.ReactNode;
    key: string;
  }[];
  activeTab: string;
  selectedIndex?: number;
  className?: string;
  onChange?: (key: string) => void;
  children: ({ selectedTabKey }: { selectedTabKey: string }) => React.ReactNode;
  buttonClass?: string;
};

const ProductDetailTabs = ({
  onChange = () => {},
  activeTab,
  tabs,
  className,
  children,
  buttonClass,
}: Props) => {
  const [selectedTab, setSelectedTab] = useState(activeTab);

  return (
    <div className={`${className} flex flex-col`}>
      <div className="absolute left-0 top-0 flex w-full space-x-4 px-[150px]">
        {tabs.map((tab) => (
          <Button
            className={`h-[60px] flex-1 px-3 py-2 ${buttonClass}`}
            variant={selectedTab === tab.key ? "primary" : "gray"}
            onClick={() => {
              setSelectedTab(tab.key);
              onChange(tab.key);
            }}
          >
            {tab.text}
          </Button>
        ))}
      </div>

      {children({
        selectedTabKey: selectedTab,
      })}
    </div>
  );
};

export default ProductDetailTabs;
