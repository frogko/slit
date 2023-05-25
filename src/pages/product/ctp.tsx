import Container from "@/components/Container";
import ProductDetailBanner from "@/components/containers/ProductDetailBanner";
import ProductDetailTabs from "@/components/containers/ProductDetailTabs";
import { useRouter } from "next/router";
import React from "react";

type Props = {};

const tabs = [
  "ÜRETİM TEKNOLOJİLERİMİZ",
  "KULLANIM ALANLARI VE AVANTAJLARI",
  "BORU ÇAPLARI VE TEKNİK ÖZELLİKLERİ",
  "BROŞÜR VE DÖKÜMANLAR",
];
const ctp = (props: Props) => {
  const router = useRouter();

  return (
    <div>
      <ProductDetailBanner />

      <Container>
        <ProductDetailTabs className="absolute z-[3] -my-9" tabs={tabs}>
          {({ index }) => (
            <div className="mt-8">
              {index === 0 && <div>1</div>}
              {index === 1 && <div>2</div>}
              {index === 2 && <div>3</div>}
              {index === 3 && <div>4</div>}
              {index === 4 && <div>5</div>}
            </div>
          )}
        </ProductDetailTabs>
      </Container>
    </div>
  );
};

export default ctp;
