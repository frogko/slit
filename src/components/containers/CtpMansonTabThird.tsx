import React from "react";
import Line from "../Line";
import ProductTable from "./ProductTable";

type Props = {};

const CtpMansonTabThird = (props: Props) => {
  return (
    <div>
      <p className="mb-8 text-lg font-medium leading-9 text-custom-gray15">
        Metal manşonların korozyon sebebiyle hizmet ömrünü sınırlandığı agresif
        toprak ortamında, korozyon sorununa benzersiz çözümler sunar.
      </p>

      <p className="mb-8 text-lg font-medium leading-9 text-custom-gray15">
        Yeni kompozit jacking manşon, benzer ve hatta daha yüksek korozif
        koşullarda en az 50 yıl hizmet ömrüne sahiptir. Özel tasarımlı tam yüz
        (Full- Face®) EPDM conta profil, gövdenin CTP yapısı sayesinde
        sızdırmazlık sağlar ve ISO 25780 standardının performans
        gereksinimlerine tam olarak uyar.
      </p>

      <h2 className="mb-8 text-3xl font-semibold uppercase tracking-wider text-custom-red">
        DİZAYN TABLOSU
      </h2>

      <img src="/ctp-jacking-dizayn.png" className="mb-8" />

      <div className="mb-8 h-[1px] w-full bg-custom-red" />

      <ProductTable
        data={{
          head: [
            "Pipe OD <br /> (mm)",
            "PN <br /> (Bar)",
            "Width, w <br /> (mm)",
            "Coupling OD <br /> (mm)",
          ],
          body: [{ text: ["345"] }],
        }}
      />
    </div>
  );
};

export default CtpMansonTabThird;
