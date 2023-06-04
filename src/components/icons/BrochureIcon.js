import * as React from "react";

function BrochureIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 27 25" fill="none" {...props}>
      <path
        d="M1 1h16.071L9.928 5.929M1 1v18.072h8.928M9.93 5.928H26v18.071H9.93V5.928zM17.07 1v4.929"
        stroke="#DA0D15"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoBrochureIcon = React.memo(BrochureIcon);
export default MemoBrochureIcon;
