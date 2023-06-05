import React from "react";

type Props = {};

const CtpTabSecond = (props: Props) => {
  return (
    <div>
      <div className="inline-flex flex-col justify-start space-y-5">
        <p className="mb-6 text-3xl font-semibold uppercase tracking-wider text-custom-red">
          Kullanım Alanları
        </p>
        <p className="!mt-0 text-lg font-semibold leading-9 tracking-wider text-custom-gray19">
          SUPERLİT CTP boruları yeraltı ve yer üstü borulama sistemlerinde;
          <br />
        </p>
        <div className="list-disc text-lg font-medium leading-9 text-custom-gray21">
          <li>İçme suyu ve temiz su iletim hatları</li>
          <li>Sulama ana iletim ve şebeke hatları</li>
          <li>Yağmur suyu ve drenaj hatları</li>
          <li>Kanalizasyon hatları</li>
          <li>Endüstriyel atık su iletim hatları</li>
          <li>Deniz altı borulama, su alma, deşarj hatları ve difüzörler</li>

          <li>Kimyasal tesislerin borulama hatları</li>
          <li>Enerji santralleri sirkülasyon hatları</li>
          <li>Hidroelektrik santral iletim ve cebri boru hatları</li>
          <li>Jacking boru ve relining (sürme) boru hatlarında kullanılır.</li>
        </div>
      </div>

      <div className="inline-flex flex-col items-start justify-end space-y-5">
        <p className="mb-6 mt-12 text-3xl font-semibold uppercase tracking-wider text-custom-red">
          AVANTAJLARI
        </p>
        <div className="!mt-0 flex flex-col justify-end space-y-5">
          <p className="text-lg font-semibold leading-9 tracking-wider text-custom-gray19">
            Uzun Ömür
          </p>
          <li className="list-disc text-lg font-medium leading-9 text-custom-gray21">
            Minimum 50 yıl servis verecek şekilde uluslararası standartlara göre
            tasarlanır. İşletme ve bakım gideri yok denecek kadar azdır.
            <br />
          </li>
        </div>
        <div className="flex flex-col justify-end space-y-5">
          <p className="h-7 w-80 text-lg font-semibold leading-9 tracking-wider text-custom-gray19">
            Mükemmel, Pürüzsüz İç Yüzey:
          </p>
          <li className="list-disc text-lg font-medium leading-9 text-custom-gray21">
            SUPERLİT CTP boruların pürüzsüz iç yüzeyi hidrolik kayıpları
            azaltır. Pürüzsüz iç yüzeyi sayesinde sürtünme kaybı minimumdur ve
            bu özelliğini servis ömrü süresince muhafaza eder.
            <br />
          </li>
        </div>
        <div className="flex flex-col justify-end space-y-5">
          <p className="text-lg font-semibold leading-9 tracking-wider text-custom-gray19">
            Güvenli Bağlantılar
          </p>
          <li className="text-lg font-medium leading-9 text-custom-gray21">
            SUPERLİT CTP boru birleşimleri, esnek bağlantı metoduna sahiptir ve
            sızdırmazlık full-face® entegre elastomerik contalı manşonlar ile
            sağlanmaktadır.
          </li>
        </div>
        <h3 className="text-lg font-semibold leading-9 tracking-wider text-custom-gray19">
          Hafiflik
        </h3>
        <div className="flex list-disc flex-col justify-end">
          <li className="text-lg font-medium leading-9 text-custom-gray21">
            Çelik borunun yaklaşık 1/4’ü, düktil borunun yaklaşık 1/5’i, beton
            borunun ise yaklaşık 1/10’u ağırlığındadır.
          </li>

          <li className="text-lg font-medium leading-9 text-custom-gray21">
            Farklı çaplardaki CTP borular iç içe geçirilerek daha az araçla çok
            daha fazla boru taşınabilir. Bu sayede nakliye maliyeti
            ucuzlayabilir.
          </li>

          <li className="text-lg font-medium leading-9 text-custom-gray21">
            Montajı hızlı ve kolaydır.
          </li>

          <li className="text-lg font-medium leading-9 text-custom-gray21">
            Taşınması ve montajı için özel ekipmanlara gerek yoktur. Hafif
            oluşu, uzun boylarda bile montaj kolaylığı sağlar.
          </li>
        </div>
        <div className="flex flex-col justify-end space-y-5">
          <p className="text-lg font-semibold leading-9 tracking-wider text-custom-gray19">
            Korozyona, Kimyasallara Direnç
          </p>
          <div className="list-disc text-lg font-medium leading-9 text-custom-gray21">
            <li>Metalik malzemeden üretilmediği için korozyona uğramaz.</li>

            <li>
              Standart olarak geniş pH aralığında servis verecek şekilde
              tasarlanmaktadır.
            </li>

            <li>
              Yalıtkanlık özelliği vardır ve elektrik akımından etkilenmez.
            </li>

            <li>Katodik koruma gerektirmez.</li>

            <li>İç ve dış kaplamaya ihtiyaç yoktur.</li>
          </div>
        </div>
        <div className="flex flex-col justify-end space-y-5">
          <p className="text-lg font-semibold leading-9 tracking-wider text-custom-gray19">
            Koç Darbesi Emme Kapasitesi:
          </p>
          <li className="list-disc text-lg font-medium leading-9 text-custom-gray21">
            Koç darbesinden kaynaklanan ilave basınç artışları metal borulara
            kıyasla çok daha azdır. Koç darbesi basınçlarının %40‘ını basınç
            sınıfını arttırmadan absorbe edecek şekilde tasarlanırlar.
          </li>
        </div>
        <div className="flex flex-col justify-end space-y-5">
          <p className="text-lg font-semibold leading-9 tracking-wider text-custom-gray19">
            Çevre Dostu
          </p>
          <li className="list-disc text-lg font-medium leading-9 text-custom-gray21">
            SUPERLIT BORU San. A.Ş. CTP ürünleri kullanım ömrü sonunda çevreye
            zararlı olmayan ve geri kazanıma müsait olan bir malzemedir.
          </li>
        </div>
      </div>
    </div>
  );
};

export default CtpTabSecond;
