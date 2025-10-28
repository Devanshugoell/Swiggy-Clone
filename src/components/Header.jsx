
import LOGO from "../images/logo.svg";
import { Link } from "react-router-dom";
import { Search, BadgePercent, LifeBuoy, ShoppingBag } from "lucide-react";
import { FaRegUser } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {

  // selector hook to subscribe to cartSlice / store
  const cartItems = useSelector((store) => store.cart.items);
  const navigate = useNavigate();
  
  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };


  return (
    <div className="header px-40">
      {/* HEADER LOGO  */}
      <div className="logo-container flex flex-row justify-center items-center">
        <Link to="/">
          <img src={LOGO} alt="LOGO"></img>
        </Link>
        <Link to="/">
          <h2 className="text-orange-500 cursor-pointer -ml-6 font-sans font-extrabold text-xl">
            SWIGGY
          </h2>
        </Link>
      </div>
      {/* NAV ITEMS */}
      <div className="nav-items">
        <ul>
          <Link to="/search">
            <li className="flex items-center justify-center">
              <span className="p-2">
                <Search size={18} />
              </span>
              Search
            </li>
          </Link>
          <Link to="/cart">
            <li className="flex items-center justify-center">
              <span className="p-2">
                <ShoppingBag size={18} />
              </span>
              Cart ({cartItems.length})
            </li>
          </Link>
            <li className="flex items-center justify-center" onClick={handleLogout} >
              <span className="p-2">
                <FaRegUser size={18} />
              </span>
             logout
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
