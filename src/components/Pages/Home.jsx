import React, { useRef } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { useReveal } from "../hooks/useReveal";

export const Home = () => {
    


  return (
    <div
      className="h-screen container
           bg-radial-[at_50%_50%]  from-white to-purple-200 to-70%"
     >

    <div className="flex-center h-[80%] gap-15 ">
      <div className=" first-container max-h-2/5 max-w-2/5 flex-center gap-10 flex-col items-start flex-nowrap ">
          <div className="  flex-center items-start flex-col flex-wrap">
            <h1 className="text-6xl font-bold">
              <span>Hi, I'm</span>{" "}
              <span className="text-purple-600">Alex </span>
            </h1>
            <h2 className="text-7xl font-bold">
              <span className="text-purple-600">Chen</span>
            </h2>
          </div>

          <div>
            <p className="text-2xl text-gray-500">
              Frontend Web Developer & WordPress Expert
            </p>
          </div>

          <div className="text-md text-gray-500">
            <p>
              I craft responsive, modern websites with React, JavaScript, and
            </p>
            <p>
              WordPress — blending code with design to create exceptional
              digital experiences.
            </p>
          </div>

          <div className="flex gap-5">
            <button
              className="group
            flex items-center justify-center gap-2 
             bg-blue-600 text-white 
            p-2 rounded-3xl w-40 hover:bg-blue-700
            transition-all duration-300
            "
            >
              <span className="transition-all duration-300 group-hover:-translate-x-1">
                View Projects
               </span>
                <FaLongArrowAltRight className="transition-all duration-300 group-hover:translate-x-1" />
             
            </button>

            <button
              className="border-blue-600 p-3 rounded-3xl border w-40
            hover:bg-blue-600
            hover:text-white
            
            transition-all duration-300"
            >
              Contact Me
            </button>
          </div>

          <div className="flex items-start gap-5 w-full text-xl p-4">
            <div className="icon-bg">
              <FaGithub />
            </div>

            <div className="icon-bg">
              <IoMailOutline />
            </div>
          </div>
        </div>


        

        <div  className="relative ">
          <div
            
            className=" black-box   h-68  w-110 bg-black rounded-xl p-5 flex flex-col gap-4 ">
            <div className=" flex justify-items-center gap-5 ">
              <div className="circles flex items-center  gap-3">
                <div className="w-4 h-4 rounded-[50%] bg-red-600"></div>
                <div className="w-4 h-4 rounded-[50%] bg-yellow-600"></div>
                 <div className="w-4 h-4 rounded-[50%] bg-green-600"></div>
              </div>
              <div>
                <p className="text-gray-500">portfolio.tsx</p>
              </div>
            </div>

            <div className="devDetails text-white mt-5 ">
              <p className="text-[12px]">
                <span className="text-purple-400">const</span>
                {" "}
                <span className="text-blue-400">developer</span>
                {" "}
                <span>=</span>
                {" "}
                <span className="text-yellow-400">&#123;</span>
              </p>

              <p className="flex flex-col gap-1 text-sm ml-4 mt-4 text-[12px]">
                <p className="text-red-400">name
                  <span className="text-gray-300 ml-1">:</span>
                  <span className="ml-4 text-green-500">'Alex Chen',</span>
                </p>
                <p className="text-red-400">role
                  <span className="text-gray-300 ml-1">:</span>
                  <span className="ml-4 text-green-500">'Frontend Developer',</span>

                </p>

                <p className="text-red-400">Skills
                  <span className="text-gray-300 ml-1">:{" "} <span className="ml-2">&#91;</span></span>
                  <br />
                  <span className="text-green-500 ml-10">'React',{" "}  {" "}'JavaScript',{" "} {" "} 'WordPress'</span>
                  <p>{" "}</p>
                  <p><span className="text-gray-300">&#93; ,</span></p>
                </p>
                <p className="text-red-400">passion
                  <span className="text-gray-300 ml-1">:</span>
                  <span className="text-green-500 ml-5">'Creating amazing UX'</span>
                  
                </p>
                <p><span className="text-yellow-400 text-md mt-2">&#125;</span></p>
              </p>
            
          
          </div>

          <div className="zoom-in floating-circle
           h-10 w-10   border-white border-2 backdrop-blur-sm   
          rounded-[50%]  p-6  absolute -bottom-10 -left-5 animate-[float_5s_ease-in-out_infinite]
          bg-purple-400/40"></div>
            

            <div className="floating-square
            h-12 w-14   border-white border backdrop-blur-sm rounded-lg   
            p-6  absolute top-3 -right-5 animate-[float_5s_ease-in-out_infinite]
          bg-purple-400/40"
            >

            </div>
          </div>  
        </div>
      </div>
    </div>

    
  );
};
