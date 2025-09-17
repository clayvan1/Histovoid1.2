"use client";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import "./Footer.css";


export default function Footer() {
  return (
    <footer className="footer">
      {/* Left side text */}
      <div className="footer-left"> 
        <p className="glow">Histovoid</p>
        <p>
          This gallery was developed by{" "}
          <span className="glow">Clayvan</span>{" "}
          from
          <span className="heart-glow"> ❤️</span>
        </p>
        <p>© {new Date().getFullYear()} All rights reserved</p>
      </div>

      {/* Right side icons */}
      <div className="footer-right">
        <a href="#" aria-label="Facebook"><FaFacebook /></a>
        <a href="#" aria-label="Twitter"><FaTwitter /></a>
        <a href="#" aria-label="Instagram"><FaInstagram /></a>
        <a href="#" aria-label="Github"><FaGithub /></a>
      </div>
    </footer>
  );
}
