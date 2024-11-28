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
  const canY = useTransform(scrollYProgress, [0, 1], ["29%", "150%"]);
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
      {/* Centered Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-4 z-10">
        <h1 
          className="text-[2rem] sm:text-[3rem] md:text-[5rem] lg:text-[10rem] font-bold uppercase tracking-[0.5em]"
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
        style={{
          y: canY,
          scale: canScale,
          opacity: canOpacity,
          position: "absolute",
        //   bottom: 0,
        //   left: "30%",
          transform: "translateX(-50%)",
          zIndex: 20,
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