import React from "react";

const HomeLogos = () => {
  return (
    <div className="hidden gap-4 md:grid md:grid-cols-4 lg:flex lg:space-x-4">
      <LogoItem logoUrl="/logo-ctp.png" />
      <LogoItem logoUrl="/logo-kompozit.png" />
      <LogoItem logoUrl="/logo-wwc.png" />
      <LogoItem logoUrl="/logo-uvdb.png" />
      <LogoItem logoUrl="/logo-500.png" />
      <LogoItem logoUrl="/logo-tim.png" />
      <LogoItem logoUrl="/logo-wras.png" />
    </div>
  );
};

const LogoItem = ({ logoUrl }: { logoUrl: string }) => (
  <div className="flex flex-1 items-center justify-center rounded-xl bg-white p-8 shadow-md">
    <img src={logoUrl} />
  </div>
);

export default HomeLogos;
