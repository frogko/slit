import * as React from "react";

function RotatedArrowIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 23 23" fill="none" {...props}>
      <path
        d="M16.538 3.598l-16 15.965c-.359.36-.538.788-.538 1.283 0 .495.18.922.539 1.28.36.36.787.54 1.282.54s.921-.18 1.28-.54l15.954-16.01v13.672c0 .51.173.937.518 1.283.345.345.772.517 1.28.516.509 0 .936-.173 1.281-.518.346-.345.518-.772.516-1.28V1.798c0-.51-.172-.937-.517-1.283A1.732 1.732 0 0020.853 0H2.876c-.51 0-.937.173-1.282.518a1.734 1.734 0 00-.516 1.28c0 .51.173.938.518 1.283.345.346.772.518 1.28.517h13.662z"
        fill="#fff"
      />
    </svg>
  );
}

const MemoRotatedArrowIcon = React.memo(RotatedArrowIcon);
export default MemoRotatedArrowIcon;
