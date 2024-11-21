import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-blue-600 p-4 text-white">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">Real Estate</Link>
      <div className="flex space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        <Link to="/agent/1" className="hover:underline">Agent Profile</Link>
        <Link to="/login" className="hover:underline">Login</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
