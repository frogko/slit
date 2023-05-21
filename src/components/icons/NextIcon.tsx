import * as React from "react";

function NextIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 23 38" fill="none" {...props}>
      <path
        d="M4.752.801l16.85 16.8c.2.2.342.417.426.65.084.233.126.483.124.75 0 .267-.041.517-.124.75-.082.233-.224.45-.426.65l-16.85 16.85c-.466.467-1.05.7-1.75.7s-1.3-.25-1.8-.75-.75-1.083-.75-1.75c0-.666.25-1.25.75-1.75l14.7-14.7-14.7-14.7c-.466-.467-.7-1.042-.7-1.726 0-.684.25-1.275.75-1.774.5-.5 1.084-.75 1.75-.75.667 0 1.25.25 1.75.75z"
        fill="#fff"
      />
    </svg>
  );
}

const MemoNextIcon = React.memo(NextIcon);
export default MemoNextIcon;
