import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "../assets/file.png";

const LaunchPage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax effect for the can
  const canY = useTransform(scrollYProgress, [0, 1], ["-70%", "120%"]);
  const canScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const canOpacity = useTransform(scrollYProgress, [0, 1], [1, 1]);

  return (
    <div
      id="launch-page"
      ref={ref}
      className="h-screen w-full bg-black overflow-hidden relative flex items-center justify-center"
      style={{
        fontFamily: "'Orbitron', sans-serif",
      }}
    >
      {/* Centered Launch Text Box */}
      <div className="absolute z-10 w-[70vw] h-[30vw] bg-black border border-white/20 rounded-xl shadow-2xl shadow-white/10 flex items-center justify-center">
        <h1
          className="text-[2rem] sm:text-[3rem] md:text-[5rem] lg:text-[8rem] font-bold uppercase tracking-[0.5em] text-center"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,214,0,1) 14%, rgba(205,252,255,1) 39%, rgba(160,141,0,1) 57%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {["L", "A", "U", "N", "C", "H"].map((letter, index) => (
            <span key={index} className="inline-block">
              {letter}
            </span>
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
        />
      </motion.div>
    </div>
  );
};

export default LaunchPage;