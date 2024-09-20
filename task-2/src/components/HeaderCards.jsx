import React from "react";

const HeaderCards = () => {
  const items = [
    {
      id: 1,
      imgSrc: "head1.png",
      title: "HOTSPOTS",
      description: "Luxury hotspots: 5 most expensive high streets in the..  ",
    },
    {
      id: 2,
      imgSrc: "head2.png",
      title: "AI",
      description: "5 ways to leverage the power of ChatGPT in retail",
    },
    {
      id: 3,
      imgSrc: "head3.png",
      title: "SHIPPING",
      description: "Reliance to open 250 Azorte stores in 2-3 years",
    },
  ];

  return (
    <div className=" mx-5 my-7 place-items-center   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item) => (
        <a
          key={item.id}
          href="#"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            className="object-cover w-[117px] max-w-[117px] rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={item.imgSrc}
            alt={item.title}
          />

          <div className="flex flex-col justify-between p-3 leading-normal">
            <h5 className="mb-2 text-[16px] font-bold tracking-tight text-red-700 dark:text-white">
              {item.title}
            </h5>
            <p className="mb-3 font-normal text-[14px] text-gray-700 dark:text-gray-400">
              {item.description}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default HeaderCards;
