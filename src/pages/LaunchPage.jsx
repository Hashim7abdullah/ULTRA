import React from 'react';
import { motion } from 'framer-motion';

const LaunchPage = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-16 flex flex-col items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h2 
          className="text-5xl md:text-7xl lg:text-9xl font-bold uppercase"
          style={{
            background: 'linear-gradient(to right, #00c6ff, #0072ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          LAUNCH MODE
        </h2>

        <motion.img 
          src="https://www.pngitem.com/pimgs/m/198-1984014_energy-drink-can-png-transparent-png.png"
          alt="ULTRA Energy Drink"
          initial={{ rotate: 90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-xs md:max-w-md lg:max-w-lg mx-auto mt-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 max-w-2xl mx-auto text-xl"
        >
          Experience the ULTRA difference. Pure energy, ultimate performance.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LaunchPage;