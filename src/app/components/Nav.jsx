"use client";

import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import GlassSurface from "./GlassSurface";
import Sidebar from "./side";
import SearchModal from "./SearchModal";
import "./Navbar.css";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  // Handle full-page loading spinner
  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    // next/navigation doesn't have events like next/router, 
    // so we simulate spinner with route changes
    const unlisten = router.events?.on?.("routeChangeStart", handleStart);
    const unlistenComplete = router.events?.on?.("routeChangeComplete", handleComplete);

    return () => {
      unlisten?.();
      unlistenComplete?.();
    };
  }, [router]);

  return (
    <>
      {/* Navbar */}
      <GlassSurface
        width="89%"
        height="60px"
        borderRadius={20}
        className="navbar-glass"
      >
        {/* Menu button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="navbar-menu-btn"
        >
          {sidebarOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Centered App title */}
        <h1 className="navbar-title">HISTOVOID</h1>

        {/* Search icon - right */}
        <button
          onClick={() => setSearchOpen(true)}
          className="navbar-search-btn"
        >
          <Search size={26} />
        </button>
      </GlassSurface>

      {/* Sidebar */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Full-page loading overlay */}
      {loading && (
        <div className="page-loading-overlay">
          <div className="spinner"></div>
        </div>
      )}
    </>
  );
}
