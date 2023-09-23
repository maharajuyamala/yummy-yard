"use client";
// components/ExploreMenu.tsx
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import menuData from "./menuData.json";
import "../../globals.css";

const ExploreMenu: React.FC = () => {
  const [isHovered, setIsHovered] = useState(null);

  const handleHover = (e: any) => {
    setIsHovered(e);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  useEffect(() => {
    console.log(isHovered);
  }, [isHovered]);

  const router = useRouter();
  const [cart, setCart] = useState<{ [key: number]: number }>({});

  const addToCart = (itemId: number) => {
    setCart((prevCart) => ({
      ...prevCart,
      [itemId]: (prevCart[itemId] || 0) + 1,
    }));
  };

  return (
    <>
      <div className="flex justify-between items-center mt-12 mb-6">
        <h2 className={`text-3xl font-semibold dark:text-white`}>
          Explore Menu
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {menuData.map((item: any, index) => (
          <div
            key={item.id}
            className="relative"
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => handleHover(index)}
          >
            <div className="relative h-60 my-8 flex flex-col justify-end dark:bg-gray-800 dark:text-white shadow bg-white rounded-2xl menu-item-card p-5 mb-3">
              {/* Top card */}
              <div className="flex justify-between my-2">
                <h1 className="menu-card-title">{item.title}</h1>
                <p className="menu-card-price">₹{item.price?.toFixed(2)}</p>
              </div>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => addToCart(item.id)}
                  className="hover:bg-orange-300 bg-orange-200  text-black px-4 py-2 rounded-xl text-xs"
                >
                  Add to Cart
                </button>
              </div>
            </div>
            {/* Half outside image */}
            <div className={isHovered == index ? `bg-div` : ""}>
              <img
                src={item.image}
                alt={item.title}
                className={`absolute -top-3 mx-9   `}
                width={180}
                style={{
                  transition: "transform 0.5s",
                }}
              />
            </div>
          </div>
        ))}{" "}
      </div>
    </>
  );
};

export default ExploreMenu;
