import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src="/images/home logo.png" // Path to your logo image
            alt="Real Estate Logo"
            className="h-10 w-10 object-cover" // Adjust size as needed
          />
          <h1 className="text-2xl font-bold">Real Estate</h1>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/properties" className="hover:underline">
                Properties
              </Link>
            </li>
            <li>
              <Link to="/rent" className="hover:underline">
                Rent
              </Link>
            </li>
            <li>
              <Link to="/agents" className="hover:underline">
                Agents
              </Link>
            </li>
            <li>
              <Link to="/contactUs" className="hover:underline">
                ContactUs
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:underline">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
