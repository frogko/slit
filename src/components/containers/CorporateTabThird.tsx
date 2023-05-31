import React from "react";

type Props = {};

const boardMembers = [
  {
    name: "Turgay AYTEKİN",
    title: "Genel Müdür",
    content: (
      <p className="text-custom-base font-medium leading-8 text-custom-gray19">
        1966 İstanbul doğumlu olan Turgay Aytekin, lisans ve yüksek lisans
        eğitimini İstanbul Üniversitesi İktisat Fakültesi’nde tamamladı.1989
        yılından itibaren çeşitli sektörlerde finans ağırlıklı sorumluluklar
        alan Aytekin, 1997-2008 yılları arasında Şenocak Holding bünyesinde Grup
        CFO ve Yönetim Kurulu Üyesi olarak görev yapmıştır. 2010 yılı Ocak
        ayından bu yana SUPERLIT bünyesinde profesyonel çalışma hayatına devam
        etmektedir. Halen SUPERLIT Türkiye’de Genel Müdürlük görevini
        sürdürmektedir ve SUPERLIT Romania S.A.’nın yönetim kurulu üyesidir.
        Turgay Aytekin’in üye olduğu kurumlar:
        <li className="ml-4">Türkiye Kurumsal Yönetim Derneği (TKYD)</li>
        <li className="ml-4">
          International Commission on Irrigation & Drainage (ICID)
        </li>
        <li className="ml-4">International Water Association (IWA)</li>
      </p>
    ),
  },
  {
    name: "Ahmet Harun ERMURAT",
    title: "Mali İşler Direktörü",
    content: (
      <p className="text-custom-base font-medium leading-8 text-custom-gray19">
        1977 İstanbul doğumlu A. Harun Ermurat, lisans ve yüksek lisans
        eğitimini İstanbul Üniversitesi İngilizce İktisat Fakültesi’nde
        tamamladı. 2001 yılında Mali İşler Departmanı bünyesine geçti. 2008
        senesinde Bütçe ve Raporlama Yöneticisi, 2012 yılında Mali İşler Müdürü
        olarak görevlerini yürüttü. Ocak 2019 itibarıyla Türkiye ve Romanya
        operasyonlarından sorumlu Mali İşler Direktörü olarak çalışma hayatına
        devam etmektedir.
      </p>
    ),
  },
  {
    name: "Najem KHALED",
    title: "Fabrikalar Direktörü",
    content: (
      <p className="text-custom-base font-medium leading-8 text-custom-gray19">
        Lübnan Üniversitesi’nden Makine Mühendisliği derecesine sahip olan Najem
        Khaled, boru endüstrisindeki benzer kuruluşlarda üretim, operasyon ve
        endüstri projeleri alanında çok sayıda üst düzey yönetim pozisyonunda 25
        yıldan fazla deneyime sahiptir. 2018’de SUPERLIT’e Ürün ve AR&GE
        Direktörü olarak katılmıştır.2020 itibarıyla Fabrikalar Direktörü olarak
        görevine devam etmektedir.
      </p>
    ),
  },
  {
    name: "Andreea Elena HANCIOGLU",
    title: "Süperlit Romanya Satış Direktörü",
    content: (
      <p className="text-custom-base font-medium leading-8 text-custom-gray19">
        Romanya doğumlu olan Andreea Elena Hancioglu, lisans ve yüksek lisans
        eğitimini Bükreş ASE Üniversitesi İşletme Fakültesi’nde tamamladı. Çok
        uluslu iş yerlerinde satış konusunda deneyim kazanıp, inşaat ve ulusal
        arası ticaret sektörlerinde çalıştıktan sonra, 2002 yılından itibaren
        SUPERLIT bünyesinde satış departmanında görev almış olup, 2009 yılından
        itibaren, SUPERLIT Romanya Satış Direkörtörlüğü görevini yürütmektedir.
      </p>
    ),
  },
  {
    name: "Ahmet KAYA",
    title: "Yurtiçi İş Geliştirme Müdürü",
    content: (
      <p className="text-custom-base font-medium leading-8 text-custom-gray19">
        1960 doğumlu Ahmet KAYA, EİTİA’da Endüstri Mühendisliği ve İktisat
        eğitimi aldı. 1983-1989 arasında farklı firmalarda muhasebe, satış ve
        pazarlama departmanlarında görev aldıktan sonra 1989 yılından itibaren
        SUPERLIT Yurtiçi Satış ve Pazarlama Bölümü’nde çalışmaya başladı. Uzun
        yıllar Yurtiçi Satış Müdürü olarak Superlit bünyesinde görev alan Kaya,
        2020 itibarıyla Yurtiçi İş Geliştirme Müdürü olarak görevini
        sürdürmektedir.
      </p>
    ),
  },
  {
    name: "Erhan TURAN",
    title: "İhracat Direktörü",
    content: (
      <p className="text-custom-base font-medium leading-8 text-custom-gray19">
        1977 Zonguldak doğumlu olan Erhan Turan, lisans eğitimini Balikesir
        Üniversitesi Mühendislik Fakültesi İnşaat Mühendisliği Bölümü, yüksek
        lisans eğitimini Sakarya Üniversitesi Fen Bilimleri Fakültesi’nde
        tamamladı. 2000 yılından itibaren inşaat sektöründe faaliyet gösteren
        firmalar ile çalışan Turan, 2003 Kasım ayından bu güne SUPERLIT Boru
        San. A.Ş. bünyesinde çalışma hayatına devam etmektedir. Halen SUPERLIT
        Türkiye İhracat Direktörü olarak görevini sürdürmektedir.
      </p>
    ),
  },
  {
    name: "Alperen EROĞLU",
    title: "Yatırım ve Proje Uygulama Direktörü",
    content: (
      <p className="text-custom-base font-medium leading-8 text-custom-gray19">
        1970 Manisa-Alaşehir doğumlu olan Alperen Eroğlu, Trakya
        Üniversitesi’nden mezun olduktan sonra Yakın Doğu Üniversitesi İnşaat
        Mühendisliği Bölümü’nü bitirerek inşaat mühendisi oldu. 1991 yılından
        itibaren ağırlıklı olarak proje ve inşaat sektörlerinde çeşitli
        kademelerde görev aldı. 2004 yılı Haziran ayından bu yana SUPERLIT
        bünyesinde profesyonel çalışma hayatına devam etmektedir. 2006 yılından
        itibaren Projeler Destek Müdürü olarak görevini yürüten Eroğlu, 2020
        itibarıyla Yatırım Ve Proje Uygulama Direktörü olarak görevini
        sürdürmektedir.
      </p>
    ),
  },
  {
    name: "Erol GÖKÇE",
    title: "Teknoloji ve Mühendislik Direktörü",
    content: (
      <p className="text-custom-base font-medium leading-8 text-custom-gray19">
        1977 yılı Düzce doğumlu olan Erol Gökçe lisans eğitimini 2000 yılında
        İTÜ Elektrik Mühendisliği’nde tamamladı. 2000 yılında Superlit üretim
        departmanı bünyesinde çalışmayan başlayan Erol Gökçe 2010 yılına kadar
        üretim departmanında değişik kademelerde yöneticilik, 2010 yılında
        Mühendislik Müdürü, 2015 yılında Üretim Müdürü olarak görev almıştır. Bu
        sure içerisinde üretim departmanında yöneticilik görevlerinin yanında
        Superlit yatırımlarında proje sorumlusu olarak görevler yapmıştır. Şu
        anda Superlit Düzce ve Malatya tesisleri yatırım, teknoloji ve bakım
        operasyonlarından sorumlu Teknoloji ve Mühendislik Direktörü olarak
        görevini sürdürmektedir.
      </p>
    ),
  },
  {
    name: "Havva KÖSEOĞLU",
    title: "Türkiye Yurtişçi Satış Müdürü",
    content: (
      <p className="text-custom-base font-medium leading-8 text-custom-gray19">
        1975 Karabük doğumlu olan Havva Köseoğlu, lisans eğitimini Trakya
        Üniversitesi Ziraat Fakültesi Tarımsal Yapılar ve Sulama Bölümü, yüksek
        lisans eğitimini Trakya Üniversitesi Fen Bilimleri Fakültesi’nde
        tamamladı. 1997 - 2001 yılları arasında polietilen boru sektöründe
        faaliyet gösteren bir firmada satış ve pazarlama alanlarında görev alan
        Köseoğlu, 2001 yılından bugüne SUPERLIT Boru San. A.Ş. bünyesinde
        çalışma hayatına devam etmektedir. Halen SUPERLIT Türkiye Ülke Müdürü
        olarak görevini sürdürmektedir.
      </p>
    ),
  },
];

const BoardMember = ({
  name,
  title,
  content,
}: {
  name: string;
  title: string;
  content: React.ReactElement;
}) => (
  <div className="py-10 text-custom-gray20">
    <div className="mb-5 flex text-custom-xmd font-normal text-custom-red">
      <p className="font-bold">{name}&nbsp;-&nbsp;</p>
      {title}
    </div>
    {content}
  </div>
);

const CorporateTabThird = (props: Props) => {
  return (
    <div>
      <p className="mt-12 text-custom-mds font-semibold uppercase leading-10 text-custom-red">
        SUPERLIT YÖNETİM KURULU
      </p>
      <div className="divide-y ">
        {boardMembers.map((member) => (
          <BoardMember
            name={member.name}
            title={member.title}
            content={member.content}
          />
        ))}
      </div>
    </div>
  );
};

export default CorporateTabThird;
