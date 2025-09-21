"use client";

import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import GlassSurface from "./GlassSurface";
import Sidebar from "./side";
import SearchModal from "./SearchModal";
import "./Navbar.css";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image"; // ✅ import Image

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

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

        {/* Centered App title with logo */}
        <div className="navbar-title-wrapper">
          <Image
            src="/supercoil.svg" // ✅ path to your logo (place it in public/)
            alt="Histovoid Logo"
            width={28}
            height={28}
            className="navbar-logo"
          />
          <h1 className="navbar-title">HISTOVOID</h1>
        </div>

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
