import * as React from "react";

function DownloadIcon2(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="30"
      fill="none"
      viewBox="0 0 24 30"
      {...props}
    >
      <path
        fill="#fff"
        d="M15 0l9 9v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3h12zm6 27V10.5h-7.5V3H3v24h18zm-9-1.5l-6-6h3.75V15h4.5v4.5H18l-6 6z"
      ></path>
    </svg>
  );
}

const MemoDownloadIcon2 = React.memo(DownloadIcon2);
export default MemoDownloadIcon2;
