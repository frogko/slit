import React from "react";
import LogoIcon from "@/components/icons/LogoIcon";
import Link from "next/link";

interface Props extends React.HTMLProps<HTMLDivElement> {}

const Logo = (props: Props) => {
  return (
    <Link href="/">
      <LogoIcon {...props} />
    </Link>
  );
};

export default Logo;
