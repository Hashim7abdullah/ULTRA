import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LaunchPage from "./pages/LaunchPage";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/launch" element={<LaunchPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
