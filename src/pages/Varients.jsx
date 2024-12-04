import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import REDcola from "../assets/Animate/Freesugar.png";

const RedColaVariant = () => {
  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  // Title animation
  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  // Image animation
  const imageVariants = {
    hidden: { 
      opacity: 0, 
      x: 100,
      rotate: -10
    },
    visible: { 
      opacity: 1, 
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15
      }
    },
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: { duration: 0.3 }
    }
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="w-full min-h-screen flex items-center justify-center px-4 py-16 mt-16 md:mt-0"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div 
          className="w-full max-w-[1300px] mx-auto bg-black border border-white/20 shadow-lg rounded-xl overflow-hidden md:h-[50vh]"
          initial={{ 
            opacity: 0, 
            scale: 0.95 
          }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            transition: {
              duration: 0.5,
              ease: "easeOut"
            }
          }}
        >
          <div className="flex flex-col md:flex-row h-full">
            {/* Title Section */}
            <motion.div 
              className="w-full md:w-1/2 p-6 md:p-10 flex items-center justify-center"
              variants={titleVariants}
            >
              <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
                RED COLA VARIANTS
              </h1>
            </motion.div>
            
            {/* Image Section */}
            <motion.div 
              className="w-full md:w-1/2 flex items-center justify-center"
              variants={imageVariants}
              whileHover="hover"
            >
              <div className="w-full h-full flex items-center justify-center">
                <motion.img 
                  src={REDcola} 
                  alt="Red Cola Variant" 
                  className="w-full h-full object-contain md:object-cover"
                  initial={{ 
                    filter: "brightness(0.7)",
                    scale: 0.9
                  }}
                  animate={{
                    filter: "brightness(1)",
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut"
                    }
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RedColaVariant;