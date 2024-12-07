import React from "react";
import { Link } from "react-router-dom";
import { FaRocket, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import Logo from "../assets/logo-transparent-svg.svg";
import MobileBottomNavbar from "./MobileBottomNavbar";

const Navbar = () => {
  return (
    <>
      <motion.nav className="fixed hidden md:block top-0 left-0 w-full backdrop-blur-sm z-50 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center h-16">
          {/* Logo on the left */}
          <Link to="/" className="flex items-center">
            <img 
              src={Logo} 
              alt="ULTRA Logo" 
              className="h-10 w-auto object-contain brightness-200" 
            />
          </Link>

          {/* Navigation items on the right */}
          <div className="flex items-center space-x-4">
            {/* Launch Mode */}
            <motion.div 
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/20 text-white hover:scale-105 transition-transform"
            >
              <Link to="/main" className="flex items-center">
                Launch Mode 
                <FaRocket className="ml-2" />
              </Link>
            </motion.div>

            {/* Login */}
            <motion.div 
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/20 text-white hover:scale-105 transition-transform"
            >
              <Link to="/login" className="flex items-center">
                Login
                <FaUser className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.nav>
      <MobileBottomNavbar />
    </>
  );
};

export default Navbar;