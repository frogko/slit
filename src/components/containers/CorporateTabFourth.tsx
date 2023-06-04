import React, { useState } from "react";
import DownloadIcon2 from "@/components/icons/DownloadIcon2";
import {
  HiChevronDoubleDown as DownIcon,
  HiChevronDoubleUp as UpIcon,
} from "react-icons/hi";
import Logo from "../Logo";
import cx from "classnames";
import Button from "../Button";

type Props = {};

const Docs = [
  { name: "KALİTE POLİTİKASI", backgroundImg: "./kalite-dokuman.png" },
  { name: "CYS-ISG POLİTİKASI", backgroundImg: "./cys-isg-dokuman.png" },
  { name: "KURUMSAL DEĞERLER", backgroundImg: "./kurumsal-dokuman.png" },
  {
    name: "ÇEVRESEL ÜRÜN BEYANI- EPD",
    backgroundImg: "./cevresel-urun-dokuman.png",
  },
];

const QuestionTables = [
  {
    key: "table1",
    title: "1. Hedeflere Uyum",
    questions: [
      "SUPERLIT ile yapılan anlaşmada kalite mutabakatına uyuluyor mu?",
      "Ürün üzerinde istediğiniz tanımlama / markalama yapılıyor mu?",
      "Teslimat terminlerine uyuluyor mu?",
      "Anlaşılan teslimat miktarlarına uyuluyor mu?",
    ],
  },
  {
    key: "table2",
    title: "2. FİYAT / ÖDEME",
    questions: [
      "Ürünün fiyatı uygun mu?",
      "Ödeme uygun mu?",
      "İrsaliye / fatura konuları problemsiz mi?",
    ],
  },
  {
    key: "table3",
    title: "3. ESNEKLİK / SATIŞ SONRASI HİZMET",
    questions: [
      "Program dışı mamül taleplerinizi karşılamada esneklik var mı?",
      "Hatalı / kusurlu ürün iadesi problemsiz gerçekleştiriliyor mu?",
      "Hatalı / kusurlu ürünü geri çağırma kurallarına uyuluyor mu?",
    ],
  },
  {
    key: "table4",
    title: "4. İLETİŞİM-SOSYAL İLİŞKİLER",
    questions: [
      "SUPERLIT ile haberleşme / iletişim problemsiz sağlanıyor mu?",
      "SUPERLIT’in firmanız / kurumunuz ile sosyal ilişkileri olumlu mu?",
    ],
  },
  {
    key: "table5",
    title: "5. ÜRÜN PERFORMANSI / KULLANIM",
    questions: [
      "SUPERLIT ürünleri amaçlanan kullanımınıza uygun mu?",
      "SUPERLIT ürünlerinin performansı beklentilerinizi karşılıyor mu?",
      "Ürün montajı pratik mi / problemsiz mi?",
    ],
  },
  {
    key: "table6",
    title: "6. SEVKİYAT / TESLİMAT",
    questions: [
      "Ürünle gönderilmesi gereken tüm kalite-sevk evrakları tam olarak gönderiliyor mu?",
      "Sevkiyat problemsiz yürütülüyor mu?",
      "Doğru ürün, doğru adrese gönderiliyor mu?",
    ],
  },
];

const CorporateTabFourth = (props: Props) => {
  const [isVisible, setVisible] = useState(false);

  return (
    <div>
      <div className="mt-4 grid select-none flex-wrap gap-8 gap-y-16 md:grid-cols-3 lg:grid-cols-4">
        {Docs.map((doc) => (
          <Document name={doc.name} backgroundImg={doc.backgroundImg} />
        ))}
      </div>

      <div className="mt-20 flex select-none flex-col items-center">
        <div
          className="flex cursor-pointer flex-col items-center"
          onClick={() => setVisible(!isVisible)}
        >
          {isVisible ? (
            <>
              <p className="mb-2 text-custom-basex font-semibold text-custom-red">
                MÜŞTERİ MEMNUNİYETİ ANKETİMİZ
              </p>
              <UpIcon className="cursor-pointer text-3xl font-semibold text-custom-red" />
            </>
          ) : (
            <>
              <p className="mb-2 text-custom-basex font-semibold text-custom-red">
                MÜŞTERİ MEMNUNİYETİ ANKETİMİZ İÇİN TIKLAYIN
              </p>
              <DownIcon className="cursor-pointer text-3xl font-semibold text-custom-red" />
            </>
          )}
        </div>
      </div>

      {isVisible && <Form />}
    </div>
  );
};

const Document = ({
  name,
  backgroundImg,
}: {
  name: string;
  backgroundImg: string;
}) => (
  <div className="relative flex justify-center">
    <div className="absolute bottom-[69px] flex flex-col items-center">
      <p className="text-custom-basex font-semibold uppercase text-white">
        {name}
      </p>
      <p className="mt-2 text-custom-sm text-white">DÖKÜMANI İNDİR</p>
      <DownloadIcon2
        id="download-icon"
        className="mt-3 cursor-pointer text-white"
      />
    </div>
    <img src={backgroundImg} className="h-[303px]" />
  </div>
);

const Form = () => (
  <form
    className="mt-16 w-full select-none"
    onSubmit={(e) => {
      e.preventDefault();
      alert("GÖNDERİLDİ");
    }}
  >
    <div className="flex h-[127px] bg-custom-gray14">
      <Logo className="h-full w-2/3 border border-dotted md:px-10 md:py-5 lg:w-1/3 xl:px-20 xl:py-10" />
      <p className="flex w-full items-center justify-center border border-dotted text-center font-semibold text-custom-gray15 md:text-custom-basex xl:text-custom-mds">
        MÜŞTERİ MEMNUNİYETİ ANKETİ
      </p>
    </div>

    <div className="mt-2 border border-dotted text-center text-custom-md font-semibold">
      <div className="flex h-[86px] flex-row">
        <p className=" flex h-full w-1/3 items-center justify-center border-b bg-custom-gray14 text-custom-gray13">
          FİRMA ADI
        </p>
        <input className="flex-1 border border-dotted pl-4" />
      </div>
      <div className="flex h-[86px] flex-row">
        <p className="flex h-full w-1/3 items-center justify-center border-b bg-custom-gray14 text-custom-gray13">
          FİRMA FAALİYET ALANI
        </p>
        <input className="flex-1 border border-dotted pl-4" />
      </div>
      <div className="flex h-[86px] flex-row">
        <p className="flex h-full w-1/3 items-center justify-center border-b bg-custom-gray14 text-custom-gray13">
          ADRES
        </p>
        <input className="flex-1 border border-dotted pl-4" />
      </div>
      <div className="flex h-[86px] flex-row">
        <p className="flex h-full w-1/3 items-center justify-center border-b bg-custom-gray14 text-custom-gray13">
          İRTİBAT NUMARASI
        </p>
        <input className="flex-1 border border-dotted pl-4" />
      </div>
      <div className="flex h-[86px] flex-row">
        <p className="flex h-full w-1/3 items-center justify-center border-b bg-custom-gray14 text-custom-gray13">
          ADINIZ, SOYADINIZ VE ÜNVANINIZ
        </p>
        <input className="flex-1 border border-dotted pl-4" />
      </div>
      <div className="flex h-[86px] flex-row">
        <p className="flex h-full w-1/3 items-center justify-center bg-custom-gray14 text-custom-gray13">
          ANKET DOLDURMA TARİHİ
        </p>
        <input className="flex-1 border border-dotted pl-4" />
      </div>
    </div>

    <p className="mt-6 border-[3px] border-dotted border-custom-red px-10 py-5 text-center text-custom-xmd font-medium leading-8 text-custom-gray19">
      Belirteceğiniz eleştiri ve öneriler gelecekte sizlere daha kaliteli hizmet
      sunmamızı sağlayacaktır. Bu nedenle formu içtenlikle ve önemseyerek
      doldurmanızı ve bizlere göndermenizi bekliyoruz
    </p>

    <div className="mt-7 grid grid-cols-5 flex-wrap gap-8 gap-y-16">
      <div className="border border-custom-gray21 text-center font-semibold leading-[52px]">
        <p className="h-[52px] bg-custom-red text-white">1</p>
        <p className="h-[52px] bg-custom-gray8 text-custom-gray13">
          Kesinlikle Hayır
        </p>
      </div>
      <div className="border border-custom-gray21 text-center font-semibold leading-[52px]">
        <p className="h-[52px] bg-custom-red text-white">2</p>

        <p className="h-[52px] bg-custom-gray8 text-custom-gray13">Hayır</p>
      </div>
      <div className="border border-custom-gray21 text-center font-semibold leading-[52px]">
        <p className="h-[52px] bg-custom-red text-white">3</p>

        <p className="h-[52px] bg-custom-gray8 text-custom-gray13">
          Kısmen Evet
        </p>
      </div>
      <div className="border border-custom-gray21 text-center font-semibold leading-[52px]">
        <p className="h-[52px] bg-custom-red text-white">4</p>

        <p className="h-[52px] bg-custom-gray8 text-custom-gray13">Evet</p>
      </div>
      <div className="border border-custom-gray21 text-center font-semibold leading-[52px]">
        <p className="h-[52px] bg-custom-red text-white">5</p>

        <p className="h-[52px] bg-custom-gray8 text-custom-gray13">
          Kesinlikle Evet
        </p>
      </div>
    </div>

    {QuestionTables.map((table) => (
      <QuestionTable
        tableKey={table.key}
        title={table.title}
        className="mt-12"
        questions={table.questions}
      />
    ))}

    <div className="mt-12 text-custom-basex font-semibold text-custom-gray6">
      <p className="h-[60px] border border-custom-gray bg-custom-gray23 pl-7 leading-[60px]">
        Varsa diğer görüş ve düşünceleriniz:
      </p>
      <textarea className="h-[165px] w-full resize-none bg-custom-gray14 p-5 placeholder-custom-gray13" />
    </div>

    <div className="mt-9 flex flex-row items-center justify-center">
      <input
        className="h-4 w-4 cursor-pointer accent-custom-red"
        type={"checkbox"}
      />
      <p className="ml-2 text-custom-basex font-medium text-custom-gray19">
        <span className="cursor-pointer text-custom-red underline ">
          Burada
        </span>
        &nbsp;yer alan K.V.K.K. Aydınlatma Metnini Okudum, Anladım ve
        Onaylıyorum.
        <span className="text-custom-red">**</span>
      </p>
    </div>

    <Button type="submit" className="mx-auto mt-9 block h-[63px] w-[343px]">
      ANKETİ GÖNDER
    </Button>
  </form>
);

const QuestionTable = ({
  tableKey,
  title,
  className,
  questions,
}: {
  tableKey: string;
  title: string;
  className?: string;
  questions: string[];
}) => (
  <div className={className}>
    <p className="bg-custom-red py-4 pl-3 text-custom-basex font-semibold uppercase leading-4 text-custom-gray12">
      {title}
    </p>
    <div className="border-custom-gray-20 flex h-[90px] flex-row items-center border text-custom-md font-semibold text-custom-gray15">
      <p className="w-2/3 pl-7">SORULAR</p>
      <div className="flex h-full grow text-center leading-[90px]">
        <p className="flex-1 bg-custom-gray23">1</p>
        <p className="flex-1 bg-custom-gray14">2</p>
        <p className="flex-1 bg-custom-gray23">3</p>
        <p className="flex-1 bg-custom-gray14">4</p>
        <p className="flex-1 bg-custom-gray23">5</p>
      </div>
    </div>
    <div className="border-custom-gray-20 border">
      {questions.map((question, index) => (
        <div
          className={cx(
            "flex h-[90px] flex-row items-center text-custom-basex font-semibold text-custom-gray15",
            {
              "bg-custom-gray23": index % 2 === 0,
              "bg-custom-gray14": index % 2 !== 0,
            }
          )}
        >
          <p className="flex h-full w-2/3 items-center pl-7">{question}</p>
          <div className="flex h-full grow accent-custom-red">
            <div className="flex flex-1 justify-center">
              <input
                className="box-border w-7 border-2 border-custom-gray23"
                type="radio"
                name={`${tableKey}_${index}`}
                value="1"
              />
            </div>
            <div className="flex flex-1 justify-center">
              <input
                className="box-border w-7 border-2 border-custom-gray23"
                type="radio"
                name={`${tableKey}_${index}`}
                value="2"
              />
            </div>
            <div className="flex flex-1 justify-center">
              <input
                className="box-border w-7 border-2 border-custom-gray23"
                type="radio"
                name={`${tableKey}_${index}`}
                value="3"
              />
            </div>
            <div className="flex flex-1 justify-center">
              <input
                className="box-border w-7 border-2 border-custom-gray23"
                type="radio"
                name={`${tableKey}_${index}`}
                value="4"
              />
            </div>
            <div className="flex flex-1 justify-center">
              <input
                className="box-border w-7 border-2 border-custom-gray23"
                type="radio"
                name={`${tableKey}_${index}`}
                value="5"
              />
            </div>
          </div>
        </div>
      ))}
      <textarea
        className="h-[125px] w-full resize-none p-7 placeholder-custom-gray13"
        placeholder="Ek Açıklama: "
      />
    </div>
  </div>
);

export default CorporateTabFourth;
