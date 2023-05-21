import React from "react";
import cx from "classnames";

interface Props extends HTMLButtonElement {
  variant: "primary" | "secondary";
}

const Button = ({ children, variant = "primary", className }: Props) => {
  const buttonClass = cx(className, {
    "bg-red px-6 py-2 text-white font-bold": variant === "primary",
  });
  return <div className={buttonClass}>{children}</div>;
};

export default Button;
