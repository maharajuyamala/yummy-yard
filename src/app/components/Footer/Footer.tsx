import React from "react";
import { BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="dark:bg-black bg-white dark:text-white mt-28">
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">Yummy Yard</h1>
            <p className="align-justify w-[70%] my-2">
              Browse a diverse menu, order with ease, and enjoy speedy delivery
              for a hassle-free dining experience
            </p>
            <div className="flex my-3 gap-2">
              <div className="border border-orange-600 hover:bg-orange-600 hover:text-white bg-transparent p-2 text-sm rounded-full">
                <BiLogoFacebook size={14} />
              </div>
              <div className="border border-orange-600 hover:bg-orange-600 hover:text-white p-2 text-sm rounded-full">
                <BsInstagram size={14} />
              </div>
              <div className="border border-orange-600 hover:bg-orange-600 hover:text-white p-2 text-sm rounded-full">
                <FaLinkedinIn size={14} />
              </div>
              <div className="border border-orange-600 hover:bg-orange-600 hover:text-white p-2 text-sm rounded-full">
                <BiLogoTwitter size={14} />
              </div>
            </div>
          </div>
          <div className="md:w-1/3 mt-4 md:mt-0">
            <h2 className="text-2xl font-semibold mb-2">Quick Links</h2>
            <ul className="text-sm ">
              <li className="mb-2">
                <a href="#" className="hover:text-indigo-500">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-indigo-500">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-indigo-500">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-indigo-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className=" mb-4 md:mb-0">
              <h2 className="text-2xl font-semibold mb-2">
                Ready to get start?
              </h2>
              <p className="text-sm">
                Simply click on the links below to get express help or
                complaints
              </p>
            </div>
            <div className="flex gap-4 my-5">
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 py-2 px-4 rounded-md  mt-2 md:mt-0"
              >
                Help
              </button>
              <button
                type="submit"
                className="border border-orange-600 hover:border-red-800 py-2 px-4 rounded-md  mt-2 md:mt-0"
              >
                Complaints
              </button>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Created by Maharaju Yamala
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
