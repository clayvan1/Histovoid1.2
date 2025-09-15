"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import GlassSurface from "./GlassSurface";
import Sidebar from "./side";
import "./Navbar.css"; // ✅ external styling

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Navbar with centered title */}
      <GlassSurface
        width="89%"
        height="60px"
        borderRadius={20}
        
        className="navbar-glass"
      >
        {/* Menu button - stick to the far left */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="navbar-menu-btn"
        >
          {sidebarOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Centered App title */}
        <h1 className="navbar-title">HISTOVOID</h1>
      </GlassSurface>

      {/* Sidebar */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
    </>
  );
}
