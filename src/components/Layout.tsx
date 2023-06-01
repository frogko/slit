import React from "react";
import Header from "@/components/Header";
import TopHeader from "@/components/TopHeader";
import MobileHeader from "@/components/MobileHeader";
import Container from "./Container";
import Footer from "@/components/Footer";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="hidden md:block">
        <TopHeader />
      </div>

      <div className="block xl:hidden">
        <MobileHeader />
      </div>

      <div className="hidden xl:block">
        <Container>
          <Header />
        </Container>
      </div>

      {children}

      <Footer />
    </>
  );
};

export default Layout;
