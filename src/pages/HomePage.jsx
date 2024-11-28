import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from "../assets/file.png"

const HomePage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Create parallax effects for the can
  const canY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const canScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const canOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div 
      ref={ref}
      className="bg-black text-white relative"
    >
      {/* Hero Section - Full Viewport Height */}
      <div className="h-screen w-full relative flex items-center justify-center overflow-hidden pt-16">
        {/* Centered Energy Can */}
        <motion.div 
          style={{
            y: canY,
            scale: canScale,
            opacity: canOpacity,
            position: 'absolute',
            zIndex: 20
          }}
          className="absolute z-20 w-full max-w-md"
        >
          <img 
            src={Hero} 
            alt="ULTRA Energy Drink"
            className="w-full h-auto object-contain"
          />
        </motion.div>

        {/* Text with Can Overlapping */}
        <div className="relative z-10 text-center">
          <h1 
            className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter"
            style={{
              background: 'linear-gradient(to right, #00c6ff, #0072ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            U
            <span className="opacity-0">L</span>
            T
            <span className="opacity-0">R</span>
            A
          </h1>
        </div>
      </div>

      {/* Launch Mode Section */}
      <div className="h-screen w-full bg-black flex items-center justify-center relative">
        <div className="text-center relative z-10">
          <h2 
            className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase tracking-tighter"
            style={{
              background: 'linear-gradient(to right, #00c6ff, #0072ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            LAUNCH
          </h2>
          <motion.div 
            initial={{ rotate: 90, y: 100, opacity: 0 }}
            animate={{ rotate: 0, y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md"
          >
            <img 
              src="https://www.pngkey.com/png/full/230-2302080_monster-energy-drink-can-png.png" 
              alt="ULTRA Energy Drink"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;