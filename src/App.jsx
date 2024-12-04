import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

// Lazy load components
const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
const LandingPage = lazy(() => import("./pages/LandingPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const VarientsPage = lazy(() => import("./pages/Main/Varientslaunch"));


// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <motion.div
      animate={{
        rotate: 360,
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="w-16 h-16 border-4 border-t-4 border-blue-500 rounded-full"
    />
  </div>
);

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <Suspense fallback={<LoadingSpinner />}>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home-page" element={<HomePage />} />
            <Route path="/main" element={<VarientsPage />} />
          </Routes>
          <Footer />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
