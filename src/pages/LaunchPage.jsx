import React from 'react';
import { motion } from 'framer-motion';
import Hero from "../assets/file.png"

const LaunchPage = () => {
  return (
    <div 
      className=" bg-blacktext-white relative font-['Orbitron'] min-h-screen"
    //   style={{
    //     background: "linear-gradient(90deg, rgba(252,128,111,1) 0%, rgba(255,248,201,1) 100%)",
    //   }}
    >
      <div className="h-screen w-full relative flex items-center justify-center overflow-hidden pt-16">
        <motion.div
          initial={{ rotate: 90, y: 100, opacity: 0 }}
          animate={{ rotate: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-20 z-20 w-full max-w-md"
        >
          <img
            src={Hero}
            alt="ULTRA Energy Drink"
            className="w-full h-auto object-contain"
          />
        </motion.div>

        <div className="relative z-20 text-center w-full px-4">
          <h2
            className="text-[4rem] sm:text-[4rem] md:text-[8rem] lg:text-[10rem] font-bold uppercase tracking-[0.5em]"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,214,0,1) 14%, rgba(205,252,255,1) 39%, rgba(160,141,0,1) 57%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            LAUNCH
          </h2>
        </div>
      </div>
    </div>
  );
};

export default LaunchPage;