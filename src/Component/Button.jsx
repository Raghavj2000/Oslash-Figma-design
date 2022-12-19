import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-white hover:bg-gray-200 inline-flex p-2  rounded   focus:outline-none  "
    >
      {children}
    </button>
  );
};

export default Button;
