import React, { useRef, useMemo, useCallback, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

// Lazy load images
import REDcola from "../../assets/Animate/new.jpg";

const RedColaVariant = React.memo(() => {
  const nextSectionRef = useRef(null);

  // Memoized scroll function
  const scrollToNextSection = useCallback(() => {
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Memoized container animation variants
  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.2,
        },
      },
    }),
    []
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* First Section */}
      <AnimatePresence>
        <motion.div
          className="w-full min-h-screen flex items-center justify-center px-4 py-16 mt-16 md:mt-0 relative"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            className="w-full max-w-[1300px] mx-auto bg-black border border-white/20 shadow-lg rounded-xl overflow-hidden md:h-[50vh]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.5,
                ease: "easeOut",
              },
            }}
          >
            <div className="flex flex-col md:flex-row h-full">
              {/* Title Section */}
              <motion.div
                className="w-full md:w-1/2 p-6 md:p-10 flex items-center justify-center"
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                    },
                  },
                }}
              >
                <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
                  COLA VARIANTS
                </h1>
              </motion.div>

              {/* Image Section */}
              <motion.div
                className="w-full md:w-1/2 flex items-center justify-center"
                variants={{
                  hidden: { opacity: 0, x: 100, rotate: -10 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    rotate: 0,
                    transition: {
                      type: "spring",
                      stiffness: 120,
                      damping: 15,
                    },
                  },
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <motion.img
                    src={REDcola}
                    alt="Red Cola Variant"
                    className="w-full h-full object-contain md:object-cover"
                    initial={{
                      filter: "brightness(0.7)",
                      scale: 0.9,
                    }}
                    animate={{
                      filter: "brightness(1)",
                      scale: 1,
                      transition: {
                        duration: 0.6,
                        ease: "easeOut",
                      },
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll Arrow */}
          <motion.div
            className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                repeat: Infinity,
                duration: 1,
                repeatType: "reverse",
              },
            }}
            onClick={scrollToNextSection}
          >
            <ChevronDown color="white" size={48} className="animate-bounce" />
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </Suspense>
  );
});

export default RedColaVariant;
