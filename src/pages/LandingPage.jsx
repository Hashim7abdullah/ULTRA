import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import HomePage from "./HomePage";
import LaunchPage from "./LaunchPage";
import RedColaVariant from "./Varients";

const LandingPage = () => {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        smoothMobile: true,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      }}
      containerRef={containerRef}
      watch={[]}
    >
      <div data-scroll-container ref={containerRef}>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <section data-scroll-section>
            <HomePage />
          </section>
          
          <section data-scroll-section>
            <LaunchPage />
          </section>
          
          <section data-scroll-section>
            <RedColaVariant />
          </section>
        </motion.div>
      </div>
    </LocomotiveScrollProvider>
  );
};

export default LandingPage;