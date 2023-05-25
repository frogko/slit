import React from "react";

type Props = {};

const Container = ({ children, className }: Props) => {
  return <div className={`px-5 lg:px-[150px] ${className}`}>{children}</div>;
};

export default Container;
