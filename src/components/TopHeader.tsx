import Button from "@/components/Button";
import React from "react";
import LinkedIcon from "@/components/icons/LinkedinIcon";
import Container from "./Container";

const TopHeader = () => {
  return (
    <div className="h-[60px] w-full bg-custom-gray4">
      <Container className="flex h-full w-full items-center justify-between">
        <LinkedIcon />

        <div className="ml-auto flex space-x-4">
          <Button className="px-6 py-1">TEKLİF AL</Button>
          <Button className="px-6 py-1">E-KATALOG</Button>
        </div>
      </Container>
    </div>
  );
};

export default TopHeader;
