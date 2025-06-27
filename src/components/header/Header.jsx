import Logo from "../../assets/logo/logo.png"; 
import { Link } from "react-router-dom";
import { CountryDropdown } from "../countryDropdown/CountryDropdown";
import { Search } from "../search/Search";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
export const Header = () => {
  return (
    <div className="w-full bg-white z-50 h-18 text-white flex items-center justify-between  gap-12 md:px-[10%] px-2 border-b border-gray-200 sticky top-0">
      <Link to="/">
        <img src={Logo} alt="Logo" className="md:h-12 h-10" />
      </Link>

      <div className="flex items-center gap-8 text-gray-500  ">
        <CountryDropdown/>
          <Search/>
      </div>
     <div className="flex items-center gap-6 text-gray-500  ">
          <AccountCircleIcon className="text-primary" sx={{fontSize:"40px"}} />
          <div>
            <span>$0.00</span>
          </div>
          <div className="relative size-10 flex items-center bg-sky-100 justify-center  rounded-full hover:bg-sky-3 00 transition-all duration-200 cursor-pointer">
            <ShoppingBasketIcon className="text-secondry" sx={{fontSize:"20px"}}/>
            <span className=" absolute top-0 text-sm right-0.5 size-4 text-red-800">0</span>
          </div>
      </div>

    </div>
  );
};
