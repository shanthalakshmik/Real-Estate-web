import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import Rent from "./pages/Rent";
import Agents from "./pages/Agents";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ContactUs from "./pages/ContactUs";
import PropertyDetails from "./pages/PropertyDetails";
import PropertyCard from "./components/PropertyCard";


const App = () => {
  return (
    
      
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        
        {/* Properties Page */}
        <Route path="/properties" element={<Properties />} />
        {/* Rent Page */}
        <Route path="/rent" element={<Rent />} />
        
        {/* Agents Page */}
        <Route path="/agents" element={<Agents />} />
        
        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/*ContactUs page */}
        <Route path="/contactus" element={<ContactUs />} />

        {/*PropertyDetails Page */}
        <Route path="/properties/:id" element={<PropertyDetails />} />

        {/*PropertyCard components */}
        <Route path="/propertyCard" element={<PropertyCard />} />
        
        {/* Dashboard Page */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
    
  );
};

export default App; 