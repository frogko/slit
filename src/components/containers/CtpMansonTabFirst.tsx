import React from "react";
import ProductTable from "./ProductTable";

const CtpMansonTabFirst = () => {
  return (
    <div>
      <p className="mb-8 text-lg font-medium leading-9 text-custom-gray15">
        Conta, manşona entegre olduğu için yerinden çıkmaz. Şantiyede
        takılmasına gerek yoktur.
      </p>
      <p className="mb-8 text-lg font-medium leading-9 text-custom-gray15">
        Savurma döküm ve sürekli elyaf sarma sistemleri ile üretilen aynı
        nominal çaplı SUPERLİT CTP boruları aynı dış çaplara sahiptir. Bu yüzden
        hangi metodla üretilmiş olursa olsun, aynı anma çapına sahip borularda
        aynı SUPERLİT CTP manşonları kullanılabilmektedir.
      </p>

      <div className="w-3/4">
        <div className="flex">
          <div className="flex w-[12.5%] items-center justify-center bg-red-700 py-3 text-center text-white">
            Anma Çapı
          </div>
          <div className="flex w-[12.5%] items-center justify-center bg-red-800 py-3 text-center text-white">
            Manşon Genişliği
          </div>
          <div className="flex flex-1 items-center justify-center bg-red-700 py-3 text-center text-white">
            Manşon Dış Çapı De (mm)
          </div>
        </div>
        <ProductTable
          data={{
            head: [
              "DN (mm)",
              "W (mm)",
              "PN (1-10)",
              "PN 12",
              "PN 16",
              "PN 20",
              "PN 25",
              "PN 32",
            ],
            body: [
              {
                text: ["300", "200", "360", "365", "370", "375", "380", "385"],
              },
              {
                text: ["350", "220", "410", "415", "420", "425", "430", "435"],
              },
              {
                text: ["400", "242", "460", "465", "470", "475", "480", "485"],
              },
              {
                text: ["450", "242", "510", "515", "520", "525", "530", "535"],
              },
              {
                text: ["500", "242", "565", "570", "575", "580", "585", "590"],
              },
              {
                text: ["600", "242", "670", "675", "680", "685", "690", "695"],
              },
              {
                text: ["700", "260", "760", "765", "770", "775", "780", "785"],
              },
              {
                text: ["800", "260", "860", "865", "870", "875", "880", "885"],
              },
              {
                text: ["900", "260", "965", "970", "975", "980", "985", "990"],
              },
              {
                text: [
                  "1000",
                  "260",
                  "1070",
                  "1075",
                  "1080",
                  "1085",
                  "1090",
                  "1095",
                ],
              },
            ],
          }}
        />
      </div>

      <h2 className="mb-12 mt-16 text-3xl font-semibold uppercase tracking-wider text-custom-red">
        Manşonlarda açısal sapma
      </h2>

      <p className="mb-8 text-lg font-medium leading-9 text-custom-gray15">
        Manşonlar EN 1119, ISO 8639 ve ASTM 4161performans kriterlerini (açısal
        sapma, basınç, dış yük ve vakum) sağlayacak şekilde tasarlanmıştır.
        Standartların izin verdiği açısal sapma değerleri aşağıdaki tabloda
        verilmiştir
      </p>

      <div className="grid w-3/4 grid-cols-2">
        <img src="/ctp-fullface-acisalsapma.png" className=" h-full pr-6" />

        <ProductTable
          className="m-auto h-max"
          data={{
            head: [
              "Boru Çapı",
              "Manşon Üzerinde Uygulanabilecek Maksimum Açısal Sapma (Derece)",
            ],
            body: [
              {
                text: ["DN 300 - DN 500", "3,0°"],
              },
              {
                text: ["DN 600 - DN 900", "2,0°"],
              },
              {
                text: ["DN 1000 - DN 1800", "1,0°"],
              },
              {
                text: ["DN 1900 - DN 4000", "0,5°"],
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default CtpMansonTabFirst;
