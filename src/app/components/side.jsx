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
      { label: "SQUAMOUS", path: "/epithelial/web" },
      { label: "CUBOIDAL", path: "/epithelial/web" },
      { label: "COLUMNAR", path: "/epithelial/web" },
      { label: "TRANSITIONAL", path: "/epithelial/web" },
    ],
  },
  {
    label: "CONNECTIVE TISSUE",
    subLinks: [
      { label: "EMBRYONIC", path: "/analytics/dashboard" },
      { label: "CONNECTIVE TISSUE PROPER", path: "/analytics/reports" },
      { label: "SPECIALIZED", path: "/analytics/reports" },
    ],
  },
  {
    label: "CARTILAGE",
    subLinks: [
      { label: "HYALINE", path: "/contact/email" },
      { label: "FIBROUS", path: "/contact/location" },
      { label: "ELASTIC", path: "/contact/location" },
    ],
  },
  {
    label: "BONE",
    subLinks: [
      { label: "TRABECULAR", path: "/account/profile" },
      { label: "SPONGY", path: "/account/settings" },
      { label: "GROWTH PLATES", path: "/account/settings" },
    ],
  },
  {
    label: "NERVOUS TISSUE",
    subLinks: [
      { label: "PYRAMIDAL", path: "/account/profile" },
      { label: "STELLATE", path: "/account/settings" },
      { label: "PURKINJE", path: "/account/settings" },
      { label: "DORSAL ROOT GANGLION", path: "/account/settings" },
    ],
  },
  {
    label: "PROPULSION TISSUE",
    subLinks: [
      { label: "SKELETAL", path: "/account/profile" },
      { label: "CARDIAC", path: "/account/settings" },
      { label: "SMOOTH", path: "/account/settings" },
    ],
  },
  {
    label: "SKIN AND APPENDAGES",
    subLinks: [
      { label: "SKIN", path: "/account/profile" },
      { label: "PILOSABACEOUS UNIT", path: "/account/settings" },
      { label: "NAIL", path: "/account/settings" },
    ],
  },
  {
    label: "NERVOUS SYSTEM",
    subLinks: [
      { label: "CEREBRAL CORTEX", path: "/account/profile" },
      { label: "BRAIN STEM", path: "/account/settings" },
      { label: "CEREBELLUM", path: "/account/profile" },
      { label: "SPINAL CORD", path: "/account/settings" },
      { label: "PERIPHERAL NERVE", path: "/account/profile" },
      
    ],
  },
  {
    label: "RECEPTORS SYSTEM",
    subLinks: [
      { label: "GENERAL RECEPTORS", path: "/account/profile" },
      { label: "OLFACTORY", path: "/account/settings" },
      { label: "RETINA", path: "/account/profile" },
      { label: "TASTE BUDS", path: "/account/settings" },
      { label: "ORGAN OF CORTI", path: "/account/settings" },
    ],
  },
  {
    label: "EAR",
    subLinks: [
      { label: "INTERNAL EAR", path: "/account/profile" },
    
    ],
  },
  {
    label: "EYE",
    subLinks: [
      { label: "SCLERA", path: "/account/profile" },
      { label: "CORNEA", path: "/account/settings" },
      { label: "VASCULAR LAYER", path: "/account/profile" },
      { label: "RETINA", path: "/account/settings" },
      { label: "LENS", path: "/account/profile" },
      { label: "CONJUCTIVA", path: "/account/settings" },
      { label: "LACRIMAL", path: "/account/settings" },
    ],
  },
  {
    label: "ENDOCRINE SYSTEM",
    subLinks: [
      { label: "PITUITARY", path: "/account/profile" },
      { label: "PINEAL", path: "/account/settings" },
      { label: "THYROID", path: "/account/profile" },
      { label: "PARATHROID", path: "/account/settings" },
      { label: "ADRENAL", path: "/account/profile" },
      
    ],
  },
  {
    label: "GIT",
    subLinks: [
      { label: "LIP", path: "/account/profile" },
      { label: "OESAPHAGUS", path: "/account/settings" },
      { label: "STOMACH", path: "/account/profile" },
      { label: "SMALL INTESTINES", path: "/account/settings" },
      { label: "LARGE INTESTINES", path: "/account/settings" },
      { label: "RECTUM", path: "/account/settings" },
      { label: "ANLA CANAL", path: "/account/settings" },
    ],
  },
  {
    label: "GIT GLANDS",
    subLinks: [
      { label: "SALIVARY GLANDS", path: "/account/profile" },
      { label: "PANCREASE", path: "/account/settings" },
      { label: "LIVER", path: "/account/profile" },
      { label: "GALLBLADDER", path: "/account/settings" },
    ],
  },
  {
    label: "RESPIRATORY SYSTEM",
    subLinks: [
      { label: "NASAL CAVITY", path: "/account/profile" },
      { label: "LARYNX", path: "/account/settings" },
      { label: "TRACHEA", path: "/account/profile" },
      { label: "LUNG", path: "/account/settings" },
    ],
  },
  {
    label: "CARDIOVASCULAR SYSTEM",
    subLinks: [
      { label: "BLOOD VESSEL", path: "/account/profile" },
      { label: "  HEART", path: "/account/settings" },
    ],
  },
  {
    label: "IMMUNE SYSTEM",
    subLinks: [
      { label: "LYMP NODE", path: "/account/profile" },
      { label: "SPLEEN", path: "/account/settings" },
      { label: "THYMUS", path: "/account/profile" },
      { label: "BONE MARROW", path: "/account/settings" },
    ],
  },
  {
    label: "URINARY SYSTEM",
    subLinks: [
      { label: "KIDNEY", path: "/account/profile" },
      { label: "NEPHRON", path: "/account/settings" },
      { label: "URETER", path: "/account/profile" },
      { label: "URINARY BLADDER", path: "/account/settings" },
      { label: "URETHRA", path: "/account/settings" },
    ],
  },
  {
    label: "REPRODUCTIVE SYSTEM",
    subLinks: [
      { label: "MALE", path: "/account/profile" },
      { label: "FEMALE", path: "/account/settings" },
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
      
    </div>
  );
}
