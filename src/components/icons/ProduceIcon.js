import * as React from "react";

function ProduceIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 27 22" fill="none" {...props}>
      <path
        d="M5.063.846A.847.847 0 015.905 0h5.063a.843.843 0 01.844.846v5.077a.848.848 0 01-.844.846H5.906a.843.843 0 01-.843-.846V.846zM16.03 0a.843.843 0 00-.843.846v5.077a.848.848 0 00.843.846h5.063a.843.843 0 00.843-.846V.846A.847.847 0 0021.095 0H16.03zm.844 5.077V1.692h3.375v3.385h-3.375zM6.75 16.923a1.695 1.695 0 000-3.385c-.448 0-.877.179-1.193.496a1.695 1.695 0 001.193 2.89zm8.438-1.692c0 .449-.178.879-.495 1.196a1.685 1.685 0 01-2.386 0A1.695 1.695 0 0113.5 13.54c.448 0 .877.178 1.193.495.317.317.495.748.495 1.197zm5.062 1.692a1.695 1.695 0 000-3.385 1.695 1.695 0 000 3.385zM0 15.231a6.78 6.78 0 011.977-4.787A6.74 6.74 0 016.75 8.462h13.5a6.74 6.74 0 014.773 1.982 6.78 6.78 0 010 9.573A6.74 6.74 0 0120.25 22H6.75a6.74 6.74 0 01-4.773-1.983A6.779 6.779 0 010 15.231zm6.75-5.077c-1.343 0-2.63.535-3.58 1.487a5.084 5.084 0 000 7.18 5.055 5.055 0 003.58 1.487h13.5c1.343 0 2.63-.535 3.58-1.487a5.084 5.084 0 000-7.18 5.055 5.055 0 00-3.58-1.487H6.75z"
        fill="#DA0D15"
      />
    </svg>
  );
}

const MemoProduceIcon = React.memo(ProduceIcon);
export default MemoProduceIcon;
