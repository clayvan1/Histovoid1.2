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
      { label: "SQUAMOUS", path: "/epithelium" },
      { label: "CUBOIDAL", path: "/epithelium" },
      { label: "COLUMNAR", path: "/epithelium" },
      { label: "TRANSITIONAL", path: "/epithelium" },
    ],
  },
  {
    label: "CONNECTIVE TISSUE",
    subLinks: [
      { label: "EMBRYONIC", path: "/connective" },
      { label: "CONNECTIVE TISSUE PROPER", path: "/connective" },
      { label: "SPECIALIZED", path: "/connective" },
    ],
  },
  {
    label: "CARTILAGE",
    subLinks: [
      { label: "HYALINE", path: "/cartilage" },
      { label: "FIBROUS", path: "/cartilage" },
      { label: "ELASTIC", path: "/cartilage" },
    ],
  },
  {
    label: "BONE",
    subLinks: [
      { label: "TRABECULAR", path: "/bone" },
      { label: "SPONGY", path: "/bone" },
      { label: "GROWTH PLATES", path: "/bone" },
    ],
  },
  {
    label: "NERVOUS TISSUE",
    subLinks: [
      { label: "PYRAMIDAL", path: "/nervoustissue" },
      { label: "STELLATE", path: "/nervoustissue" },
      { label: "PURKINJE", path: "/nervoustissue" },
      { label: "DORSAL ROOT GANGLION", path: "/nervoustissue" },
    ],
  },
  {
    label: "PROPULSION TISSUE",
    subLinks: [
      { label: "SKELETAL", path: "/muscles" },
      { label: "CARDIAC", path: "/muscles" },
      { label: "SMOOTH", path: "/muscles" },
    ],
  },
  {
    label: "SKIN AND APPENDAGES",
    subLinks: [
      { label: "SKIN", path: "/skin" },
      { label: "PILOSABACEOUS UNIT", path: "/skin" },
      { label: "NAIL", path: "/skin" },
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
      { label: "GENERAL RECEPTORS", path: "/receptors" },
      { label: "OLFACTORY", path: "/receptors" },
      { label: "RETINA", path: "/receptors" },
      { label: "TASTE BUDS", path: "/receptors" },
      { label: "ORGAN OF CORTI", path: "/receptors" },
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
      { label: "SCLERA", path: "/eye" },
      { label: "CORNEA", path: "/eye" },
      { label: "VASCULAR LAYER", path: "/eye" },
      { label: "RETINA", path: "/eye" },
      { label: "LENS", path: "/eye" },
      { label: "CONJUCTIVA", path: "/eye" },
      { label: "LACRIMAL", path: "/eye" },
    ],
  },
  {
    label: "ENDOCRINE SYSTEM",
    subLinks: [
      { label: "PITUITARY", path: "/endocrine" },
      { label: "PINEAL", path: "/endocrine" },
      { label: "THYROID", path: "/endocrine" },
      { label: "PARATHROID", path: "/endocrine" },
      { label: "ADRENAL", path: "/endocrine" },
      
    ],
  },
  {
    label: "GIT",
    subLinks: [
      { label: "LIP", path: "/git" },
      { label: "OESAPHAGUS", path: "/git" },
      { label: "STOMACH", path: "/git" },
      { label: "SMALL INTESTINES", path: "/git" },
      { label: "LARGE INTESTINES", path: "/git" },
      { label: "RECTUM", path: "/git" },
      { label: "ANAL CANAL", path: "/git" },
    ],
  },
  {
    label: "GIT GLANDS",
    subLinks: [
      { label: "SALIVARY GLANDS", path: "/gitglands" },
      { label: "PANCREASE", path: "/gitglands" },
      { label: "LIVER", path: "/gitglands" },
      { label: "GALLBLADDER", path: "/gitglands" },
    ],
  },
  {
    label: "RESPIRATORY SYSTEM",
    subLinks: [
      { label: "NASAL CAVITY", path: "/respiratory" },
      { label: "LARYNX", path: "/respiratory" },
      { label: "TRACHEA", path: "/respiratory" },
      { label: "LUNG", path: "/respiratory" },
    ],
  },
  {
    label: "CARDIOVASCULAR SYSTEM",
    subLinks: [
      { label: "BLOOD VESSEL", path: "/cardio" },
      { label: "  HEART", path: "/cardio" },
    ],
  },
  {
    label: "IMMUNE SYSTEM",
    subLinks: [
      { label: "LYMP NODE", path: "/immune" },
      { label: "SPLEEN", path: "/immune" },
      { label: "THYMUS", path: "/immune" },
      { label: "BONE MARROW", path: "/immune" },
    ],
  },
  {
    label: "URINARY SYSTEM",
    subLinks: [
      { label: "KIDNEY", path: "/urinary" },
      { label: "NEPHRON", path: "/urinary" },
      { label: "URETER", path: "/urinary" },
      { label: "URINARY BLADDER", path: "/urinary" },
      { label: "URETHRA", path: "/urinary" },
    ],
  },
  {
    label: "REPRODUCTIVE SYSTEM",
    subLinks: [
      { label: "MALE", path: "/reproductive" },
      { label: "FEMALE", path: "/reproductive" },
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
