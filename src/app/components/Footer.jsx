"use client";
import Image from "next/image";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Left side text */}
      <div className="footer-left">
        <div className="footer-logo-text">
          <Image
            src="/supercoil.svg" // ✅ path to your logo (place it in public/)
            alt="Histovoid Logo"
            width={28}
            height={28}
            className="navbar-logo"
          />
          <p className="glow">Histovoid</p>
        </div>

        <p>
          This gallery was developed by{" "}
          <span className="glow">Clayvan</span>{" "}
          from
          <span className="heart-glow"> ❤️</span>
        </p>
        <p>© {new Date().getFullYear()} Histovoid</p>
      </div>

      {/* Right side icons */}
      <div className="footer-right">
        <a
          href="https://x.com/ClayvanOmondi"
          aria-label="Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/clay_dev"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://github.com/clayvan1"
          aria-label="Github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}
