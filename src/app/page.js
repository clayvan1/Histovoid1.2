"use client";

import { useState, useEffect } from "react";
import DomeGallery from "./components/DomeGallery";
import Navbar from "./components/Nav";
import LightRays from "./components/LightRays";
import GlassSurface from "./components/GlassSurface";
import CountUp from "./components/CountUP";
import GradientText from "./components/GradientText";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import SearchModal from "./components/SearchModal";
import LoadingOverlay from "./components/LoadingOverlay"; // ✅ overlay
import "./globals.css";


import Footer from "./components/Footer"; // ✅ footer

export default function Home() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Hide overlay after initial page load
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800); // adjust duration if needed
    return () => clearTimeout(timer);
  }, []);

  // Block scroll only while loading overlay is active
  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [loading]);

  const openSearch = () => setIsSearchOpen(true);

  return (
    <div className="home-container">
      {/* Loading Overlay */}
      <LoadingOverlay isLoading={loading} />

      {/* Background LightRays */}
      <div className="light">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={4}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* 🔎 Floating Search Bar */}
      <div className="search-bar">
        <div className="search-input-wrapper" onClick={openSearch}>
          <input type="text" placeholder="Search slides..." readOnly />
          <FiSearch className="search-icon" />
        </div>
      </div>

      {/* Main Content */}
      <div className="content-layout">
        {/* Left Counters */}
        <div className="counters-wrapper">
          <GlassSurface
            className="countup-flexbox frosty-glass"
            displace={15}
            distortionScale={-150}
            redOffset={5}
            greenOffset={15}
            blueOffset={25}
            brightness={60}
            opacity={0.8}
            width="220px"
            height="200px"
            mixBlendMode="screen"
          >
            <div className="countup-wrapper">
              <div className="countup-number">
                <GradientText>
                  <CountUp from={0} to={100} duration={3} />
                </GradientText>
                <span className="plus-sign">+</span>
              </div>
              <div className="countup-label">Slides</div>
            </div>
          </GlassSurface>

          <GlassSurface
            className="countup-flexbox frosty-glass"
            displace={15}
            distortionScale={-150}
            redOffset={10}
            greenOffset={20}
            blueOffset={30}
            brightness={60}
            opacity={0.8}
            width="220px"
            height="200px"
            mixBlendMode="screen"
          >
            <div className="countup-wrapper">
              <div className="countup-number">
                <GradientText>
                  <CountUp from={0} to={50} duration={3} />
                </GradientText>
                <span className="plus-sign">+</span>
              </div>
              <div className="countup-label">Tissues</div>
            </div>
          </GlassSurface>
        </div>

        {/* Dome in Center */}
        <div className="dome-wrapper">
          <DomeGallery grayscale={false} />
        </div>

        {/* Featured Stains on Right */}
        <div className="featured-stains">
          <h2 className="stains-heading">Featured Stains</h2>
          <div className="stains-grid">
            <div
              className="stain-card"
              style={{ backgroundImage: "url('/bone/stain2.jpg')" }}
            >
              <div className="stain-overlay">H&E</div>
            </div>
            <div
              className="stain-card"
              style={{ backgroundImage: "url('/bone/stain1.jpg')" }}
            >
              <div className="stain-overlay">Masson Trichrome</div>
            </div>
          </div>

          <div className="explore-btn-container">
            <Link href="/epithelium" passHref>
              <button className="explore-btn">Start Exploring →</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        <Footer/>
    </div>
  );
}
