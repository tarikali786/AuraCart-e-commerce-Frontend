import Logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import { CountryDropdown } from "../countryDropdown/CountryDropdown";
import { Search } from "../search/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { CustomHeaderData } from "../../data/CustomData";
import { useState } from "react";
export const Header = () => {
  const [activeMenu, setActiveMenu] = useState(0);

  return (
    <div className="w-full  py-3 bg-white z-50 sticky top-0  border-b border-gray-200 md:px-[10%] px-2 flex flex-col gap-5  ">
      <div className="  bg-white z-50  text-white flex items-center justify-between  gap-12 ">
        <Link to="/">
          <img src={Logo} alt="Logo" className="md:h-12 h-10" />
        </Link>

        <div className="flex items-center gap-8 text-gray-500  ">
          <CountryDropdown />
          <Search />
        </div>
        <div className="flex items-center gap-6 text-gray-500  ">
          <AccountCircleIcon
            className="text-primary"
            sx={{ fontSize: "40px" }}
          />
          <div>
            <span>$0.00</span>
          </div>
          <div className="relative size-10 flex items-center bg-sky-100 justify-center  rounded-full hover:bg-sky-3 00 transition-all duration-200 cursor-pointer">
            <ShoppingBasketIcon
              className="text-secondry"
              sx={{ fontSize: "20px" }}
            />
            <span className=" absolute top-0 text-sm right-0.5 size-4 text-black">
              0
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-10 justify-between text-gray-700">
        <div className=" relative flex items-center gap-2  cursor-pointer bg-third text-white px-4 py-3 rounded-4xl hover:bg-third/80 transition-all duration-200">
          <MenuIcon className="" sx={{ fontSize: "20px" }} />
          <span className=" uppercase text-[14px]">All Categories</span>
          <KeyboardArrowDownIcon className="ml-1" />
          <div className=" absolute top-9 left-12 bg-gray-300  px-2 text-black/70 py-0 rounded-4xl shadow-lg">
            <span className=" uppercase text-[9px]">Total 43 products</span>
          </div>
        </div>
        <div className="flex items-center gap-6 justify-center  ">
          {CustomHeaderData?.map((menu, index) => (
            <div
              key={index}
              onMouseDown={() => setActiveMenu(index)}
              className={`${
                activeMenu == index &&
                "bg-primary/30 text-primary px-2.5 py-1.5 rounded-4xl transition-all duration-200"
              } relative flex items-center gap-4 hover:bg-primary/10 hover:text-primary/80 px-2.5 py-1.5 rounded-4xl transition-all duration-200`}
            >
              <Link
                to={menu.url}
                className="text-[14px]  flex items-center gap-1"
              >
                {menu.icon}
                <span className="text-[16px]">{menu.title}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
