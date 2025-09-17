"use client";
import "./Footer.css";
import TextType from "./TextType"; // ✅ import your typing component

export default function Footer() {
  return (
    <footer className="footers">
      <div className="footer-center">
        <TextType 
          text={[
            "Made with ❤️ by Clayvan",
            "Histovoid Gallery",
            
          ]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          
        />
      </div>
    </footer>
  );
}
