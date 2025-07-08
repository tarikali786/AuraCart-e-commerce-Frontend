import AddToQueueIcon from "@mui/icons-material/AddToQueue";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CakeIcon from "@mui/icons-material/Cake";
import CoffeeIcon from "@mui/icons-material/Coffee";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import SetMealIcon from "@mui/icons-material/SetMeal";

export const CustomHeaderData = [
  {
    title: "Home",
    url: "/",
    icon: <HomeIcon />,
  },
  {
    title: "Shop",
    url: "/shop",
    icon: <ShoppingCartIcon />,
  },
  {
    title: "Meats & Seafood",
    url: "/category/meats-seafood",
    icon: <SetMealIcon />,
  },
  {
    title: "Bakery",
    url: "/category/bakery",
    icon: <CakeIcon />,
  },
  {
    title: "Beverages",
    url: "/category/beverages",
    icon: <CoffeeIcon />,
  },
  {
    title: "Blog",
    url: "/blog",
    icon: <AddToQueueIcon />,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: <ConnectWithoutContactIcon />,
  },
];
