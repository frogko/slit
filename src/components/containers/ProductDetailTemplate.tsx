import React from "react";
import ProductDetailTabs from "./ProductDetailTabs";

type Props = {
  tabs: {
    text: string;
    component: React.ReactNode;
  }[];
  productBanner: React.ReactNode;
  onTabChange?: (index: number) => void;
  buttonClass?: string;
};

const ProductDetailTemplate = ({
  tabs,
  productBanner,
  onTabChange = () => {},
  buttonClass,
}: Props) => {
  return (
    <div className="relative bg-custom-gray14 pb-4">
      {productBanner}

      <ProductDetailTabs
        className="relative left-0 z-[3] -my-9 mx-auto mb-16 w-full px-5 pt-9 lg:max-w-[1728px] lg:px-[150px]"
        tabs={tabs.map((tab) => tab.text)}
        onChange={(index) => onTabChange(index)}
        buttonClass={buttonClass}
      >
        {({ index }) => (
          <div className="bg-white px-[60px] py-12 pt-16">
            {tabs.map((tab, tabIndex) => {
              const Component = tab.component;
              return tabIndex === index && Component;
            })}
          </div>
        )}
      </ProductDetailTabs>
    </div>
  );
};

export default ProductDetailTemplate;
