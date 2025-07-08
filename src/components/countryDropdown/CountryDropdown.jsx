import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CountryModel from "../dialog/Country";
export const CountryDropdown = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <div
      onClick={handleOpen}
      className="text-black/80 flex  items-center  gap-2 cursor-pointer border border-gray-300 rounded-md px-2 py-1  hover:bg-sky-200 transition-all duration-200 "
    >
      <div className="flex flex-col items-center">
        <span className="text-[12px] text-gray-500">Your Location</span>
        <span className="text-[14px]  text-primary">Select a Location</span>
      </div>
      <KeyboardArrowDownIcon />
      <CountryModel setOpen={setOpen} open={open} />
    </div>
  );
};
