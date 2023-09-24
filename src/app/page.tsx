"use client";

import Image from "next/image";
import Header from "./components/Header/Header";
import LandingPage from "./components/Landing/Landing";
import WhyChooseUs from "./components/Cards/Offers";
import ExploreMenu from "./components/Explore/Explore";
import Footer from "./components/Footer/Footer";
import { useSelector } from "react-redux";

export default function Home() {
  const { food } = useSelector((state: any) => state.food);
  console.log(food);
  return (
    <div className="dark:bg-gray-900">
      {" "}
      <Header cart={food?.length || 0} /> <LandingPage />
      <div className="px-[12%]">
        <WhyChooseUs />
        <ExploreMenu />
      </div>
      <Footer />
    </div>
  );
}
