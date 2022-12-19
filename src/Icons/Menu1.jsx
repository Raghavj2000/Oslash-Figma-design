import React from "react";
import toast from "react-hot-toast";
const notify = () => toast.success("clicked Plus icon-button");

const Menu1 = ({ className = "h-5 w-5" }) => {
  return (
    <span>
      <svg
        className={className}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={notify}
      >
        <path
          d="M4.99999 5C4.44771 5 3.99999 5.44772 3.99999 6C3.99999 6.55228 4.44771 7 4.99999 7H16C16.5523 7 17 6.55228 17 6C17 5.44772 16.5523 5 16 5H4.99999Z"
          fill="#111827"
        />
        <path
          d="M7.00001 9C6.44773 9 6.00001 9.44772 6.00001 10C6.00001 10.5523 6.44773 11 7.00001 11H14C14.5523 11 15 10.5523 15 10C15 9.44772 14.5523 9 14 9H7.00001Z"
          fill="#111827"
        />
        <path
          d="M8.99998 13C8.4477 13 7.99998 13.4477 7.99998 14C7.99998 14.5523 8.4477 15 8.99998 15H13C13.5523 15 14 14.5523 14 14C14 13.4477 13.5523 13 13 13H8.99998Z"
          fill="#111827"
        />
      </svg>
    </span>
  );
};

export default Menu1;
