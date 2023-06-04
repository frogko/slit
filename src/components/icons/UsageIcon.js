import * as React from "react";

function UsageIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 27 27" fill="none" {...props}>
      <path
        d="M17.333 22.667A1.333 1.333 0 0016 21.333h-1.333v-2.666H20A2.667 2.667 0 0022.667 16V2.667A2.667 2.667 0 0020 0H6.667A2.667 2.667 0 004 2.667V16a2.667 2.667 0 002.667 2.667H12v2.666h-1.333a1.333 1.333 0 00-1.334 1.334H0v2.666h9.333a1.333 1.333 0 001.334 1.334H16a1.333 1.333 0 001.333-1.334h9.334v-2.666h-9.334zM6.667 16V2.667H20V16H6.667zM8 9.827l1.653-1.654 2.254 2.267 5.106-5.107 1.654 2-6.76 6.76L8 9.827z"
        fill="#DA0D15"
      />
    </svg>
  );
}

const MemoUsageIcon = React.memo(UsageIcon);
export default MemoUsageIcon;
