import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonListArray = [
    "All",
    "Gaming",
    "Movie",
    "Tourism",
    "Live",
    "Cricket",
    "Music",
    "News",
    "Gadgets",
    "Trailers",
    "History",
  ];
  return (
    <div className="flex">
      {buttonListArray.map((button, index) => (
        <Button buttonName={button} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;
