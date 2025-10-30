import LOGO from "../images/logo.svg";
import { Link } from "react-router-dom";
import { Search, BadgePercent, LifeBuoy, ShoppingBag, X, Menu } from "lucide-react";
import { FaRegUser } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

const Header = () => {
  // selector hook to subscribe to cartSlice / store
  const cartItems = useSelector((store) => store.cart.items);
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Fetch restaurants data when search opens
  useEffect(() => {
    if (isSearchOpen && allRestaurants.length === 0) {
      fetchRestaurants();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSearchOpen]);

  // Filter restaurants based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredRestaurants(allRestaurants);
    } else {
      const filtered = allRestaurants.filter((restaurant) => {
        const name = restaurant?.info?.name?.toLowerCase() || "";
        const cuisines =
          restaurant?.info?.cuisines?.join(" ")?.toLowerCase() || "";
        const areaName = restaurant?.info?.areaName?.toLowerCase() || "";
        const query = searchQuery.toLowerCase();

        return (
          name.includes(query) ||
          cuisines.includes(query) ||
          areaName.includes(query)
        );
      });
      setFilteredRestaurants(filtered);
    }
  }, [searchQuery, allRestaurants]);

  const fetchRestaurants = async () => {
    try {
      const lat = 28.6139;
      const lng = 77.209;
      const newAPI = `https://foodfire.onrender.com/api/restaurants?lat=${lat}&lng=${lng}&page_type=DESKTOP_WEB_LISTING`;

      const response = await fetch(newAPI);
      const json = await response.json();

      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setAllRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
    setFilteredRestaurants(allRestaurants);
  };

  return (
    <>
      <div className="header px-4 sm:px-8 md:px-20 lg:px-40">
        {/* HEADER LOGO  */}
        <div className="logo-container flex flex-row justify-center items-center">
          <Link to="/">
            <img src={LOGO} alt="LOGO" className="h-10 w-16 sm:h-12 sm:w-20"></img>
          </Link>
          <Link to="/">
            <h2 className="text-orange-500 cursor-pointer -ml-4 sm:-ml-6 font-sans font-extrabold text-lg sm:text-xl">
              SWIGGY
            </h2>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* DESKTOP NAV ITEMS */}
        <div className="nav-items hidden md:block">
          <ul>
            <li
              className="flex items-center justify-center cursor-pointer"
              onClick={handleSearchClick}
            >
              <span className="p-2">
                <Search size={18} />
              </span>
              Search
            </li>

            <Link to="/cart">
              <li className="flex items-center justify-center">
                <span className="p-2">
                  <ShoppingBag size={18} />
                </span>
                Cart ({cartItems.length})
              </li>
            </Link>
            <li
              className="flex items-center justify-center"
              onClick={handleLogout}
            >
              <span className="p-2">
                <FaRegUser size={18} />
              </span>
              Logout
            </li>
          </ul>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-20 left-0 right-0 z-40">
          <ul className="flex flex-col p-4">
            <li
              className="flex items-center py-3 px-4 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                handleSearchClick();
                setIsMobileMenuOpen(false);
              }}
            >
              <span className="p-2">
                <Search size={18} />
              </span>
              Search
            </li>
            <Link to="/cart" onClick={() => setIsMobileMenuOpen(false)}>
              <li className="flex items-center py-3 px-4 hover:bg-gray-100">
                <span className="p-2">
                  <ShoppingBag size={18} />
                </span>
                Cart ({cartItems.length})
              </li>
            </Link>
            <li
              className="flex items-center py-3 px-4 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                handleLogout();
                setIsMobileMenuOpen(false);
              }}
            >
              <span className="p-2">
                <FaRegUser size={18} />
              </span>
              Logout
            </li>
          </ul>
        </div>
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            {/* Search Header */}
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                Search Restaurants
              </h2>
              <button
                onClick={handleCloseSearch}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Search Input */}
            <div className="relative mb-6 sm:mb-8">
              <input
                type="text"
                placeholder="Search restaurants, cuisines..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 sm:h-14 px-4 sm:px-6 pr-12 text-base sm:text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                autoFocus
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <Search size={20} className="text-gray-400 sm:w-6 sm:h-6" />
              </div>
            </div>

            {/* Search Results */}
            <div>
              {searchQuery.trim() !== "" && (
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  Found {filteredRestaurants.length} restaurant
                  {filteredRestaurants.length !== 1 ? "s" : ""}
                </p>
              )}

              {filteredRestaurants.length > 0 ? (
                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                  {filteredRestaurants.map((restaurant) => (
                    <Link
                      key={restaurant?.info?.id}
                      to={`/restaurants/${restaurant?.info?.id}`}
                      onClick={handleCloseSearch}
                    >
                      <RestaurantCard
                        restaurant={restaurant?.info}
                        width="w-full"
                        height="h-40 sm:h-48"
                        text="text-base sm:text-lg"
                        header="text-lg sm:text-xl"
                        subHeader="text-sm sm:text-base"
                      />
                    </Link>
                  ))}
                </div>
              ) : searchQuery.trim() !== "" ? (
                <div className="text-center py-8 sm:py-12">
                  <p className="text-lg sm:text-xl text-gray-500">No restaurants found</p>
                  <p className="text-sm sm:text-base text-gray-400 mt-2">
                    Try searching with different keywords
                  </p>
                </div>
              ) : (
                <div className="text-center py-8 sm:py-12">
                  <p className="text-lg sm:text-xl text-gray-500">
                    Start typing to search restaurants
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
