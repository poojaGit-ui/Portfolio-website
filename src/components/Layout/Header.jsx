import React from "react";
import { NavLink } from "react-router-dom"
import { FaRegMoon } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";

export const Header = () => {
  return (
    <div className="border border-b-gray-400 h-18">
      <div className="flex items-center justify-between h-full p-1 page-container 
    ">
      <div className="flex items-center gap-1">
       <FaCode className="bg-blue-700 text-white p-1 rounded-lg h-7 w-7" />
      <p className=" text-purple-700 font-medium ">DevPortfolio</p>
      </div>
      <nav>
      <ul className="flex items-center justify-between w-sm ">
        <li  >
          <NavLink to="/">Home</NavLink>
        </li>
        <li >
          <NavLink to="/skills">Skills</NavLink>
        </li>
        <li >
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li >
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      </nav>
      
      <div>
        <button>
          <FaRegMoon />
        </button>
      </div>
      
    </div>
    </div>
  );
};
