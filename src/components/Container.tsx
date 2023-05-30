import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: Props) => {
  return (
    <div
      className={`mx-auto w-full max-w-[1728px] px-5 xl:px-[150px] ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
