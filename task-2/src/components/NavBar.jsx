import React, { useState } from "react";

const NavBar = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Initialize active index

  const handleClick = (index) => {
    setActiveIndex(index); // Update active index on click
  };
  return (
    <div>
      <nav className="m-4  flex flex-row justify-between items-center">
        <div>
          <img src="\searchBarImg-2.png" alt="" />
        </div>
        <ul className="flex flex-row gap-10 ">
          {[
            "Home",
            "Categories",
            "IR Prime",
            "Events",
            "BookStore",
            "NewsLetter",
            "Video",
          ].map((item, index) => (
            <li key={index} onClick={() => handleClick(index)}>
              <a
                href="#"
                className={`cursor-pointer font-bold flex flex-row gap-[40px] ${
                  activeIndex === index ? "text-red-500" : "text-black"
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-row items-center justify-center gap-3">
          <img src="\searchBarImg-1.png" alt="" />
          <p>Friday, 30 June 2023</p>
        </div>
      </nav>
      <ul className="mt-[30px] hidden text-[14px] pb-5 text-[#595959] md:flex justify-between items-center container mx-auto flex-row">
        {[
          "Fashion & Lifestyle",
          "Beauty & Wellness",
          "Food & Beverage",
          "Consumer Durables & IT ",
          "Entertainment",
          "Home Decor & Furnishing",
          "Speciality Retail",
        ].map((item, index) => (
          <li key={index}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
