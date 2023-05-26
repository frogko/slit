import React from "react";
import cx from "classnames";

interface Props extends React.HTMLProps<HTMLDivElement> {
  variant?: "primary" | "secondary" | "gray" | "ghost";
}

const Button = ({
  children,
  variant = "primary",
  className,
  ...props
}: Props) => {
  const buttonClass = cx(
    className,
    "pointer text-center w-max rounded-sm cursor-pointer",
    {
      "bg-red-600 text-white font-bold": variant === "primary",
      "font-bold px-5 py-3 text-custom-green": variant === "secondary",
      "bg-custom-gray12 font-bold text-custom-gray13": variant === "gray",
      "bg-transparent font-bold text-white border-white border":
        variant === "ghost",
    }
  );
  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
