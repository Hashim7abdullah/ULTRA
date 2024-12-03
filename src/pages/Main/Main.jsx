import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Ads from "../../assets/Main/Ads.jpg";

const AnimatedText = () => {
  const controls = useAnimation();

  useEffect(() => {
    // Immediately start the animation without any delay
    const animateText = async () => {
      while (true) {
        await controls.start({
          x: "-100%",
          transition: {
            duration: 50, // Reduced speed for smoother experience
            ease: "linear",
          },
        });

        // Reset position instantly without visual break
        controls.set({ x: "100%" });
      }
    };

    animateText();

    // Cleanup function to stop animations if component unmounts
    return () => {
      controls.stop();
    };
  }, [controls]);

  return (
    <motion.div className="absolute top-0 left-0 w-full h-full flex items-center overflow-hidden">
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
          width: "max-content", // Ensure text doesn't wrap
        }}
      >
        ENERGY BEYOND LIMITS • ENERGY BEYOND LIMITS • ENERGY BEYOND LIMITS •
        ENERGY BEYOND LIMITS • ENERGY BEYOND LIMITS • ENERGY BEYOND LIMITS •
        ENERGY BEYOND LIMITS • ENERGY BEYOND LIMITS • ENERGY BEYOND LIMITS •
        ENERGY BEYOND LIMITS • ENERGY BEYOND LIMITS • ENERGY BEYOND LIMITS •
        ENERGY BEYOND LIMITS • ENERGY BEYOND LIMITS • ENERGY BEYOND LIMITS •
        ENERGY BEYOND LIMITS • ENERGY BEYOND LIMITS • ENERGY BEYOND LIMITS •
        ENERGY BEYOND LIMITS • ENERGY BEYOND LIMITS • ENERGY BEYOND LIMITS •
        ENERGY BEYOND LIMITS • ENERGY BEYOND LIMITS • ENERGY BEYOND LIMITS •
      </motion.h1>
    </motion.div>
  );
};

const Main = () => {
  return (
    <div className="w-full h-auto relative">
      <div className="sticky top-15 w-full h-[50vh] flex items-center justify-center flex-col my-16 overflow-hidden">
        <div className="relative w-full h-[8rem] flex items-center justify-center">
          <AnimatedText />
        </div>
      </div>
      <div className="w-full max-w-[1300px] h-[70vh] mx-auto">
        <img src={Ads} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Main;
