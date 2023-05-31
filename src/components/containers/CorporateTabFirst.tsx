import React from "react";
import HomeDocumentItem from "@/components/containers/HomeDocumentItem";
import Logo from "@/components/Logo";

type Props = {};

const CorporateTabFirst = (props: Props) => {
  return (
    <div>
      <div className="mb-16 mt-4 flex items-center justify-center border border-red-600 px-4 pb-6 pt-7 text-custom-gray19">
        <div className="text-center leading-9 ">
          <p className="font-bold ">
            Türk sanayi sektöründe önemli bir role sahip KARAMANCI HOLDİNG’in
            ilk şirketi olan SUPERLIT 1961 yılında kurulmuştur.
          </p>
          <p className="font-medium">
            Basınçlı ve basınçsız CTP (Cam Elyaf Takviyeli Polyester) boruların
            uluslararası standartlara uygun üretimini ve satışını yapmakta olan
            SUPERLIT, geniş ürün yelpazesi, güvenilir kalitesi ile satış öncesi
            ve sonrası teknik/danışmanlık hizmetleri sayesinde 5 kıtada tercih
            edilen bir marka olmuştur. SUPERLIT, kurulu kapasite açısından dünya
            çapında CTP boru sektörünün lider kuruluşlarından biridir.
          </p>
        </div>
      </div>

      <div className="font-medium leading-loose text-custom-gray19">
        <p className="mb-4">
          Türkiye’de Düzce ile Malatya’daki fabrikalarında EN, ISO, TS EN, TS
          ISO, ASTM, AWWA gibi ulusal ve uluslararası standartlara uygun olarak
          üretilen DN50 mm – DN4000 mm çap aralığında, 2500 – 5000 – 10000 (özel
          tasarımla 10000 ve üzeri) rijitlikte, 1 – 32 bar (özel tasarımla 40
          bar’a kadar) basınca dayanıklı boruları aşağıdaki uygulama alanlarında
          kullanılmaktadır:
        </p>
        <div className="px-4">
          <li>Temiz su ve içme suyu</li>
          <li>Sulama</li>
          <li>Hidroelektrik santralleri</li>
          <li>Kanalizasyon</li>
          <li>Arıtma</li>
          <li>Deniz suyu alma ve deşarj</li>
          <li>Su depolama sistemleri</li>
          <li>Kazısız teknolojiler</li>
          <li className="mb-4">
            Termik&nükleer santraller, desalinasyon tesisleri, petrokimya
            tesisleri vb. gibi endüstriyel uygulamalar
          </li>
        </div>
        <p>
          SUPERLIT, “Sürekli Elyaf Sarma”, “Savurma Döküm” ve “Helisel Sarma”
          yöntemleriyle Türkiye’de 3 farklı teknoloji ile cam elyaf takviyeli
          polyester (CTP) boru üretimi yapabilen tek boru üreticisidir.
        </p>
        <p>
          Entegre Yönetim Sertifikaları (ISO 9001, ISO 14001, ISO 45001)
          uluslararası geçerliliği olan saygın bağımsız kuruluşlar tarafından
          belgelendirilmiştir.
        </p>
        <p>
          Türkiye’de Devlet Su İşleri, İller Bankası, yerel idareler,
          belediyeler, su idareleri ve özel müteahhitlerin projeleri,
          yurtdışında ise Avrupa’dan Afrika’ya, Amerika’dan Asya ve
          Avustralya’ya kadar dünyanın bir çok bölgesindeki projeler için boru
          temin eden SUPERLIT, yarım yüzyıldan fazla deneyimi ile boru
          sektörünün dünyadaki liderlerindendir.
        </p>
      </div>

      <div className="mt-14">
        <p className="mb-14 text-2xl font-semibold uppercase tracking-wider text-custom-red">
          KURUMSAL LOGO
        </p>
        <div className="grid flex-wrap gap-8 gap-y-16 md:grid-cols-3 lg:grid-cols-4">
          <div className="relative w-full">
            <div className="flex flex-col items-center">
              <Logo className="my-8 mb-12 h-[48px] w-[186px]" />
              <HomeDocumentItem text="SUPERLIT Kurumsal Logo" />
            </div>
          </div>
          <div className="relative w-full">
            <div className="flex flex-col items-center">
              <img src="/superlit-boru-sanayi.png" />
              <HomeDocumentItem text="SUPERLIT Boru Sanayi TR" />
            </div>
          </div>
          <div className="relative w-full">
            <div className="flex flex-col items-center">
              <img src="/superlit-pipe-industry.png" />
              <HomeDocumentItem text="SUPERLIT Pipe Industries" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateTabFirst;
