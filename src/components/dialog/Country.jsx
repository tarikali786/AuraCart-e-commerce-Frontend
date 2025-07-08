import * as React from "react";
import Dialog from "@mui/material/Dialog";
import SearchIcon from "@mui/icons-material/Search";

export default function CountryModel({ open, setOpen }) {
  const handleClose = (name) => {
    setOpen(false);
    console.log(`Selected location: ${name}`);
  };

  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="p-4 border border-gray-300   bg-white"
      >
        <h3 className="text-lg text-black/80">Choose your Delivery Location</h3>
        <p className="text-sm text-gray-500 mt-1 font-extralight">
          Enter your address and we will specify the offer for your area.
        </p>
        <div className="mt-4">
          <form className="flex items-center bg-gray-50 border border-gray-300 rounded-lg px-4 py-1.5 w-md">
            <input
              type="text"
              placeholder="Search your location"
              className="border-none outline-none w-full text-gray-700 placeholder-gray-400 focus:ring-0 focus:border-transparent"
            />
            <div className="cursor-pointer text-gray-500 hover:text-gray-700 transition-colors duration-200">
              <SearchIcon />
            </div>
          </form>
        </div>

        <div className="max-h-[400px] overflow-y-auto mt-4">
          <p className="text-md border-b border-gray-300 py-2 text-black/90 mt-4">
            Select a Location
          </p>
          <ul className=" text-md text-black/90">
            <li
              onClick={() => handleClose("United States")}
              className="cursor-pointer border-b border-gray-300 py-3   hover:text-primary"
            >
              United States
            </li>
            <li
              onClick={() => handleClose("United States")}
              className="cursor-pointer border-b border-gray-300 py-3 hover:text-primary"
            >
              Canada
            </li>
            <li
              onClick={() => handleClose("United States")}
              className="cursor-pointer border-b border-gray-300 py-3   hover:text-primary"
            >
              United States
            </li>
            <li
              onClick={() => handleClose("United States")}
              className="cursor-pointer border-b border-gray-300 py-3 hover:text-primary"
            >
              Canada
            </li>

            <li
              onClick={() => handleClose("United States")}
              className="cursor-pointer border-b border-gray-300 py-3 hover:text-primary"
            >
              United Kingdom
            </li>
            <li
              onClick={() => handleClose("United States")}
              className="cursor-pointer border-b border-gray-300 py-3 hover:text-primary"
            >
              Australia
            </li>
            <li
              onClick={() => handleClose("United States")}
              className="cursor-pointer border-b border-gray-300 py-3 hover:text-primary"
            >
              India
            </li>
            <li
              onClick={() => handleClose("United States")}
              className="cursor-pointer border-b border-gray-300 py-3 hover:text-primary"
            >
              United Kingdom
            </li>
            <li
              onClick={() => handleClose("United States")}
              className="cursor-pointer border-b border-gray-300 py-3 hover:text-primary"
            >
              Australia
            </li>
            <li
              onClick={() => handleClose("United States")}
              className="cursor-pointer border-b border-gray-300 py-3 hover:text-primary"
            >
              India
            </li>
            <li
              onClick={() => handleClose("United States")}
              className="cursor-pointer border-b border-gray-300 py-3   hover:text-primary"
            >
              United States
            </li>
            <li
              onClick={() => handleClose("United States")}
              className="cursor-pointer border-b border-gray-300 py-3 hover:text-primary"
            >
              Canada
            </li>
            <li
              onClick={() => handleClose("United States")}
              className="cursor-pointer border-b border-gray-300 py-3 hover:text-primary"
            >
              United Kingdom
            </li>
            <li
              onClick={() => handleClose("United States")}
              className="cursor-pointer border-b border-gray-300 py-3 hover:text-primary"
            >
              Australia
            </li>
            <li className="cursor-pointer border-b border-gray-300 py-3 hover:text-primary">
              India
            </li>
          </ul>
        </div>
      </div>
    </Dialog>
  );
}
