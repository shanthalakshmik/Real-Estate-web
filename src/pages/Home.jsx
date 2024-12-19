import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackgroundSection from "../components/BackgroundSection";
import PropertyBanner from "../components/PropertyBanner";
import PropertyCard from "../components/PropertyCard";

const Home = () => {
  return (
    <div>
      <Navbar />
      <BackgroundSection />
      <PropertyBanner />
      
      <Footer />
    </div>
  );
};

export default Home;
