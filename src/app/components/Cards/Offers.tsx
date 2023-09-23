"use client";
import React, { useState } from "react";
import { CiPizza } from "react-icons/ci";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { AiOutlineFieldTime } from "react-icons/ai";

const WhyChooseUs: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const cardStyles = `bg-${
    isDarkMode ? "gray-800 text-white" : "white"
  } p-6 rounded-lg shadow-md`;
  const iconStyles = `text-4xl ${
    isDarkMode ? "text-yellow-500" : "text-primary"
  } mb-4`;

  return (
    <section className={`py-12  dark:bg-gray-900 dark:text-white`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className={`text-3xl font-semibold `}>Why Choose Us?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            icon={<CiPizza className={iconStyles} />}
            title="Delicious Food"
            description="We serve mouthwatering dishes prepared by our expert chefs using the freshest ingredients."
          />
          <Card
            icon={<AiOutlineFieldTime className={iconStyles} />}
            title="30 Minutes Delivery"
            description="Our team is dedicated to providing exceptional service and making your dining experience memorable."
          />
          <Card
            icon={<HiOutlineBadgeCheck className={iconStyles} />}
            title="Quality Assurance"
            description="We uphold strict quality standards to ensure every dish meets our highest expectations."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white shadow shadow-lg flex flex-col items-center rounded-lg p-8 dark:bg-gray-800 dark:text-white">
      <div className="bg-orange-200 text-orange-600 rounded-2xl flex items-center justify-center pt-4 w-20 h-20">
        {icon}
      </div>
      <h3 className="text-xl mt-5 font-semibold mb-2">{title}</h3>
      <p className="text-center">{description}</p>
    </div>
  );
};
