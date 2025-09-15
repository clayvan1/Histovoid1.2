"use client";

import DomeGallery from "./components/DomeGallery";
import Navbar from "./components/Nav";
import LightRays from "./components/LightRays";
import GlassSurface from "./components/GlassSurface";
import CountUp from "./components/CountUP";
import GradientText from "./components/GradientText";
import Link from "next/link"; // ✅ for navigation
import "./globals.css";
import { FiSearch } from "react-icons/fi";

export default function Home() {
  return (
    <div className="home-container">
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

      <Navbar />

      {/* 🔎 Floating Search Bar */}
<div className="search-bar">
  <div className="search-input-wrapper">
    <input type="text" placeholder="Search slides..." />
    <FiSearch className="search-icon" />
  </div>
</div>      {/* Main Content */}
      <div className="content-layout">
        {/* Left Counters */}
        <div className="counters-wrapper">
          {/* Slides counter */}
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

          {/* Tissues counter */}
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

          {/* 🚀 Start Exploring button */}
          <div className="explore-btn-container">
            <Link href="/epithelial/web" passHref>
              <button className="explore-btn">Start Exploring →</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
