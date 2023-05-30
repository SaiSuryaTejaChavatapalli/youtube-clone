import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap ml-24">
      {Array(20)
        .fill("")
        .map((item, index) => (
          <div
            className="h-[284px] w-60 bg-gray-200 m-2 p-2 rounded-md shadow-lg"
            key={index}
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
