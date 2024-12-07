import React from "react";
import { Link } from "react-router-dom";
import { FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";
import Logo from "../assets/logo-transparent-svg.svg";
import MobileBottomNavbar from "./MobileBottomNavbar";

const Navbar = () => {
  return (
    <>
      <motion.nav
        className="fixed hidden md:block top-0 left-0 w-full backdrop-blur-sm z-50 bg-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              alt="ULTRA Logo"
              className="h-10 w-auto object-contain brightness-200"
            />
          </Link>

          <motion.div
            className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-full bg-white/20 text-white hover:scale-105 transition-transform"
          >
            <Link to={"/main"} className="flex items-center">
              Launch Mode <FaRocket className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </motion.nav>

      <MobileBottomNavbar />
    </>
  );
};


export default Navbar;