import React from "react";

const Button = ({ buttonName }) => {
  return (
    <div>
      <button className="px-4 py-1 m-2 bg-gray-200 rounded-lg">
        {buttonName}
      </button>
    </div>
  );
};

export default Button;
