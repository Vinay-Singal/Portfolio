import React, { useState } from "react";
import profile from "../../public/profile.png";
import { RxCross2 } from "react-icons/rx";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-scroll";
function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experience",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <>
      <div className="max-w screen-2xl container mx-auto px-4 md:px-20 shadow-md fixed top-0 left-0 right-0 bg-white">
        <div className="flex justify-between items-center py-4 h-16">
          <div className="flex space-x-2 items-center">
            <img
              src={profile}
              alt="logo"
              className="w-12 h-12
                object-fit rounded-full"
            />
            <h1 className="font-semibold text-xl cursor-pointer">
              Vinay <span className="text-green-500">Singal</span>
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>
          {/*desktop navbar*/}
          <div className="hidden md:flex items-center">
            <ul className="flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  >
                  {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div onClick={() => setMenu(!menu)} className="md:hidden">
            {menu ? <RxCross2 size={24} /> : <FiMenu size={24} />}
          </div>
        </div>
      </div>
      {/* mobile navbar*/}
      {menu && (
  <div className="bg-white fixed top-0 left-0 w-full h-full z-50 transition-all duration-500 ease-in-out transform">
    <div className="absolute top-4 right-4">
      <RxCross2 
        className="text-2xl cursor-pointer" 
        onClick={() => setMenu(!menu)} 
      />
    </div>
    <ul className="md:hidden flex flex-col h-full items-center justify-center space-y-3 text-xl">
      {navItems.map(({ id, text }) => (
        <li
          className="hover:scale-105 duration-200 font-bold cursor-pointer"
          key={id}
        >
          <Link 
            onClick={() => setMenu(!menu)} 
            to={text}
            smooth={true}
            duration={500}
            offset={-70}
            activeClass="active"
          >
            {text}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)}
    </>
  );
}

export default Navbar;
