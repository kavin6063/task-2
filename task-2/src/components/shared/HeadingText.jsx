import React from "react";

const HeadingText = ({ children }) => {
  return (
    <a className="flex flex-col mb-2 cursor-pointer">
      <h2 className="text-[#121212] text-[20px] font-semibold">{children}</h2>
      <img className="w-[15px] h-full" src="pseudo.png" alt="" />
    </a>
  );
};

export default HeadingText;
