import React from "react";
import cx from "classnames";

interface Props extends React.HTMLProps<HTMLDivElement> {
  variant?: "primary" | "secondary";
}

const Button = ({ children, variant = "primary", className }: Props) => {
  const buttonClass = cx(
    className,
    "pointer text-center w-max rounded-sm cursor-pointer",
    {
      "bg-red px-6 py-1 text-white font-bold": variant === "primary",
      "font-bold px-5 py-3 text-custom-green": variant === "secondary",
    }
  );
  return <div className={buttonClass}>{children}</div>;
};

export default Button;
