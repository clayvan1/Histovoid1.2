"use client";
import { useState } from "react";
import GlassSurface from "./GlassSurface";
import "./Sidebar.css";

// Import icons
import { FaHome } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

// ✅ Next.js router
import Link from "next/link";

// Updated data structure: Home has no subLinks
const navItems = [
  {
    label: "Home",
    icon: <FaHome />,
    path: "/", // direct route
    subLinks: null, // <- no dropdown
  },
  {
    label: "EPITHELIAL TISSUE",
    subLinks: [
      { label: "Web Apps", path: "/epithelial/web" },
      { label: "Mobile Apps", path: "/epithelial/mobile" },
      { label: "Design", path: "/epithelial/design" },
    ],
  },
  {
    label: "CONNECTIVE TISSUE",
    subLinks: [
      { label: "Dashboard", path: "/analytics/dashboard" },
      { label: "Reports", path: "/analytics/reports" },
    ],
  },
  {
    label: "CARTILAGE",
    subLinks: [
      { label: "Email Us", path: "/contact/email" },
      { label: "Our Location", path: "/contact/location" },
    ],
  },
  {
    label: "BONE",
    subLinks: [
      { label: "Profile", path: "/account/profile" },
      { label: "Settings", path: "/account/settings" },
    ],
  },
  {
    label: "NERVOUS TISSUE",
    subLinks: [
      { label: "Profile", path: "/account/profile" },
      { label: "Settings", path: "/account/settings" },
    ],
  },
  {
    label: "BONE",
    subLinks: [
      { label: "Profile", path: "/account/profile" },
      { label: "Settings", path: "/account/settings" },
    ],
  },
  {
    label: "PROPULSION TISSUE",
    subLinks: [
      { label: "Profile", path: "/account/profile" },
      { label: "Settings", path: "/account/settings" },
    ],
  },
  {
    label: "SKIN AND APPENDAGES",
    subLinks: [
      { label: "Profile", path: "/account/profile" },
      { label: "Settings", path: "/account/settings" },
    ],
  },
  {
    label: "NERVOUS SYSTEM",
    subLinks: [
      { label: "Profile", path: "/account/profile" },
      { label: "Settings", path: "/account/settings" },
    ],
  },
  {
    label: "RECEPTORS SYSTEM",
    subLinks: [
      { label: "Profile", path: "/account/profile" },
      { label: "Settings", path: "/account/settings" },
    ],
  },
  {
    label: "EAR",
    subLinks: [
      { label: "Profile", path: "/account/profile" },
      { label: "Settings", path: "/account/settings" },
    ],
  },
  {
    label: "EYE",
    subLinks: [
      { label: "Profile", path: "/account/profile" },
      { label: "Settings", path: "/account/settings" },
    ],
  },
  {
    label: "ENDOCRINE SYSTEM",
    subLinks: [
      { label: "Profile", path: "/account/profile" },
      { label: "Settings", path: "/account/settings" },
    ],
  },
  {
    label: "GIT",
    subLinks: [
      { label: "Profile", path: "/account/profile" },
      { label: "Settings", path: "/account/settings" },
    ],
  },
  {
    label: "GIT GLANDS",
    subLinks: [
      { label: "Profile", path: "/account/profile" },
      { label: "Settings", path: "/account/settings" },
    ],
  },
  {
    label: "RESPIRATORY SYSTEM",
    subLinks: [
      { label: "Profile", path: "/account/profile" },
      { label: "Settings", path: "/account/settings" },
    ],
  },
  {
    label: "CARDIOVASCULAR SYSTEM",
    subLinks: [
      { label: "Profile", path: "/account/profile" },
      { label: "Settings", path: "/account/settings" },
    ],
  },
  {
    label: "IMMUNE SYSTEM",
    subLinks: [
      { label: "Profile", path: "/account/profile" },
      { label: "Settings", path: "/account/settings" },
    ],
  },
  {
    label: "URINARY SYSTEM",
    subLinks: [
      { label: "Profile", path: "/account/profile" },
      { label: "Settings", path: "/account/settings" },
    ],
  },
  {
    label: "REPRODUCTIVE SYSTEM",
    subLinks: [
      { label: "Profile", path: "/account/profile" },
      { label: "Settings", path: "/account/settings" },
    ],
  },
];

export default function Sidebar({ open, setOpen }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const sidebarClassName = `sidebar-container ${open ? "open" : ""}`;

  return (
    <div className={sidebarClassName}>
      <GlassSurface
        width="100%"
        height="100%"
        borderRadius={0}
        displace={15}
        distortionScale={-150}
        redOffset={5}
        greenOffset={15}
        blueOffset={25}
        brightness={60}
        opacity={0.85}
        mixBlendMode="screen"
        className="sidebar-content"
      >
        <div className="sidebar-scroll-area">
          <nav className="sidebar-nav">
            {navItems.map((item, index) => (
              <div className="nav-item" key={index}>
                {item.subLinks ? (
                  <>
                    {/* Dropdown items */}
                    <div
                      onClick={() => handleDropdownToggle(index)}
                      className="nav-link"
                    >
                      <div className="nav-link-content">
                        <span className="nav-icon">{item.icon}</span>
                        <span className="nav-label">{item.label}</span>
                      </div>
                      <IoIosArrowDown
                        className={`dropdown-arrow ${
                          openDropdown === index ? "open" : ""
                        }`}
                      />
                    </div>

                    <div
                      className={`submenu ${
                        openDropdown === index ? "open" : ""
                      }`}
                    >
                      <div className="submenu-list">
                        {item.subLinks.map((subLink, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subLink.path}
                            className="submenu-link"
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  // Direct link (e.g. Home)
                  <Link href={item.path} className="nav-link direct-link">
                    <div className="nav-link-content">
                      <span className="nav-icon">{item.icon}</span>
                      <span className="nav-label">{item.label}</span>
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      </GlassSurface>
    </div>
  );
}
