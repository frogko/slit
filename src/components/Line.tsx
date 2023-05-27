import React from "react";
import cx from "classnames";

type Props = {};

const Line = ({ before = true, after = true, children }: Props) => {
  const lineClass = cx("flex items-center", {
    "before:h-[2px] before:[bg-custom-red] before:border-custom-red before:w-full":
      before,
    "after:h-[2px] after:[bg-custom-red] after:border-custom-red after:w-full":
      after,
  });

  return (
    <div className="flex items-center">
      <div className="h-[2px] flex-grow bg-custom-red"></div>
      <div className="px-4">{children}</div>
      <div className="h-[2px] flex-grow bg-custom-red"></div>
    </div>
  );
};

export default Line;
