import React from "react";
import dashboard from "../assets/dashboard.jpg";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { HiOutlineExternalLink } from "react-icons/hi";

const Cards = ({ currElem }) => {
  const { tech, title, summary, image, usedTech } = currElem;

  return (
    <li className="h-114  w-78 border border-gray-400 rounded-2xl overflow-hidden onCard-hover group">
      <div className="relative ">
        <img
          src={image}
          alt=""
          className=" h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />

        <div
          className="absolute inset-0 bg-black/60 
                               opacity-0  group-hover:opacity-100 
                               transition duration-300
                               text-white flex justify-center items-center"
        >
          <div
            className="flex justify-center items-center h-12 w-full gap-4
                                  opacity-0 scale-75
                                  group-hover:opacity-100 
                                  group-hover:scale-100
                                  transition duration-300"
          >
            <HiOutlineExternalLink
              className="text-3xl  bg-white p-1 text-black rounded-2xl
                                                        hover:scale-110 transition duration-200"
            />

            <IoLogoGithub
              className="text-3xl bg-white p-1 text-black rounded-2xl
                                               hover:scale-110 transition duration-200"
            />
          </div>
        </div>
      </div>
      <div className="card-details mt-5 p-3">
        <div className="h-6 p-px w-14 bg-purple-300 text-[12px] rounded-xl text-center text-black">
          {tech}
        </div>

        <h2 className="font-bold  ">{title}</h2>
        <h4 className="mt-2 text-gray-500  text-sm">{summary}</h4>

        <div className="flex gap-2 mt-2 flex-nowrap ">
          {usedTech.map((currTech, index) => {
            return (
              <div key={index} className="tech-used">
                {currTech}
              </div>
            );
          })}
        </div>

        <div className="flex gap-10 mt-5 text-black ">
          <button className="btn text-white bg-blue-700 flex justify-center items-center gap-2 p-1">
            <FaExternalLinkAlt className="text-sm" /> <span>Live</span>
          </button>
          <button
            className="btn flex justify-center items-center gap-2 p-1 hover:bg-gray-100
                  "
          >
            <IoLogoGithub className="text-sm" />
            Code
          </button>
        </div>
      </div>
    </li>
  );
};

export default Cards;
