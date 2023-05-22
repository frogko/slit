import Link from "next/link";
import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";

type Props = {
  className: string;
  children: React.ReactElement;
  href: string;
};

const RightLinkButton = ({ href = "", className, children }: Props) => {
  return (
    <Link href={href} className={`${className} flex items-center`}>
      <AiOutlineDoubleRight className="mr-2 text-2xl" />
      <span className="font-semibold leading-none">{children}</span>
    </Link>
  );
};

export default RightLinkButton;
