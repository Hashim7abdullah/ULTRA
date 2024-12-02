import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaRocket, FaBars } from "react-icons/fa";
import { motion } from "framer-motion";
import Logo from "../assets/logo-transparent-svg.svg";

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navbarStyle, setNavbarStyle] = useState({
    background: "linear-gradient(90deg, rgba(252,128,111,1) 0%, rgba(255,248,201,1) 100%)",
    textColor: "text-black",
    logoFilter: "",
    buttonBg: "linear-gradient(0deg, rgba(212,231,231,1) 1%, rgba(214,219,219,1) 52%, rgba(202,206,209,1) 100%)"
  });

  useEffect(() => {
    // If not on homepage, set to black
    if (location.pathname !== '/') {
      setNavbarStyle({
        background: "rgba(0,0,0,1)",
        textColor: "text-white",
        logoFilter: "brightness(200%)",
        buttonBg: "rgba(255,255,255,0.2)"
      });
      return;
    }

    const handleScroll = () => {
      const launchPage = document.getElementById('launch-page');
      if (launchPage) {
        const rect = launchPage.getBoundingClientRect();
        const isLaunchPageTouching = rect.top <= 58;

        if (isLaunchPageTouching) {
          setNavbarStyle({
            background: "rgba(0,0,0,1)",
            textColor: "text-white",
            logoFilter: "brightness(200%)",
            buttonBg: "rgba(255,255,255,0.2)"
          });
        } else {
          setNavbarStyle({
            background: "linear-gradient(90deg, rgba(252,128,111,1) 0%, rgba(255,248,201,1) 100%)",
            textColor: "text-black",
            logoFilter: "",
            buttonBg: "linear-gradient(0deg, rgba(212,231,231,1) 1%, rgba(214,219,219,1) 52%, rgba(202,206,209,1) 100%)"
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={false}
      animate={{ 
        background: navbarStyle.background 
      }}
      transition={{ 
        duration: 0.5,
        ease: "easeInOut"
      }}
      className="fixed top-0 left-0 w-full backdrop-blur-sm z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <motion.img
            src={Logo}
            alt="ULTRA Logo"
            initial={false}
            animate={{ 
              filter: navbarStyle.logoFilter 
            }}
            transition={{ 
              duration: 0.5,
              ease: "easeInOut"
            }}
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Launch Mode */}
        <motion.div
          initial={false}
          animate={{ 
            background: navbarStyle.buttonBg,
            color: navbarStyle.textColor
          }}
          transition={{ 
            duration: 0.5,
            ease: "easeInOut"
          }}
          className={`hidden md:flex items-center space-x-2 px-4 py-2 rounded-full hover:scale-105 transition-transform ${navbarStyle.textColor}`}
        >
          <Link to="/launch" className="flex items-center">
            Launch Mode <FaRocket className="ml-2" />
          </Link>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <motion.button
            initial={false}
            animate={{ 
              color: navbarStyle.textColor 
            }}
            transition={{ 
              duration: 0.5,
              ease: "easeInOut"
            }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="focus:outline-none"
          >
            <FaBars size={24} />
          </motion.button>
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
    </motion.nav>
  );
};

export default Navbar;