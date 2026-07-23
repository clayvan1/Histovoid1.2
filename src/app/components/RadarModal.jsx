// components/RadarModal.jsx
"use client";

import { useState, useEffect, useRef } from "react";
import Radar from "./Radar";

const RadarModal = ({ isOpen, onClose }) => {
  const [typedLines, setTypedLines] = useState([]);
  const [allLinesComplete, setAllLinesComplete] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiPieces, setConfettiPieces] = useState([]);
  const containerRef = useRef(null);
  const animationRef = useRef();

  // Linux terminal style CLI messages
  const cliLines = [
    { text: "$ sudo radar --init", delay: 200, speed: 15 },
    { text: "$ scanning 2026 season history...", delay: 400, speed: 20 },
    { text: "$ archive gallery: end of era detected", delay: 500, speed: 18 },
    { text: "$ system ready — SEASON WRAP 2026 ✓", delay: 600, speed: 22 },
  ];

  // Generate confetti pieces
  const generateConfetti = () => {
    const colors = [
      "#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEAA7",
      "#DDA0DD", "#FF69B4", "#00CED1", "#FFD700", "#7B68EE",
      "#FF6347", "#40E0D0", "#FF1493", "#00BFFF", "#FFA500"
    ];
    const pieces = [];
    const numPieces = 300;
    for (let i = 0; i < numPieces; i++) {
      pieces.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * -100 - 20,
        rotation: Math.random() * 360,
        size: Math.random() * 10 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 3 + 2,
        wobble: Math.random() * 10,
        wobbleSpeed: Math.random() * 0.05 + 0.02,
      });
    }
    setConfettiPieces(pieces);
    setShowConfetti(true);
  };

  // Animate confetti
  useEffect(() => {
    if (!showConfetti) return;

    const animateConfetti = () => {
      setConfettiPieces((prev) =>
        prev.map((piece) => ({
          ...piece,
          y: piece.y + piece.speed * 0.5,
          x: piece.x + Math.sin(piece.y * piece.wobbleSpeed) * piece.wobble * 0.3,
          rotation: piece.rotation + 2,
        }))
      );
      animationRef.current = requestAnimationFrame(animateConfetti);
    };

    animationRef.current = requestAnimationFrame(animateConfetti);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [showConfetti]);

  // Reset confetti when modal reopens
  useEffect(() => {
    if (!isOpen) {
      setShowConfetti(false);
      setConfettiPieces([]);
      setAllLinesComplete(false);
      setTypedLines([]);
    }
  }, [isOpen]);

  // Process CLI lines one by one
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    let currentLineIndex = 0;
    let currentText = "";
    let charIndex = 0;
    let timeoutId;
    let startTimeout;

    const typeChar = () => {
      if (charIndex < cliLines[currentLineIndex].text.length) {
        currentText += cliLines[currentLineIndex].text.charAt(charIndex);
        charIndex++;
        setTypedLines((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = currentText;
          return updated;
        });
        timeoutId = setTimeout(typeChar, cliLines[currentLineIndex].speed || 30);
      } else {
        setTimeout(() => {
          currentLineIndex++;
          if (currentLineIndex < cliLines.length) {
            currentText = "";
            charIndex = 0;
            setTypedLines((prev) => [...prev, ""]);
            startTimeout = setTimeout(typeChar, cliLines[currentLineIndex].delay || 300);
          } else {
            setAllLinesComplete(true);
            setTimeout(() => generateConfetti(), 500);
          }
        }, 200);
      }
    };

    setTypedLines([""]);
    startTimeout = setTimeout(typeChar, cliLines[0].delay || 300);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timeoutId);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="radar-modal-fullscreen" onClick={(e) => e.target === e.currentTarget && onClose()}>
      {/* Radar Background - Full screen */}
      <div className="radar-full-bg">
        <Radar
          speed={0.8}
          scale={0.9}
          ringCount={14}
          spokeCount={16}
          ringThickness={0.04}
          spokeThickness={0.008}
          sweepSpeed={0.6}
          sweepWidth={2.5}
          sweepLobes={1}
          color="#00ff88"
          backgroundColor="#0a0e1a"
          falloff={2}
          brightness={1.8}
          enableMouseInteraction
          mouseInfluence={0.15}
        />
      </div>

      {/* Overlay gradient for text readability */}
      <div className="radar-full-overlay"></div>

      {/* Confetti Container */}
      {showConfetti && (
        <div className="confetti-container">
          {confettiPieces.map((piece) => (
            <div
              key={piece.id}
              className="confetti-piece"
              style={{
                left: `${piece.x}%`,
                top: `${piece.y}%`,
                transform: `rotate(${piece.rotation}deg)`,
                width: `${piece.size}px`,
                height: `${piece.size * 0.6}px`,
                backgroundColor: piece.color,
                borderRadius: piece.size > 8 ? "2px" : "50%",
              }}
            />
          ))}
        </div>
      )}

      {/* Linux Terminal - Full width */}
      <div className="terminal-fullscreen">
        <div className="terminal-header-full">
          <span className="terminal-dot"></span>
          <span className="terminal-dot"></span>
          <span className="terminal-dot"></span>
          <span className="terminal-title">user@radar:~$</span>
          <span className="terminal-close" onClick={onClose}>✕</span>
        </div>
        <div className="terminal-body-full">
          {typedLines.map((line, index) => (
            <div key={index} className="terminal-line-full">
              <span className="terminal-prompt">$</span>
              <span className="terminal-text">{line}</span>
              {index === typedLines.length - 1 && !allLinesComplete && (
                <span className="terminal-cursor">█</span>
              )}
            </div>
          ))}
          {allLinesComplete && (
            <>
              <div className="terminal-success">
                <span className="terminal-prompt">✔</span>
                <span className="terminal-text-success">✦ SYSTEM READY · 2026 WRAP COMPLETE ✦</span>
              </div>
              <div className="terminal-celebration">
                🎉 SEASON WRAP 2026 🎉
              </div>
            </>
          )}
        </div>
      </div>

      <style>{`
        .radar-modal-fullscreen {
          position: fixed;
          inset: 0;
          background: rgba(2, 6, 18, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.6s ease;
          overflow: hidden;
        }

        .radar-full-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          opacity: 0.85;
          overflow: hidden;
        }

        .radar-full-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, 
            rgba(10, 14, 26, 0.1) 0%,
            rgba(10, 14, 26, 0.05) 40%,
            rgba(10, 14, 26, 0.2) 100%
          );
          pointer-events: none;
        }

        .confetti-container {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: hidden;
          z-index: 10;
        }

        .confetti-piece {
          position: absolute;
          opacity: 0.9;
          animation: confettiFall 0.3s ease-out;
        }

        @keyframes confettiFall {
          0% {
            transform: translateY(-10px) rotate(0deg);
            opacity: 0;
          }
          100% {
            opacity: 0.9;
          }
        }

        /* Fullscreen Terminal */
        .terminal-fullscreen {
          position: relative;
          z-index: 5;
          width: 95%;
          max-width: 900px;
          background: rgba(0, 0, 0, 0.75);
          border-radius: 12px;
          border: 1px solid rgba(0, 255, 136, 0.12);
          overflow: hidden;
          font-family: 'Courier New', monospace;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.8), 0 0 60px rgba(0, 255, 136, 0.05);
          backdrop-filter: none;
          -webkit-backdrop-filter: none;
          min-height: 200px;
          max-height: 90vh;
        }

        .terminal-header-full {
          background: rgba(20, 25, 35, 0.8);
          padding: 0.6rem 1.2rem;
          border-bottom: 1px solid rgba(0, 255, 136, 0.08);
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .terminal-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          display: inline-block;
          flex-shrink: 0;
        }

        .terminal-dot:first-child {
          background: #ff5f56;
        }

        .terminal-dot:nth-child(2) {
          background: #ffbd2e;
        }

        .terminal-dot:nth-child(3) {
          background: #28c840;
        }

        .terminal-title {
          color: #00ff88;
          font-size: 0.85rem;
          letter-spacing: 0.05em;
          margin-left: 0.5rem;
          opacity: 0.7;
          font-family: 'Courier New', monospace;
          flex: 1;
        }

        .terminal-close {
          color: #ff5f56;
          font-size: 1.2rem;
          cursor: pointer;
          opacity: 0.6;
          transition: all 0.2s ease;
          padding: 0 0.5rem;
          margin-left: auto;
        }

        .terminal-close:hover {
          opacity: 1;
          transform: scale(1.2);
        }

        .terminal-body-full {
          padding: 1.5rem 1.8rem 1.2rem 1.8rem;
          min-height: 160px;
          position: relative;
          z-index: 5;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .terminal-line-full {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.2rem 0;
          color: #00ff88;
          font-size: 1.1rem;
          line-height: 1.6;
          font-family: 'Courier New', monospace;
          flex-wrap: wrap;
          word-break: break-word;
        }

        .terminal-prompt {
          color: #00ff88;
          font-weight: 700;
          opacity: 0.9;
          min-width: 16px;
          flex-shrink: 0;
        }

        .terminal-text {
          color: #aaffcc;
          word-break: break-word;
          text-shadow: 0 0 10px rgba(0, 255, 136, 0.05);
          font-family: 'Courier New', monospace;
          font-size: 1.1rem;
          flex: 1;
        }

        .terminal-cursor {
          color: #00ff88;
          animation: blink 0.8s step-end infinite;
          margin-left: 2px;
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .terminal-success {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.3rem 0;
          color: #00ff88;
          font-size: 1.05rem;
          animation: fadeIn 0.5s ease;
          font-family: 'Courier New', monospace;
          flex-wrap: wrap;
        }

        .terminal-text-success {
          color: #00ff88;
          font-weight: 600;
          word-break: break-word;
        }

        .terminal-celebration {
          text-align: center;
          padding: 0.8rem 0;
          font-size: 1.6rem;
          font-weight: 700;
          background: linear-gradient(135deg, #FFD700, #FF6B6B, #FFD700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: pulseGlow 1.5s ease-in-out infinite;
          text-shadow: 0 0 40px rgba(255, 215, 0, 0.3);
          font-family: 'Courier New', monospace;
          word-break: break-word;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .terminal-fullscreen {
            width: 98%;
            min-height: 160px;
            max-height: 92vh;
          }

          .terminal-header-full {
            padding: 0.5rem 0.8rem;
          }

          .terminal-dot {
            width: 10px;
            height: 10px;
          }

          .terminal-title {
            font-size: 0.7rem;
          }

          .terminal-close {
            font-size: 1rem;
          }

          .terminal-body-full {
            padding: 1rem 1.2rem 0.8rem 1.2rem;
            min-height: 130px;
          }

          .terminal-line-full {
            font-size: 0.9rem;
            gap: 0.6rem;
          }

          .terminal-text {
            font-size: 0.9rem;
          }

          .terminal-prompt {
            min-width: 14px;
            font-size: 0.9rem;
          }

          .terminal-cursor {
            font-size: 0.9rem;
          }

          .terminal-success {
            font-size: 0.85rem;
          }

          .terminal-text-success {
            font-size: 0.85rem;
          }

          .terminal-celebration {
            font-size: 1.2rem;
            padding: 0.6rem 0;
          }
        }

        @media (max-width: 480px) {
          .terminal-fullscreen {
            width: 100%;
            border-radius: 0;
            min-height: 140px;
            max-height: 95vh;
          }

          .terminal-header-full {
            padding: 0.4rem 0.6rem;
          }

          .terminal-dot {
            width: 8px;
            height: 8px;
          }

          .terminal-title {
            font-size: 0.6rem;
          }

          .terminal-close {
            font-size: 0.9rem;
          }

          .terminal-body-full {
            padding: 0.8rem 0.8rem 0.6rem 0.8rem;
            min-height: 110px;
          }

          .terminal-line-full {
            font-size: 0.75rem;
            gap: 0.4rem;
          }

          .terminal-text {
            font-size: 0.75rem;
          }

          .terminal-prompt {
            min-width: 12px;
            font-size: 0.75rem;
          }

          .terminal-cursor {
            font-size: 0.75rem;
          }

          .terminal-success {
            font-size: 0.7rem;
          }

          .terminal-text-success {
            font-size: 0.7rem;
          }

          .terminal-celebration {
            font-size: 1rem;
            padding: 0.4rem 0;
          }
        }

        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        @keyframes pulseGlow {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
};

export default RadarModal;