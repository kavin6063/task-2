import React from "react";
import HeadingText from "./shared/HeadingText";
const Section1 = () => {
  const items = [
    {
      id: 1,
      imgSrc: "secCard1.png",
      title: "SELECT CITYWALK",
      description: "Wow! Momo Foods enters Bhopal with Wow!",
      hastags1: "#Citywalk",
      hastags2: "#Reel stories podcast",
    },
    {
      id: 2,
      imgSrc: "secCard2.png",
      title: "FOOD & BEVERAGES",
      description: "KFC opens another outlet in Punjab KFC opens another",
      hastags1: "#Beverage",
      hastags2: "#Reel stories podcast",
    },
    {
      id: 3,
      imgSrc: "secCard3.png",
      title: "SELECT CITYWALK",
      description: "FNP (Ferns N Petals) appoints Ashish Goel",
      hastags1: "#CityWalk",
      hastags2: "#Reel stories podcast",
    },
  ];

  const items1 = [
    {
      id: 1,
      imgSrc: "1.png",
      title: "Unwrapping the Archies’ reinvention plan",
    },
    {
      id: 2,
      imgSrc: "2.png",
      title: "How AI is enhancing stores, How AI is enhancing stores",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="my-14 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Column */}
        <div className="flex flex-col">
          <div className="relative flex-1 p-4">
            <img
              className="h-full w-full max-w-[540px] object-cover"
              src="\section-1-1.png"
              alt=""
            />
            <div className="absolute left-6 bottom-5">
              <button className="bg-red-600 text-white px-2 py-1">
                IN FOCUS
              </button>
              <p className="text-white font-semibold">
                <span className="md:block">Rahul Gandhi In Manipur:</span>
                Chopper Ride After Women
                <span className="md:block">Protesters Surround Car</span>
              </p>
              <p className="text-white font-thin">Rahul Gandhi</p>
            </div>
          </div>

          {/* Cards in First Column */}
          <div className="flex-1 p-5">
            <div className="grid grid-cols-1 gap-4">
              {items.map((item) => (
                <a
                  key={item.id}
                  href="#"
                  className="flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 max-w-full md:max-w-[540px] h-[90px]"
                >
                  <img
                    className="object-cover w-[65px] h-[65px] rounded-lg"
                    src={item.imgSrc}
                    alt={item.title}
                  />
                  <div className="flex flex-row justify-between items-center w-full">
                    <div className="flex flex-col justify-center p-3 leading-normal">
                      <h5 className="text-[12px] font-bold tracking-tight text-red-700 dark:text-white">
                        {item.title}
                      </h5>
                      <p className="mb-2 line-clamp-1 text-[15px] text-gray-700 dark:text-gray-400">
                        {item.description}
                      </p>
                      <div className="flex flex-row gap-3">
                        <p className="font-semibold text-[13px]">
                          {item.hastags1}
                        </p>
                        <p className="text-gray-700 text-[13px]">
                          {item.hastags2}
                        </p>
                      </div>
                    </div>
                    <img src="arrow.png" alt="" className="mr-2" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="flex flex-col p-4">
          <HeadingText>Latest News</HeadingText>
          {items1.map((item) => (
            <div key={item.id} className="mb-4 max-w-full md:max-w-[340px] ">
              <img
                src={item.imgSrc}
                alt={item.title}
                className="w-full max-w-[540px] h-auto"
              />
              <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
            </div>
          ))}
          <div className="mt-4 max-w-full md:max-w-[340px]">
            <div className="mb-3 border-b-2">
              <p className="font-semibold text-[15px]">
                Croma opens 58 outlets in 6, Croma retails more than 16,000
              </p>
              <span className="text-[13px] text-gray-700">
                These companies created a lot of hype when they listed on the...
              </span>
            </div>
            <div className="border-b-2 p-2">
              <p className="font-semibold text-[15px]">
                Select Citywalk opens 4 new stores in June
              </p>
              <span className="text-[13px] text-gray-700">
                These companies created a lot of hype when they listed on the...
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
