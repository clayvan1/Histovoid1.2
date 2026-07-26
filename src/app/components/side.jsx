"use client";

import { useState, useEffect } from "react";
import "./Sidebar.css";

// Icons
import { FaHome } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

// ✅ Full navItems array with unique IDs
const navItems = [
  {
    id: "home",
    label: "Home",
    icon: <FaHome />,
    path: "/",
    subLinks: null,
  },
  {
    id: "epithelial",
    label: "EPITHELIAL TISSUE",
    subLinks: [
      { label: "SQUAMOUS", path: "/epithelium" },
      { label: "CUBOIDAL", path: "/epithelium" },
      { label: "COLUMNAR", path: "/epithelium" },
      { label: "TRANSITIONAL", path: "/epithelium" },
    ],
  },
  {
    id: "connective",
    label: "CONNECTIVE TISSUE",
    subLinks: [
      { label: "EMBRYONIC", path: "/connective" },
      { label: "CONNECTIVE TISSUE PROPER", path: "/connective" },
      { label: "SPECIALIZED", path: "/connective" },
    ],
  },
  {
    id: "cartilage",
    label: "CARTILAGE",
    subLinks: [
      { label: "HYALINE", path: "/cartilage" },
      { label: "FIBROUS", path: "/cartilage" },
      { label: "ELASTIC", path: "/cartilage" },
    ],
  },
  {
    id: "bone",
    label: "BONE",
    subLinks: [
      { label: "TRABECULAR", path: "/bone" },
      { label: "SPONGY", path: "/bone" },
      { label: "GROWTH PLATES", path: "/bone" },
    ],
  },
  {
    id: "nervous_tissue",
    label: "NERVOUS TISSUE",
    subLinks: [
      { label: "PYRAMIDAL", path: "/nervous" },
      { label: "STELLATE", path: "/nervous" },
      { label: "PURKINJE", path: "/nervous" },
      { label: "DORSAL ROOT GANGLION", path: "/nervous" },
    ],
  },
  {
    id: "propulsion",
    label: "PROPULSION TISSUE",
    subLinks: [
      { label: "SKELETAL", path: "/propulsion" },
      { label: "CARDIAC", path: "/propulsion" },
      { label: "SMOOTH", path: "/propulsion" },
    ],
  },
  {
    id: "skin",
    label: "SKIN AND APPENDAGES",
    subLinks: [
      { label: "SKIN", path: "/skin" },
      { label: "PILOSABACEOUS UNIT", path: "/skin" },
      { label: "NAIL", path: "/skin" },
    ],
  },
  {
    id: "nervous_system",
    label: "NERVOUS SYSTEM",
    subLinks: [
      { label: "CEREBRAL CORTEX", path: "/nervoussystem" },
      { label: "BRAIN STEM", path: "/nervoussystem" },
      { label: "CEREBELLUM", path: "/nervoussystem" },
      { label: "SPINAL CORD", path: "/nervoussystem" },
      { label: "PERIPHERAL NERVE", path: "/nervoussystem" },
    ],
  },
  {
    id: "receptors",
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
    id: "ear",
    label: "EAR",
    subLinks: [{ label: "INTERNAL EAR", path: "/ear" }],
  },
  {
    id: "eye",
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
    id: "endocrine",
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
    id: "git",
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
    id: "git_glands",
    label: "GIT GLANDS",
    subLinks: [
      { label: "SALIVARY GLANDS", path: "/gitglands" },
      { label: "PANCREASE", path: "/gitglands" },
      { label: "LIVER", path: "/gitglands" },
      { label: "GALLBLADDER", path: "/gitglands" },
    ],
  },
  {
    id: "respiratory",
    label: "RESPIRATORY SYSTEM",
    subLinks: [
      { label: "NASAL CAVITY", path: "/respiratory" },
      { label: "LARYNX", path: "/respiratory" },
      { label: "TRACHEA", path: "/respiratory" },
      { label: "LUNG", path: "/respiratory" },
    ],
  },
  {
    id: "cardiovascular",
    label: "CARDIOVASCULAR SYSTEM",
    subLinks: [
      { label: "BLOOD VESSEL", path: "/cardio" },
      { label: "HEART", path: "/cardio" },
    ],
  },
  {
    id: "immune",
    label: "IMMUNE SYSTEM",
    subLinks: [
      { label: "LYMP NODE", path: "/immune" },
      { label: "SPLEEN", path: "/immune" },
      { label: "THYMUS", path: "/immune" },
      { label: "BONE MARROW", path: "/immune" },
    ],
  },
  {
    id: "urinary",
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
    id: "reproductive",
    label: "REPRODUCTIVE SYSTEM",
    subLinks: [
      { label: "MALE", path: "/reproductive" },
      { label: "FEMALE", path: "/reproductive" },
    ],
  },
];

export default function Sidebar({ open, setOpen }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  // ✅ Prevent body scroll when sidebar is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const handleDropdownToggle = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const sidebarClassName = `sidebar-container ${open ? "open" : ""}`;

  return (
    <>
      {open && (
        <div
          className="sidebar-overlay"
          onClick={() => setOpen(false)}
        />
      )}

      <div className={sidebarClassName}>
        <div className="sidebar-scroll-area">
          <nav className="sidebar-nav">
            {navItems.map((item) => (
              <div className="nav-item" key={item.id}>
                {item.subLinks ? (
                  <>
                    <div
                      onClick={() => handleDropdownToggle(item.id)}
                      className="nav-link"
                    >
                      <div className="nav-link-content">
                        <span className="nav-icon">{item.icon}</span>
                        <span className="nav-label">{item.label}</span>
                      </div>
                      <IoIosArrowDown
                        className={`dropdown-arrow ${
                          openDropdown === item.id ? "open" : ""
                        }`}
                      />
                    </div>

                    <div
                      className={`submenu ${
                        openDropdown === item.id ? "open" : ""
                      }`}
                    >
                      <div className="submenu-list">
                        {item.subLinks.map((subLink, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subLink.path}
                            className="submenu-link"
                            onClick={() => setOpen(false)}
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.path}
                    className="nav-link direct-link"
                    onClick={() => setOpen(false)}
                  >
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
    </>
  );
}