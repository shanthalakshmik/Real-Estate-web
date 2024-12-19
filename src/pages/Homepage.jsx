import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Agents from "../components/Agents"; // Import the Agents component

const Homepage = () => {
  return (
    <div>
      <Navbar />
      {/* Add other sections here */}
      <Agents /> {/* Add Agents Section */}
      <Footer />
    </div>
  );
};

export default Homepage;
