import React from "react";

type Props = {};

const CorporateTabFirst = (props: Props) => {
  return (
    <div>
      <div className="flex items-center justify-center border border-red-600 px-4 pb-6 pt-7">
        <div className="text-center text-gray-500">
          <p className="font-bold text-custom-gray15">
            Türk sanayi sektöründe önemli bir role sahip KARAMANCI HOLDİNG’in
            ilk şirketi olan SUPERLİT 1961 yılında kurulmuştur.
          </p>
          <br />
          Basınçlı ve basınçsız CTP (Cam Elyaf Takviyeli Polyester) boruların
          uluslararası standartlara uygun üretimini ve satışını yapmakta olan
          SUPERLİT, geniş ürün yelpazesi, güvenilir kalitesi ile satış öncesi ve
          sonrası teknik/danışmanlık hizmetleri sayesinde 5 kıtada tercih edilen
          bir marka olmuştur. SUPERLİT, kurulu kapasite açısından dünya çapında
          CTP boru sektörünün lider kuruluşlarından biridir.
        </div>
      </div>

      <div className="font-medium leading-loose text-custom-gray15">
        <p className="mb-4">
          Türkiye’de Düzce ile Malatya’daki fabrikalarında EN, ISO, TS EN, TS
          ISO, ASTM, AWWA gibi ulusal ve uluslararası standartlara uygun olarak
          üretilen DN50 mm – DN4000 mm çap aralığında, 2500 – 5000 – 10000 (özel
          tasarımla 10000 ve üzeri) rijitlikte, 1 – 32 bar (özel tasarımla 40
          bar’a kadar) basınca dayanıklı boruları aşağıdaki uygulama alanlarında
          kullanılmaktadır:
        </p>
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
        SUPERLIT, “Sürekli Elyaf Sarma”, “Savurma Döküm” ve “Helisel Sarma”
        yöntemleriyle Türkiye’de 3 farklı teknoloji ile cam elyaf takviyeli
        polyester (CTP) boru üretimi yapabilen tek boru üreticisidir.
        <br />
        Entegre Yönetim Sertifikaları (ISO 9001, ISO 14001, ISO 45001)
        uluslararası geçerliliği olan saygın bağımsız kuruluşlar tarafından
        belgelendirilmiştir.
        <br />
        Türkiye’de Devlet Su İşleri, İller Bankası, yerel idareler, belediyeler,
        su idareleri ve özel müteahhitlerin projeleri, yurtdışında ise
        Avrupa’dan Afrika’ya, Amerika’dan Asya ve Avustralya’ya kadar dünyanın
        bir çok bölgesindeki projeler için boru temin eden SUPERLİT, yarım
        yüzyıldan fazla deneyimi ile boru sektörünün dünyadaki liderlerindendir.
      </div>

      <p className="mt-8 text-2xl font-semibold uppercase tracking-wider text-custom-red">
        KURUMSAL LOGO
      </p>
    </div>
  );
};

export default CorporateTabFirst;
