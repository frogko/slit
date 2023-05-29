import React from "react";

type Props = {};

const Container = ({ children, className }: Props) => {
  return (
    <div className={`mx-auto max-w-[1728px] px-5 lg:px-[150px] ${className}`}>
      {children}
    </div>
  );
};

export default Container;
