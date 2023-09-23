import Image from "next/image";
import Header from "./components/Header/Header";
import LandingPage from "./components/Landing/Landing";
import WhyChooseUs from "./components/Cards/Offers";
import ExploreMenu from "./components/Explore/Explore";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div className="dark:bg-gray-900">
      {" "}
      <Header /> <LandingPage />
      <div className="px-[12%]">
        <WhyChooseUs />
        <ExploreMenu />
      </div>
      <Footer />
    </div>
  );
}
