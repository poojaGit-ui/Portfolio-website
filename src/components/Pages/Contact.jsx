import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { FiLinkedin } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { FiSend } from "react-icons/fi";




export const Contact = () => {
  return (
    <>
      <div className="contact-main flex items-center flex-col gap-5 h-screen w-screen">
        <div className="flex justify-center items-center flex-col gap-2 ">
          <h1 className="text-3xl font-bold mt-10">Let's Connect</h1>
          <h3 className="text-gray-500 mt-5  ">
            Ready to bring your project to life? Let's discuss how we can work
            together to create something amazing.
          </h3>
        </div>

        <div className="flex mt-10 justify-evenly h-125 w-full ">
          <div
            className="message p-5 text-lg   border border-gray-400 hover:border-blue-500 w-110 rounded-lg
            h-85"
          >
            <h4 className="font-semibold">Send me a message</h4>

            <div className="min-h-full min-w-full flex flex-col gap-2 mt-3">

              <label htmlFor="Name" className="text-sm">Name </label>
              <input  className="bg-gray-200 outline-none rounded-lg p-1" type="text" name="Name" />
              
              <label htmlFor="Email" className="text-sm">Email   </label>
              <input  className="bg-gray-200 outline-none rounded-lg p-1" type="text" name="Email" />
            
              <label htmlFor="Message" className="text-sm">Message</label>
              <input  className="bg-gray-200 outline-none rounded-lg p-1" type="text" name="Message" />
              
              <button className="text-center flex justify-center items-center gap-2 text-white bg-blue-500
              p-1 rounded-2xl mt-2 text-sm
              ">
                <FiSend/> <span>Send</span>
              </button>
            </div>
          </div>
          <div className="get-in-touch  w-110">
            <h5 className="text-2xl font-bold">Get in touch</h5>
            <p className="text-gray-500 mt-5">
              I'm always excited to work on new projects and collaborate with
              passionate people. Whether you have a question, want to work
              together, or just want to say hi, feel free to reach out!
            </p>

            <div className="flex flex-col gap-2 mt-5">
              <div className="contact">
                <div>
                  <div className="p-3 bg-indigo-200 rounded-lg text-blue-500 text-lg">
                    <MdOutlineEmail />
                  </div>
                </div>
                <div>
                  <span className="font-bold">
                    <p>Email</p>
                  </span>
                  <span className="text-gray-500">
                    <p>alex.chen@example.com</p>
                  </span>
                </div>
              </div>
              <div className="contact">
                <div className="p-3 bg-indigo-200 rounded-lg  text-blue-500 text-lg">
                  <div>
                    <FaPhoneAlt />
                  </div>
                </div>
                <div>
                  <span className="font-bold">
                    <p>Phone</p>
                  </span>
                  <span className="text-gray-500">
                    <p>+1 (555) 123-4567</p>
                  </span>
                </div>
              </div>
              <div className="contact">
                <div className="p-3 bg-indigo-200 rounded-lg text-blue-500 text-lg">
                  <div>
                    <IoLocationOutline />
                  </div>
                </div>
                <div>
                  <span className="font-bold">
                    <p>Location</p>
                  </span>
                  <span className="text-gray-500">
                    {" "}
                    <p>San Francisco, CA</p>
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <h5>Connect with me</h5>
              <div className="flex items-center gap-5 mt-2 ">
                <IoLogoGithub className="border border-gray-400 p-0.5 rounded-sm text-xl"/>
                <FiLinkedin className="border border-gray-400 p-0.5 rounded-sm text-xl" />
                <FaXTwitter className="border border-gray-400 p-0.5 rounded-sm text-xl" />
                <MdOutlineMail className="border border-gray-400 p-0.5 rounded-sm text-xl"/>
              </div>
            </div>

            <div className="w-100 h-24 p-3 mt-8 rounded-lg flex flex-col 
            bg-linear-to-r from-sky-600 to-indigo-700 text-white text-sm">
              <p className="font-bold">Currently Available</p>
              <p>I'm open to new opportunities and projects. Let's create something amazing together!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
