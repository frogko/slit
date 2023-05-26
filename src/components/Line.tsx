import React from "react";
import cx from "classnames";

type Props = {};

const Line = ({ before = true, after = true, children }: Props) => {
  const lineClass = cx("flex items-center", {
    "before:h-[2px] before:[bg-red-600] before:border-red-600 before:w-full":
      before,
    "after:h-[2px] after:[bg-red-600] after:border-red-600 after:w-full": after,
  });

  return (
    <div className="flex items-center">
      <div className="h-[2px] flex-grow bg-red-600"></div>
      <div className="px-4">{children}</div>
      <div className="h-[2px] flex-grow bg-red-600"></div>
    </div>
  );
};

export default Line;
