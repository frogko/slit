import React from "react";
import ProductTable from "./ProductTable";

const data = {
  head: [
    "Boru Anma Çapı <br /> (mm)",
    "Boru Anma Çapı <br /> (inç)",
    "Boru Nominal Dış Çapı <br /> (mm)",
  ],
  body: [
    {
      text: ["300", "12", "324"],
    },
    {
      text: ["350", "14", "376,4"],
    },
    {
      text: ["400", "16", "427,3"],
    },
    {
      text: ["450", "18", "475,8"],
    },
    {
      text: ["500", "20", "530,3"],
    },
    {
      text: ["600", "24", "633"],
    },
    {
      text: ["700", "28", "718,5"],
    },
    {
      text: ["800", "32", "820,5"],
    },
    {
      text: ["900", "36", "924"],
    },
    {
      text: ["1000", "40", "1026,5"],
    },
  ],
};

const CtpTabThird = () => {
  return (
    <div>
      <h1 className="mb-8 text-custom-mds font-semibold text-custom-red">
        CTP Boru Çapları
      </h1>

      <div className="mb-6 w-1/2 text-custom-basex leading-9 text-custom-red">
        SUPERLIT CTP Boruları ve Ek Parçaları aşağıdaki standart ölçülerde
        üretilirler. Müşteri talebi üzerine ara çap üretimi de mümkündür.
      </div>

      <div className="mb-16 w-1/2">
        <ProductTable data={data} />
      </div>

      <div className="inline-flex flex-col justify-end ">
        <p className="mb-8 text-custom-mds font-semibold uppercase tracking-wider text-custom-red">
          TEKNİK ÖZELLİKLERİ
        </p>
        <div className="flex flex-col items-start justify-end space-y-10">
          <div className="flex flex-col  justify-end ">
            <h3 className="text-lg font-semibold leading-9 tracking-wider text-custom-gray16">
              Akış Hızı
            </h3>
            <li className="mt-5 list-disc text-lg font-medium leading-9 text-custom-gray21">
              Standart CTP boru için önerilen akış hızı max. 4 m/sn’dir. Özel
              tasarımla daha yüksek akışkan hızına izin veren boru
              tasarlanabilmektedir.
            </li>
          </div>
          <div className="flex flex-col  justify-end">
            <h3 className="h-7 w-60 text-lg font-semibold leading-9 tracking-wider text-custom-gray16">
              Akış Katsayısı
            </h3>
            <div className="flex flex-col items-start justify-end">
              <p className="mt-5 list-disc text-lg font-medium leading-9 text-custom-gray21">
                Hidrolik hesaplamalarda SUPERLİT CTP boruları için kullanılacak
                değerler:
              </p>
              <div className="mb-4 space-y-4 text-custom-gray21">
                <li className="text-lg">
                  Hazen–William akış katsayısı: C = 150
                </li>

                <li className="text-lg">Manning katsayısı: n = 0,009</li>

                <li className="text-lg">Colebrook–White katsayısı:</li>
              </div>
            </div>

            <div className="inline-flex  w-3/5 justify-end border border-custom-red bg-white py-4 pl-7 pr-4">
              <p className="text-left text-lg font-medium leading-9 text-custom-gray21">
                Sürekli elyaf sarma metodu ile üretilen borular için k=0,029
                mmsavurma söküm metodu ile üretilen borular için k=0,012 mm
              </p>
            </div>
          </div>
          <div className="flex list-disc flex-col  justify-end ">
            <h3 className="text-lg font-semibold leading-9 tracking-wider text-custom-gray16">
              UV Direnci
            </h3>
            <li className="mt-5 text-lg font-medium leading-9 text-custom-gray21">
              CTP boruların performansı UV ışınlarından olumsuz etkilenmez.
              Yüzeyde mukavemeti etkilemeyen renk değişimleri gözlenmesi
              normaldir.
            </li>
          </div>
          <div className="flex list-disc flex-col  justify-end ">
            <h3 className="text-lg font-semibold leading-9 tracking-wider text-custom-gray16">
              Poisson Oranı
            </h3>
            <li className="mt-5 text-lg font-medium leading-9 text-custom-gray21">
              Standart CTP borular için mühendislik hesaplamalarında
              kullanılabilecek poisson oranı 0,22 – 0,29 arasındadır.
            </li>
          </div>
          <div className="flex list-disc flex-col  justify-end ">
            <h3 className="text-lg font-semibold leading-9 tracking-wider text-custom-gray16">
              Sıcaklık
            </h3>
            <li className="mt-5 text-lg font-medium leading-9 text-custom-gray21">
              Standart CTP boruların servis sıcaklığı -40°C ile + 35°C
              arasındadır. 50°C ‘ye kadar olan servis sıcalıkları için özel boru
              tasarımı yapılmaktadır.
            </li>
          </div>
          <div className="flex flex-col  justify-end ">
            <h3 className="h-1/4 w-72 text-lg font-semibold leading-9 tracking-wider text-custom-gray16">
              Termal Genleşme Katsayısı
            </h3>
            <p className="mt-5 text-lg font-medium leading-9 text-custom-gray21">
              SUPERLİT CTP boruların eksenel yönde uzama ve kısalma ısı
              katsayısı :<br />
              24 ile 30 x (1/106)mm/mm/°C aralığındadır.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtpTabThird;
