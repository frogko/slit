import * as React from "react";

function PrevIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 23 38" fill="none" {...props}>
      <path
        d="M18.252 37.2L1.402 20.4c-.2-.2-.342-.416-.426-.65A2.166 2.166 0 01.852 19c0-.266.04-.516.124-.75.082-.233.224-.45.426-.65L18.252.75c.466-.466 1.05-.7 1.75-.7s1.3.25 1.8.75.75 1.084.75 1.75c0 .667-.25 1.25-.75 1.75L7.102 19l14.7 14.7c.466.467.7 1.043.7 1.727 0 .684-.25 1.275-.75 1.774-.5.5-1.084.75-1.75.75-.667 0-1.25-.25-1.75-.75z"
        fill="#fff"
      />
    </svg>
  );
}

const MemoPrevIcon = React.memo(PrevIcon);
export default MemoPrevIcon;
