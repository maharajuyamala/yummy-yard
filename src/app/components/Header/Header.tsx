"use client";
// components/Header.tsx
import React, { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill, BsHandbagFill } from "react-icons/bs";
import Link from "next/link";

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header
      className={`rounded-b-full sticky top-0 z-50 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            src="https://res.cloudinary.com/dgl1y6erd/image/upload/v1695418936/CFB87F9A-D67D-4CDD-8404-2D993179B427_ki522q.png"
            className="h-12"
          />
          <div className="text-xs">
            <h1 className="text-xl font-semibold">Yummy yard</h1>
            <p>Taste the world at your doorstep</p>
          </div>
        </div>
        <div className="flex items-center md:gap-8 space-x-4">
          <div className="flex gap-5">
            <Link href="/" className="text-orange-600 text-lg font-medium">
              Home
            </Link>
            <Link
              href="/"
              className="hover:text-orange-600 text-lg font-medium"
            >
              Explore
            </Link>
            <Link
              href="/"
              className="hover:text-orange-600 text-lg font-medium"
            >
              Favorites
            </Link>
            <Link
              href="/"
              className="hover:text-orange-600 text-lg font-medium"
            >
              Account
            </Link>
          </div>
          <button
            onClick={toggleDarkMode}
            className={`bg-gray-200 dark:bg-gray-800 p-2 rounded-full transform ${
              isDarkMode ? "rotate-180" : ""
            } transition-transform`}
          >
            {isDarkMode ? <BsFillSunFill /> : <MdDarkMode />}
          </button>
          <div className="relative">
            <button>
              <BsHandbagFill size={28} />
            </button>
            <span className="absolute bg-yellow-600 rounded-full px-1 text-xs bottom-2 right-1 transform translate-x-1/2 translate-y-1/2">
              0
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
