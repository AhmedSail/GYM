import React, { useState } from "react";
import { NavbarMenu } from "../../mockData/data";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import { FaDumbbell } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="shadow-md -z-8">
        <div className="container flex justify-between items-center">
          {/* logoSection */}
          <div className="w-52 ml-5 md:ml-0 flex justify-start items-center text-2xl py-8 -z-8">
            <FaDumbbell className="font-bold" />
            <p className="m-1 font-bold">CODERS</p>
            <p className="text-secondary font-bold">GYM</p>
          </div>

          {/* MenuSection */}
          <div className="hidden md:block -z-8">
            <ul className="flex justify-center font-semibold gap-8">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a className="font-semibold relative group" href={item.link}>
                    {item.title}
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-secondary to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* IconsSection */}
          <div className="flex justify-center items-center gap-3">
            <button className="text-2xl hover:bg-primary transition-all duration-300 p-2 hover:text-white rounded-full font-semibold">
              <CiSearch />
            </button>
            <button className="text-2xl hover:bg-primary transition-all duration-300 p-2 hover:text-white rounded-full">
              <CiShoppingCart />
            </button>
            <button className="hidden md:block font-semibold text-primary border-primary border-2 rounded-md px-3 py-2 hover:bg-primary hover:text-white transition-all duration-300">
              Login
            </button>

            {/* mobileSection */}
            <button
              className="md:hidden p-2 focus:outline-none"
              onClick={toggleMenu}
            >
              <MdMenu className="text-3xl" />
            </button>
          </div>
        </div>
      </nav>

      {/* mobileNav */}
      <ResponsiveMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;
