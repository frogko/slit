import React from "react";
import ProductDetailTabs from "./ProductDetailTabs";

type Props = {
  tabs: {
    text: string;
    component: React.ReactNode;
    key: string;
  }[];
  activeTabKey: string;
  productBanner: React.ReactNode;
  onTabChange?: (activeKey: string) => void;
  buttonClass?: string;
};

const ProductDetailTemplate = ({
  tabs,
  productBanner,
  onTabChange = () => {},
  buttonClass,
  activeTabKey,
}: Props) => {
  return (
    <div className="relative bg-custom-gray14 pb-4">
      {productBanner}

      <ProductDetailTabs
        activeTab={activeTabKey}
        className="relative left-0 z-[3] -my-9 mx-auto mb-16 w-full px-5 pt-9 lg:max-w-[1728px] lg:px-[150px]"
        tabs={tabs}
        onChange={(activeKey) => onTabChange(activeKey)}
        buttonClass={buttonClass}
      >
        {() => (
          <div className="bg-white px-[60px] py-12 pt-16">
            {tabs.map((tab) => {
              const Component = tab.component;
              return activeTabKey === tab.key && Component;
            })}
          </div>
        )}
      </ProductDetailTabs>
    </div>
  );
};

export default ProductDetailTemplate;
