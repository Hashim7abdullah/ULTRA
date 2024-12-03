import React, { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import Ads from "../../assets/Main/Ads.jpg";

const AnimatedText = () => {
  const controls = useAnimation();

  useEffect(() => {
    const animateText = async () => {
      while (true) {
        await controls.start({
          x: "-100%",
          transition: {
            duration: 50,
            ease: "linear",
          },
        });

        controls.set({ x: "100%" });
      }
    };

    animateText();

    return () => {
      controls.stop();
    };
  }, [controls]);

  return (
    <motion.div 
      className="absolute bottom-0 left-0 w-full h-full flex items-center overflow-hidden z-0"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      <motion.h1
        animate={controls}
        className="whitespace-nowrap text-6xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-black"
        style={{
          background:
            "linear-gradient(90deg, rgba(252,128,111,1) 0%, rgba(255,248,201,1) 100%)",
          fontFamily: "'Orbitron', sans-serif",
          WebkitBackgroundClip: "text",
          color: "transparent",
          display: "inline-block",
          willChange: "transform",
          width: "max-content",
        }}
      >
        {Array(10).fill("ENERGY BEYOND LIMITS • ").join("")}
      </motion.h1>
    </motion.div>
  );
};

const AnimatedImage = ({ src }) => {
  return (
    <motion.div 
      className="w-full max-w-[1300px] h-[70vh] mx-auto z-50 relative overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 1, 
        type: "spring", 
        stiffness: 50,
        damping: 10
      }}
    >
      <motion.img 
        src={src} 
        alt="Advertisement" 
        className="w-full h-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      <motion.div 
        className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.5 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const Main = () => {
  return (
    <div className="w-full h-auto relative">
      <div 
        className="sticky top-[4rem] w-full h-[50vh] flex items-center justify-center flex-col my-16 overflow-hidden z-0"
      >
        <div className="relative w-full h-[9rem] flex items-center justify-center">
          <AnimatedText />
        </div>
      </div>
      
      <div className="w-full flex justify-center z-50 relative">
        <AnimatedImage src={Ads} />
      </div>
    </div>
  );
};

export default Main;