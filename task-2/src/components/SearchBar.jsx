import React from "react";
import { CiSearch } from "react-icons/ci";
import Button from "./shared/Button";

const SearchBar = () => {
  return (
    <div className="container p-3 mb-[25px] border-b-2 mx-auto mt-[25px] flex flex-row justify-between items-center ">
      <form className="flex items-center ">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative ">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <CiSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search here..."
            required
          />
        </div>
      </form>
      <div>
        <img className="w-full inline-block" src=" \logo1.png" alt="" />
      </div>
      <div className="flex flex-row items-center gap-3">
        <button className="bg-[#e21b22] px-3 py-2  text-white">
          SUBSCRIBE
        </button>
        <button className="bg-white px-3 py-2 text-black border-[0.67px] ">
          SIGN IN
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
