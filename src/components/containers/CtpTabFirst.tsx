import React from "react";
import ProductTwoColTable from "./ProductTwoColTable";

const CtpTabFirst = () => {
  return (
    <div className="flex flex-col space-x-7">
      <div className="mb-12 grid grid-cols-2">
        <ProductTwoColTable
          data={[
            {
              left: "Çap",
              right: "DN300 mm – DN4000 mm",
            },
            {
              left: "Basınç",
              right: "PN 1 – PN 32 bar (özel tasarımla 40 bar’a kadar)",
            },
          ]}
        />

        <div className="pl-8 text-lg font-medium leading-9 text-gray-500">
          Standart boylar 6 m ve 12 m olmakla birlikte SUPERLİT CTP borular
          nakliye imkanları ile sınırlı olarak istenen uzunluklarda
          üretilebilir.
        </div>
      </div>

      <div className="grid grid-cols-3">
        <div className="text-lg font-medium leading-9 text-gray-500">
          <li>TS EN 1796 (su temini)</li>
          <li>TS EN 14364 (atık su uygulamaları)</li>
          <li>ASTM D3262 (atık su uygulamaları)</li>
          <li>ASTM D3754 (atık su uygulamaları)</li>
          <li>ASTM D3517 (su temini)</li>
        </div>

        <div className="text-lg font-medium leading-9 text-gray-500">
          <li>ASTM D3839 (döşeme)</li>
          <li>ISO 10465 (döşeme)</li>

          <li>ISO 10639 (temiz su uygulamaları)</li>

          <li>ISO 10467 (atık su uygulamaları)</li>

          <li>AWWA C 950 (su temini)</li>
        </div>

        <div className="text-lg font-medium leading-9 text-gray-500">
          <li>AWWA M45 (tasarım ve döşeme)</li>

          <li>AS 3571.1 (atık su uygulamaları)</li>

          <li>AS 3571.2 (temiz su uygulamaları)</li>

          <li>AS7NZS 2566.2 (döşeme)</li>
        </div>
      </div>
    </div>
  );
};

export default CtpTabFirst;
