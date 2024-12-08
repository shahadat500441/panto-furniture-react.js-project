import { NavLink, Link } from "react-router-dom";
import { FaBagShopping, FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { useState,useEffect } from "react";

const navItems = [
  { path: "/", label: "Furniture" },
  { path: "/shop", label: "Shop" },
  { path: "/about", label: "About Us" },
  { path: "/contact", label: "Contact" },
];

const NavItems = ({ toggleMenu }) => {
  return (
    <ul className="flex flex-col justify-center items-center  md:flex-row  space-x-6 gap-5">
      {navItems.map((item, index) => (
        <li key={index} onClick={toggleMenu}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive ? "text-primary font-bold " : "hover:text-primary"
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((previseState) => !previseState);
  };

// when scrolled , apply bg color to navbar
useEffect(() => {
  const handleScroll = () => {
      if (window.scrollY > 50) {
          setIsScrolled(true);
      } else {
          setIsScrolled(false);
      }
  };

  window.addEventListener('scroll', handleScroll);
  return () => {
      window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition duration-300 ease-in-out  ${isScrolled ? 'bg-white shadow-md text-black' : 'bg-transparent text-white'}`}
    >
      <nav className=" max-w-screen-2xl container mx-auto flex justify-between items-center py-6 px-4">
        {/* logo */}
        <Link to="/" className="font-bold">
          Panto
        </Link>

        {/* humbergar menu for mobile  */}
        <div
          onClick={toggleMenu}
          className="md:hidden text-xl cursor-pointer hover:text-primary"
        >
          {isMenuOpen ? null : <FaBars />}
        </div>

        {/* destop menu items */}
        <div className="hidden md:flex">
          <NavItems></NavItems>
        </div>

        {/* mobile menu items */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 flex flex-col justify-center items-center space-x-8 text-white transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <div
            className="absolute top-4 right-4 text-xl cursor-pointer "
            onClick={toggleMenu}
          >
            <FaTimes />
          </div>

          <NavItems toggleMenu={toggleMenu}></NavItems>
        </div>

        {/*icon  */}
        <div className="hidden md:block cursor-pointer relative">
          <FaBagShopping className="text-xl" />
          <sup className="absolute w-5 h-5 bg-primary text-white top-0 -right-3 flex justify-center items-center rounded-full ">
            0
          </sup>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
