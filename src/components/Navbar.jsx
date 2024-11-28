import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRocket, FaBars } from "react-icons/fa";
import Logo from "../assets/logo-transparent-svg.svg";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={Logo}
            alt="ULTRA Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Launch Mode */}
        <Link
          to="/launch"
          className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-full text-white hover:scale-105 transition-transform"
        >
          Launch Mode <FaRocket className="ml-2" />
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black/90 p-4">
          <Link
            to="/launch"
            className="block text-center py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
            onClick={() => setMobileMenuOpen(false)}
          >
            Launch Mode
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
