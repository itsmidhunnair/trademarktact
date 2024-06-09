import { useState } from "react";
import Logo from "../../../assets/images/logo.png";
import { HamburgerIcon } from "../../icons";
import TopHeader from "./topHeader";

const Header = () => {
  const [openNavbar, setOpenNavbar] = useState(false);

  const navLinks = [
    "Home",
    "About Us",
    "Services",
    "Projects",
    "Clients",
    "Contact Us",
  ];

  return (
    <div className="sticky top-0 z-10">
      <TopHeader />
      <div
        className="px-16 py-4 bg-white
        text-gray-500 border-b-2 border-primary flex justify-between items-center shadow-lg max-sm:flex-row-reverse max-sm:px-6"
      >
        <div className="relative w-52 animate-introLogoLeft max-sm:w-40 max-sm:animate-introLogoRight">
          <img
            src={Logo}
            alt="logo"
            className="w-full h-auto"
          />
        </div>
        <button
          onClick={() => setOpenNavbar(!openNavbar)}
          className="w-8 h-8 sm:hidden"
        >
          <HamburgerIcon />
        </button>
        <div
          className={`flex gap-8 text-lg transition-all duration-200 font-medium max-sm:absolute bg-white max-sm:left-0 max-sm:flex-col max-sm:top-12 max-sm:border-r-2 max-sm:-z-10 max-sm:pt-6 max-sm:drop-shadow-lg border-primary overflow-hidden max-sm:h-screen ${
            openNavbar ? "max-sm:w-52" : "max-sm:w-0"
          }`}
        >
          {navLinks.map((link) => (
            <div
              className="hover:text-primary cursor-pointer max-sm:ml-6"
              key={link}
            >
              {link}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
