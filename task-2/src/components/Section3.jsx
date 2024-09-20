import React from "react";
import HeadingText from "./shared/HeadingText";

const Section3 = () => {
  const buttons = [
    "Rahul Gandhi In Manipur",
    "Meta",
    "E-commerce",
    "Fashion",
    "Live Cricket Score",
    "Adipurush",
    "Sushant Singh Rajputdeath case",
    "Myntra launches ",
    "E-commerce",
    "Live Cricket Score",
  ];
  return (
    <div>
      <div className="container">
        <HeadingText>Trending</HeadingText>
      </div>
      <div className="flex space-x-4 overflow-x-auto p-4">
        {buttons.map((button, index) => (
          <button
            key={index}
            className="bg-white text-[#666666] text-[11px] px-[10px] py-[8px] rounded border-[1px] hover:bg-slate-900 hover:text-white"
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Section3;
