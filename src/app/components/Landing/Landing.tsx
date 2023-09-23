// src/components/LandingPage.tsx
import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div
      className="relative flex justify-center items-center bg-cover bg-center min-h-screen flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dgl1y6erd/image/upload/v1695421318/imresizer-1695421290949_k6cuu9.jpg')`,
        backgroundSize: "cover",
        marginTop: "-72px",
      }}
    >
      <div className="absolute inset-0 opacity-80 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute inset-0 opacity-25 bg-black"></div>
      <h1 className="text-white text-center text-6xl font-semibold z-30">
        Get the delicious food
      </h1>
      <h4 className="text-white text-2xl z-30 my-6">Eat Smart & Healthy</h4>

      <button
        type="button"
        className="z-30 text-white bg-gradient-to-r from-orange-400 via-orange-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Order Now
      </button>
    </div>
  );
};

export default LandingPage;
