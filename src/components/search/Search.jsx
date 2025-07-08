import React from "react";
import SearchIcon from "@mui/icons-material/Search";
export const Search = () => {
  return (
    <div>
      <form className="flex items-center bg-gray-50 border border-gray-300 rounded-lg  px-4 py-2.5   w-md">
        <input
          type="text"
          placeholder="Search for products, brands and more"
          className="border-none outline-none w-full text-gray-700 placeholder-gray-400 focus:ring-0 focus:border-transparent "
        />
        <div className="cursor-pointer text-gray-500 hover:text-gray-700 transition-colors duration-200">
          <SearchIcon />
        </div>
      </form>
    </div>
  );
};
