import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "../assets/file.png";

const HomePage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effect for the can
  const canY = useTransform(scrollYProgress, [0, 1], ["28%", "116%"]);
  const canScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const canOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div 
      ref={ref}
      className="h-screen w-full overflow-hidden relative flex items-center justify-center"
      style={{
        background: "linear-gradient(90deg, rgba(252,128,111,1) 0%, rgba(255,248,201,1) 100%)",
        fontFamily: "'Orbitron', sans-serif"
      }}
    >
      {/* Bottom Gradient Overlay */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 z-10"
        style={{
          background: 'linear-gradient(to top, rgba(252,128,111,0.8) 0%, rgba(255,248,201,0) 100%)',
          pointerEvents: 'none'
        }}
      />

      {/* Bottom Shadow Overlay */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-16 z-10"
        style={{
          boxShadow: 'inset 0 -20px 30px -10px rgba(0,0,0,0.1)',
          pointerEvents: 'none'
        }}
      />

      {/* Centered ULTRA Text Box */}
      <div 
        className="absolute z-10 w-[70vw] h-[30vw] flex items-center justify-center rounded-xl shadow-2xl"
        style={{
          background: "linear-gradient(90deg, rgba(252,128,111,1) 0%, rgba(255,248,201,1) 100%)",
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)'
        }}
      >
        <h1 
          className="text-[2rem] sm:text-[3rem] md:text-[5rem] lg:text-[10rem] font-bold uppercase tracking-[0.5em] text-center"
          style={{
            background: "linear-gradient(90deg, rgba(205,252,255,1) 39%, rgba(255,0,0,1) 67%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          {['U', 'L', 'T', 'R', 'A'].map((letter, index) => (
            <span key={index} className="inline-block">{letter}</span>
          ))}
        </h1>
      </div>

      {/* Animated Can Image */}
      <motion.div
        initial={{ y: "-30%", scale: 1, rotate: 90 }}
        animate={{ 
          y: 215, 
          scale: 1, 
          rotate: 0 
        }}
        transition={{ 
          delay: 1,
          type: "spring", 
          stiffness: 60, 
          damping: 20 
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
          paddingBottom: "2rem"
        }}
      >
        <img
          src={Hero}
          alt="ULTRA Energy Drink"
          className="w-full h-screen object-contain"
        />
      </motion.div>
    </div>
  );
};

export default HomePage;