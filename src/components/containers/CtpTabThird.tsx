import React from "react";

type Props = {};

const CtpTabThird = (props: Props) => {
  return (
    <div>
      <div className="inline-flex flex-col  justify-end space-y-12">
        <p className="text-3xl font-semibold uppercase tracking-wider text-red-600">
          TEKNİK ÖZELLİKLERİ
        </p>
        <div className="flex flex-col items-start justify-end space-y-11">
          <div className="flex flex-col  justify-end space-y-3">
            <p className="text-lg font-semibold leading-9 tracking-wider text-gray-600">
              Akış Hızı
            </p>
            <p className="text-lg font-medium leading-9 text-gray-400">
              Standart CTP boru için önerilen akış hızı max. 4 m/sn’dir. Özel
              tasarımla daha yüksek akışkan hızına izin veren boru
              tasarlanabilmektedir.
            </p>
          </div>
          <div className="flex flex-col  justify-end space-y-3">
            <p className="h-7 w-60 text-lg font-semibold leading-9 tracking-wider text-gray-600">
              Akış Katsayısı
            </p>
            <div className="flex flex-col items-start justify-end space-y-1.5">
              <p className="text-lg font-medium leading-9 text-gray-400">
                Hidrolik hesaplamalarda SUPERLİT CTP boruları için kullanılacak
                değerler:
                <br />
                Hazen–William akış katsayısı: C = 150
                <br />
                Manning katsayısı: n = 0,009
                <br />
                Colebrook–White katsayısı:
              </p>
              <div className="inline-flex  justify-end border border-red-600 bg-white py-4 pl-7 pr-4">
                <p className="text-lg font-medium leading-9 text-gray-400">
                  sürekli elyaf sarma metodu ile üretilen borular için k=0,029
                  mmsavurma söküm metodu ile üretilen borular için k=0,012 mm
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col  justify-end space-y-3">
            <p className="text-lg font-semibold leading-9 tracking-wider text-gray-600">
              UV Direnci
            </p>
            <p className="text-lg font-medium leading-9 text-gray-400">
              CTP boruların performansı UV ışınlarından olumsuz etkilenmez.
              Yüzeyde mukavemeti etkilemeyen renk değişimleri gözlenmesi
              normaldir.
            </p>
          </div>
          <div className="flex flex-col  justify-end space-y-3">
            <p className="text-lg font-semibold leading-9 tracking-wider text-gray-600">
              Poisson Oranı
            </p>
            <p className="text-lg font-medium leading-9 text-gray-400">
              Standart CTP borular için mühendislik hesaplamalarında
              kullanılabilecek poisson oranı 0,22 – 0,29 arasındadır.
            </p>
          </div>
          <div className="flex flex-col  justify-end space-y-3">
            <p className="text-lg font-semibold leading-9 tracking-wider text-gray-600">
              Sıcaklık
            </p>
            <p className="text-lg font-medium leading-9 text-gray-400">
              Standart CTP boruların servis sıcaklığı -40°C ile + 35°C
              arasındadır. 50°C ‘ye kadar olan servis sıcalıkları için özel boru
              tasarımı yapılmaktadır.
            </p>
          </div>
          <div className="flex flex-col  justify-end space-y-3">
            <p className="h-1/4 w-72 text-lg font-semibold leading-9 tracking-wider text-gray-600">
              Termal Genleşme Katsayısı
            </p>
            <p className="text-lg font-medium leading-9 text-gray-400">
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
