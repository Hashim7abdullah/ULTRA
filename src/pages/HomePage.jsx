import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Hero from "../assets/file.png";

const HomePage = () => {
  const ref = useRef(null);
  const textRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Viewport animation for text
  const isInView = useInView(textRef, { once: true });

  // Parallax effect for the can
  const canY = useTransform(scrollYProgress, [0, 1], ["28%", "116%"]);
  const canScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const canOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div
      ref={ref}
      className="h-screen w-full overflow-hidden relative flex items-center justify-center"
      style={{
        background:
          "linear-gradient(90deg, rgba(252,128,111,1) 0%, rgba(255,248,201,1) 100%)",
        fontFamily: "'Orbitron', sans-serif",
      }}
    >
      {/* Bottom Gradient Overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-10"
        style={{
          background:
            "linear-gradient(to top, rgba(252,128,111,0.8) 0%, rgba(255,248,201,0) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Bottom Shadow Overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 z-10"
        style={{
          boxShadow: "inset 0 -20px 30px -10px rgba(0,0,0,0.1)",
          pointerEvents: "none",
        }}
      />

      {/* Centered ULTRA Text Box */}
      <div
        ref={textRef}
        className="absolute z-10 w-[70vw] h-[50vh] md:h-[30vw] flex items-center justify-center rounded-xl shadow-2xl"
        style={{
          background:
            "linear-gradient(90deg, rgba(252,128,111,1) 0%, rgba(255,248,201,1) 100%)",
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
        }}
      >
        <h1
          className="text-[2rem] sm:text-[3rem] md:text-[5rem] lg:text-[7rem] xl:[15rem] font-bold uppercase tracking-[0.5em] text-center"
          style={{
            background:
              "linear-gradient(90deg, rgba(205,252,255,1) 12%, rgba(255,0,0,1) 29%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            opacity: isInView ? 1 : 0,
            transform: isInView ? "none" : "scale(0.5)",
            transition: "opacity 0.9s cubic-bezier(0.17, 0.55, 0.55, 1), transform 0.9s cubic-bezier(0.17, 0.55, 0.55, 1)"
          }}
        >
          {["U", "L", "T", "R", "A"].map((letter, index) => (
            <motion.span 
              key={index} 
              className="inline-block transform transition-all duration-500 hover:scale-125 hover:rotate-12 hover:text-blue-500"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: index * 0.1,
                duration: 0.4,
                type: "spring",
                stiffness: 100
              }}
              style={{
                display: 'inline-block',
                transformOrigin: 'center'
              }}
            >
              {letter}
            </motion.span>
          ))}
        </h1>
      </div>

      {/* Animated Can Image */}
      <motion.div
        initial={{ y: "-30%", scale: 1, rotate: 0 }}
        animate={{
          y: 215,
          scale: 1,
          rotate: 0,
        }}
        transition={{
          delay: 1,
          type: "spring",
          stiffness: 60,
          damping: 20,
        }}
        style={{
          y: canY,
          scale: canScale,
          opacity: canOpacity,
          position: "absolute",
          transform: "translateX(-50%)",
          zIndex: 9,
          width: "100%",
          maxWidth: "32rem",
          paddingBottom: "2rem",
        }}
      >
        <img
          src={Hero}
          alt="ULTRA Energy Drink"
          className="w-full h-screen object-contain"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
};

export default HomePage;