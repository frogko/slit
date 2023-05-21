import * as React from "react";

function SearchIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 25 25" fill="none" {...props}>
      <path
        d="M23.982 22.08l-5.194-5.197a10.076 10.076 0 10-1.86 1.859l5.199 5.2a1.313 1.313 0 002.144-.427 1.314 1.314 0 00-.285-1.433l-.004-.003zM3.366 10.757a7.438 7.438 0 117.437 7.437 7.445 7.445 0 01-7.437-7.437z"
        fill="#484848"
      />
    </svg>
  );
}

const MemoSearchIcon = React.memo(SearchIcon);
export default MemoSearchIcon;
