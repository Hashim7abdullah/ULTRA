import React, { 
  useState, 
  useRef, 
  useMemo, 
  useCallback, 
  lazy, 
  Suspense 
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// Lazy load images
import REDcola from "../assets/Animate/new.jpg";
import cola from "../assets/Animate/cola.jpg";

// Memoized variant data to prevent unnecessary re-renders
const variantData = [
  {
    id: 1,
    name: "Classic Red",
    description: "The original cola experience",
    image: cola,
    details: [
      "Rich, bold flavor",
      "Iconic red packaging", 
      "Original recipe"
    ]
  },
  {
    id: 2,
    name: "Zero Sugar",
    description: "Guilt-free refreshment",
    image: cola,
    details: [
      "Zero sugar formula",
      "Same great taste", 
      "Calorie-free"
    ]
  },
  {
    id: 3,
    name: "Vanilla Twist",
    description: "Smooth vanilla infusion",
    image: cola,
    details: [
      "Creamy vanilla notes",
      "Unique flavor profile", 
      "Smooth finish"
    ]
  }
];

const RedColaVariant = React.memo(() => {
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [hoveredVariant, setHoveredVariant] = useState(null);
  const nextSectionRef = useRef(null);

  // Memoized scroll function
  const scrollToNextSection = useCallback(() => {
    nextSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  // Memoized container animation variants
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }), []);

  // Variant Details Modal
  const VariantDetailsModal = useCallback(({ variant, onClose }) => {
    if (!variant) return null;

    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div 
          className="bg-white/10 rounded-xl p-8 max-w-md w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-3xl text-white mb-4">{variant.name}</h2>
          <img 
            src={variant.image} 
            alt={variant.name} 
            className="w-full h-[300px] object-cover rounded-lg mb-4"
          />
          <p className="text-white/70 mb-4">{variant.description}</p>
          <ul className="text-white list-disc pl-5">
            {variant.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    );
  }, []);

  // Advanced Variant Carousel for Second Section
  const AdvancedVariantCarousel = useMemo(() => {
    const calculateCircularPosition = (index, total) => {
      const angle = (index / total) * Math.PI * 2;
      return {
        x: Math.cos(angle) * 200,
        y: Math.sin(angle) * 200
      };
    };

    return () => (
      <div className="flex items-center justify-center relative w-full h-[500px]">
        {variantData.map((variant, index) => {
          const isHighlighted = hoveredVariant?.id === variant.id || 
            (!hoveredVariant && index === 0);
          const { x, y } = calculateCircularPosition(index, variantData.length);

          return (
            <motion.div
              key={variant.id}
              className="absolute transition-all duration-300"
              style={{
                transform: `translate(${x}px, ${y}px)`,
                opacity: isHighlighted ? 1 : 0.5,
                zIndex: isHighlighted ? 10 : 1
              }}
              onHoverStart={() => setHoveredVariant(variant)}
              onHoverEnd={() => setHoveredVariant(null)}
              whileHover={{ scale: 1.1 }}
            >
              <img 
                src={variant.image} 
                alt={variant.name}
                className={`
                  w-[200px] h-[200px] 
                  object-cover rounded-full 
                  transition-all duration-300
                  ${isHighlighted ? 'border-4 border-white' : ''}
                `}
              />
            </motion.div>
          );
        })}
      </div>
    );
  }, [hoveredVariant]);

  // Performance-optimized components with lazy loading
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
                ease: "easeOut"
              }
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
                      damping: 10
                    }
                  }
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
                      damping: 15
                    }
                  }
                }}
                whileHover={{ scale: 1.05, rotate: 2 }}
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
                repeatType: "reverse"
              }
            }}
            onClick={scrollToNextSection}
          >
            <ChevronDown 
              color="white" 
              size={48} 
              className="animate-bounce" 
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Enhanced Second Section with Advanced Carousel */}
      <div 
        ref={nextSectionRef} 
        className="w-full min-h-screen bg-black flex flex-col items-center justify-center p-4"
      >
        <h2 className="text-white text-4xl mb-8">Our Variants</h2>
        
        {/* Advanced Variant Carousel */}
        <AdvancedVariantCarousel />
      </div>

      {/* Variant Details Modal */}
      {selectedVariant && (
        <VariantDetailsModal 
          variant={selectedVariant}
          onClose={() => setSelectedVariant(null)}
        />
      )}
    </Suspense>
  );
});

export default RedColaVariant;