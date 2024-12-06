import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaRocket, FaBars, FaHome, FaCompass } from "react-icons/fa";
import { motion } from "framer-motion";
import Logo from "../assets/logo-transparent-svg.svg";
import MobileBottomNavbar from "./MobileBottomNavbar"; // New import

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarStyle, setNavbarStyle] = useState({
    background: "rgba(0,0,0,1)",
    textColor: "text-black",
    logoFilter: "",
    buttonBg:
      "linear-gradient(0deg, rgba(212,231,231,1) 1%, rgba(214,219,219,1) 52%, rgba(202,206,209,1) 100%)",
  });

  useEffect(() => {
    // Previous scroll and location logic remains the same
    if (location.pathname !== "/") {
      setNavbarStyle({
        background: "rgba(0,0,0,1)",
        textColor: "text-white",
        logoFilter: "brightness(200%)",
        buttonBg: "rgba(255,255,255,0.2)",
      });
      return;
    }

    const handleScroll = () => {
      const launchPage = document.getElementById("launch-page");
      if (launchPage) {
        const rect = launchPage.getBoundingClientRect();
        const isLaunchPageTouching = rect.top <= 58;

        if (isLaunchPageTouching) {
          setNavbarStyle({
            background: "rgba(0,0,0,1)",
            textColor: "text-white",
            logoFilter: "brightness(200%)",
            buttonBg: "rgba(255,255,255,0.2)",
          });
        } else {
          setNavbarStyle({
            background: "rgba(0,0,0,1)",
            textColor: "text-black",
            logoFilter: "",
            buttonBg:
              "linear-gradient(0deg, rgba(212,231,231,1) 1%, rgba(214,219,219,1) 52%, rgba(202,206,209,1) 100%)",
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        initial={false}
        animate={{
          background: navbarStyle.background,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="fixed hidden md:block top-0 left-0 w-full backdrop-blur-sm z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.img
              src={Logo}
              alt="ULTRA Logo"
              initial={false}
              animate={{
                filter: navbarStyle.logoFilter,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Launch Mode */}
          <motion.div
            initial={false}
            animate={{
              background: navbarStyle.buttonBg,
              color: navbarStyle.textColor,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className={`hidden md:flex items-center space-x-2 px-4 py-2 rounded-full hover:scale-105 transition-transform ${navbarStyle.textColor}`}
          >
            <Link to={"/main"} className="flex items-center">
              Launch Mode <FaRocket className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Bottom Navbar */}
      <MobileBottomNavbar />
    </>
  );
};

export default Navbar;
