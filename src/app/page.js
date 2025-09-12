"use client";
import DomeGallery from "./components/DomeGallery";
import Navbar from "./components/Nav";
import "./globals.css";

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />

      {/* Dome container with border matching dome size */}
      <div className="dome-wrapper">
        <DomeGallery grayscale={false}/>
      </div>
    </div>
  );
}
