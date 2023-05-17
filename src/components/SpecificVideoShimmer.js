import React from "react";

const SpecificVideoShimmer = () => {
  return (
    <div className="w-full m-2 px-2">
      {Array(5)
        .fill("")
        .map((item, index) => (
          <div
            key={index}
            className="h-52 bg-gray-100 m-2 w-full rounded-lg"
          ></div>
        ))}
    </div>
  );
};

export default SpecificVideoShimmer;
