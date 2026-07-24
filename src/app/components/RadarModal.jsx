// components/RadarModal.jsx
"use client";

import { useState, useEffect, useRef } from "react";
import Radar from "./Radar";
import OptionWheel from "./OptionWheel";
import "./OptionWheel.css";

const RadarModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState('select');
  const [selectedSong, setSelectedSong] = useState(null);
  const [selectedSongIndex, setSelectedSongIndex] = useState(null);
  const [typedLines, setTypedLines] = useState([]);
  const [allLinesComplete, setAllLinesComplete] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiPieces, setConfettiPieces] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioError, setAudioError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [radarReady, setRadarReady] = useState(false);
  const containerRef = useRef(null);
  const animationRef = useRef();
  const audioRef = useRef(null);
  const wheelRef = useRef(null);
  const modalRef = useRef(null);

  // Detect mobile and WebGL support
  useEffect(() => {
    const checkDevice = () => {
      // Check if mobile device
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|windows phone/i.test(userAgent);
      const isSmallScreen = window.innerWidth < 768;
      
      // Check WebGL support
      let webglSupported = false;
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        webglSupported = !!gl;
      } catch (e) {
        webglSupported = false;
      }
      
      setIsMobile(isMobileDevice || isSmallScreen || !webglSupported);
      setRadarReady(true);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // Song list with real audio files from public folder
  const songs = [
    { name: 'VivaLaVida', file: '/viva1.mp3' },
    { name: 'Ambition', file: '/ambition.mp3' },
    { name: 'Overtime', file: '/overtime.mp3' },
    { name: 'BrighterDays', file: '/betterdays.mp3' },
    { name: 'SaidNDone', file: '/said.mp3' },
    { name: 'somaKijana', file: '/soma.mp3' },
  ];
  const songNames = songs.map(s => s.name);

  // CLI messages with empowering affirmations
  const cliLines = [
    { text: "$ sudo radar --init", delay: 200, speed: 15 },
    { text: "$ scanning 2026 season history.......", delay: 400, speed: 20 },
    { text: "$ archive gallery: end of era detected", delay: 500, speed: 18 },
    { text: "$ system ready — SEASON WRAP 2026 ", delay: 600, speed: 22 },
    { text: "$ you are the architect of your destiny ✨", delay: 800, speed: 25 },
    { text: "$ greatness is not given, it is earned ⚡", delay: 1000, speed: 25 },
    { text: "$ the future belongs to those who believe 🌟", delay: 1200, speed: 25 },
    { text: "$ your only limit is your imagination 🚀", delay: 1400, speed: 25 },
    { text: "$ you are writing history with every step 📝", delay: 1600, speed: 25 },
  ];

  // Generate confetti
  const generateConfetti = () => {
    const colors = [
      "#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEAA7",
      "#DDA0DD", "#FF69B4", "#00CED1", "#FFD700", "#7B68EE",
      "#FF6347", "#40E0D0", "#FF1493", "#00BFFF", "#FFA500"
    ];
    const pieces = [];
    const numPieces = 400;
    for (let i = 0; i < numPieces; i++) {
      pieces.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * -100 - 20,
        rotation: Math.random() * 360,
        size: Math.random() * 12 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 4 + 2,
        wobble: Math.random() * 12,
        wobbleSpeed: Math.random() * 0.05 + 0.02,
      });
    }
    setConfettiPieces(pieces);
    setShowConfetti(true);
  };

  // Play scroll sound
  const playScrollSound = () => {
    try {
      if (!audioRef.current) {
        audioRef.current = new Audio();
        audioRef.current.src = '/assets/sounds/click-soft.mp3';
        audioRef.current.volume = 0.15;
        audioRef.current.load();
      }
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    } catch (e) {
      // Silently fail
    }
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

  // Reset when modal closes
  useEffect(() => {
    if (!isOpen) {
      setStep('select');
      setSelectedSong(null);
      setSelectedSongIndex(null);
      setShowConfetti(false);
      setConfettiPieces([]);
      setAllLinesComplete(false);
      setTypedLines([]);
      setIsPlaying(false);
      setAudioError(false);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current = null;
      }
    }
  }, [isOpen]);

  // Process CLI lines
  useEffect(() => {
    if (step !== 'typing') return;

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
  }, [step]);

  // Handle song selection - plays the song
  const handleSongSelect = (index, songName) => {
    const song = songs.find(s => s.name === songName);
    if (!song) return;

    setSelectedSong(songName);
    setSelectedSongIndex(index);
    setAudioError(false);
    
    // Play the selected song
    try {
      // Stop any existing audio
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      
      // Create new audio instance
      const audio = new Audio(song.file);
      audio.volume = 0.7;
      audio.loop = true;
      
      // Handle audio loading errors
      audio.addEventListener('error', (e) => {
        console.error('Audio loading error:', e);
        setAudioError(true);
        setIsPlaying(false);
      });
      
      // Play the audio
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            audioRef.current = audio;
          })
          .catch((err) => {
            console.log('Audio playback failed:', err);
            setAudioError(true);
            setIsPlaying(false);
          });
      }
    } catch (e) {
      console.log('Error playing song:', e);
      setAudioError(true);
      setIsPlaying(false);
    }
    
    // Play click sound
    try {
      const clickAudio = new Audio('/assets/sounds/click-soft.mp3');
      clickAudio.volume = 0.5;
      clickAudio.play().catch(() => {});
    } catch (e) {}
    
    setTimeout(() => {
      setStep('typing');
    }, 600);
  };

  // Handle scroll with sound - NO auto-selection
  const handleWheelScroll = (e) => {
    if (step === 'select') {
      playScrollSound();
    }
  };

  // Handle click outside modal content
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      // Stop audio when closing
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current = null;
      }
      onClose();
    }
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
          audioRef.current = null;
        }
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="radar-modal-overlay" 
      onClick={handleOverlayClick}
      onWheel={handleWheelScroll}
    >
      {/* Radar Background - Full screen with opacity */}
      <div className="radar-full-bg">
        {!isMobile ? (
          <Radar
            speed={0.8}
            scale={0.95}
            ringCount={14}
            spokeCount={16}
            ringThickness={0.04}
            spokeThickness={0.008}
            sweepSpeed={0.6}
            sweepWidth={1.5}
            sweepLobes={1}
            color="#00ff88"
            fontSize={2.5}
            backgroundColor="transparent"
            falloff={2}
            brightness={1.5}
            enableMouseInteraction
            mouseInfluence={0.15}
          />
        ) : (
          // Fallback for mobile - simple gradient background
          <div className="radar-fallback">
            <div className="radar-fallback-glow"></div>
          </div>
        )}
      </div>

      {/* Translucent Overlay */}
      <div className="modal-translucent-overlay"></div>

      {/* Confetti */}
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

      {/* Step 1: OptionWheel */}
      {step === 'select' && (
        <div className="wheel-fullscreen-overlay">
          <div className="wheel-header">
            <span className="wheel-title">✦ RADAR · 2026 ✦</span>
            <button className="wheel-close-btn" onClick={onClose}>✕</button>
          </div>
          <div className="wheel-prompt">
            Choose a song to unlock the wrap 🎵
          </div>
          <div className="wheel-sub-prompt">
            scroll to browse · click to select
          </div>
          <div className="wheel-fullscreen-container" ref={wheelRef}>
            <OptionWheel
              items={songNames}
              defaultSelected={3}
              textColor="#a6a6a6"
              activeColor="#00ff88"
              side="left"
              fontSize={2.5}
              spacing={1.2}
              curve={1.8}
              tilt={10}
              blur={2}
              fade={0.12}
              minOpacity={0.03}
              smoothing={200}
              inset={80}
              loop={false}
              draggable
              onChange={handleSongSelect}
            />
          </div>
          <div className="wheel-hint">
            ✦ click any song to unlock your 2026 wrap ✦
          </div>
        </div>
      )}

      {/* Step 2: CLI Terminal */}
      {step === 'typing' && (
        <div className="terminal-modal">
          <div className="terminal-header">
            <span className="terminal-dot"></span>
            <span className="terminal-dot"></span>
            <span className="terminal-dot"></span>
            <span className="terminal-title">user@radar:~$</span>
            <button className="terminal-close-btn" onClick={onClose}>✕</button>
          </div>
          <div className="terminal-body">
            {typedLines.map((line, index) => (
              <div key={index} className="terminal-line">
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
          {selectedSong && (
            <div className="now-playing-bottom">
              <span className="now-playing-icon">{isPlaying ? '▶' : audioError ? '⚠' : '⏸'}</span>
              <span className="now-playing-text">
                {audioError ? 'AUDIO UNAVAILABLE' : `NOW PLAYING: ${selectedSong.toUpperCase()}`}
              </span>
              <span className="now-playing-pulse">{isPlaying ? '●' : '○'}</span>
            </div>
          )}
        </div>
      )}

      <style>{`
        .radar-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: block;
          animation: fadeIn 0.3s ease;
          overflow: hidden;
          padding-top: 4rem;
          background: transparent;
        }

        .radar-full-bg {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100vw;
          height: 100vh;
          z-index: 0;
          overflow: hidden;
          background: #0a0e1a;
          opacity: 0.9;
        }

        .radar-full-bg > div {
          width: 100% !important;
          height: 100% !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
        }

        /* Fallback for mobile */
        .radar-fallback {
          width: 100%;
          height: 100%;
          background: radial-gradient(ellipse at center, #00ff8815 0%, #0a0e1a 70%);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .radar-fallback-glow {
          width: 60%;
          height: 60%;
          background: radial-gradient(ellipse at center, #00ff8830 0%, transparent 70%);
          animation: pulseGlow 3s ease-in-out infinite;
          border-radius: 50%;
        }

        @keyframes pulseGlow {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 1; }
        }

        .modal-translucent-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.3);
          z-index: 1;
          pointer-events: none;
        }

        .confetti-container {
          position: fixed;
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

        .wheel-fullscreen-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 5;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem 3rem;
          width: 100vw;
          height: 100vh;
          padding-top: 6rem;
          pointer-events: none;
        }

        .wheel-fullscreen-overlay > * {
          pointer-events: auto;
        }

        .wheel-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 900px;
          padding: 0.5rem 0 1rem 0;
          border-bottom: 1px solid rgba(0, 255, 136, 0.05);
          flex-shrink: 0;
          margin-top: 0;
        }

        .wheel-title {
          color: #00ff88;
          font-size: 1.3rem;
          font-weight: 700;
          font-family: 'Courier New', monospace;
          letter-spacing: 0.1em;
          text-shadow: 0 0 30px rgba(0, 255, 136, 0.15);
        }

        .wheel-close-btn {
          background: none;
          border: none;
          color: #ff5f56;
          font-size: 1.5rem;
          cursor: pointer;
          opacity: 0.5;
          transition: all 0.2s ease;
          padding: 0 0.5rem;
          font-family: 'Courier New', monospace;
        }

        .wheel-close-btn:hover {
          opacity: 1;
          transform: scale(1.15);
        }

        .wheel-prompt {
          text-align: center;
          font-size: 1.6rem;
          font-weight: 600;
          color: #aaffcc;
          font-family: 'Courier New', monospace;
          letter-spacing: 0.05em;
          opacity: 0.95;
          text-shadow: 0 0 30px rgba(0, 255, 136, 0.1);
          padding: 0.3rem 0 0.1rem 0;
          flex-shrink: 0;
        }

        .wheel-sub-prompt {
          text-align: center;
          font-size: 0.9rem;
          color: #6a9eff;
          opacity: 0.5;
          letter-spacing: 0.08em;
          font-family: 'Courier New', monospace;
          padding-bottom: 0.5rem;
          flex-shrink: 0;
        }

        .wheel-fullscreen-container {
          width: 100%;
          max-width: 900px;
          height: 450px;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 0;
          min-height: 300px;
        }

        .wheel-fullscreen-container > div {
          width: 100%;
          height: 100%;
        }

        .wheel-hint {
          text-align: center;
          font-size: 0.8rem;
          color: #00ff88;
          opacity: 0.35;
          letter-spacing: 0.1em;
          font-family: 'Courier New', monospace;
          padding-top: 0.5rem;
          animation: pulseHint 2.5s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes pulseHint {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 0.6; }
        }

        .terminal-modal {
          position: fixed;
          z-index: 5;
          width: 95%;
          max-width: 900px;
          max-height: 85vh;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 16px;
          border: 1px solid rgba(0, 255, 136, 0.12);
          overflow: hidden;
          font-family: 'Courier New', monospace;
          box-shadow: 0 40px 100px rgba(0, 0, 0, 0.7);
          display: flex;
          flex-direction: column;
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          margin-top: 0;
        }

        .terminal-header {
          background: rgba(20, 25, 35, 0.6);
          padding: 0.8rem 1.5rem;
          border-bottom: 1px solid rgba(0, 255, 136, 0.06);
          display: flex;
          align-items: center;
          gap: 0.6rem;
          flex-shrink: 0;
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
          opacity: 0.8;
          font-family: 'Courier New', monospace;
          flex: 1;
        }

        .terminal-close-btn {
          background: none;
          border: none;
          color: #ff5f56;
          font-size: 1.2rem;
          cursor: pointer;
          opacity: 0.5;
          transition: all 0.2s ease;
          padding: 0 0.5rem;
          font-family: 'Courier New', monospace;
        }

        .terminal-close-btn:hover {
          opacity: 1;
          transform: scale(1.15);
        }

        .terminal-body {
          padding: 1.5rem 2rem 1.2rem 2rem;
          min-height: 160px;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          flex: 1;
          overflow-y: auto;
        }

        .terminal-line {
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
          font-family: 'Courier New', monospace;
          word-break: break-word;
        }

        .now-playing-bottom {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.6rem 1.5rem;
          border-top: 1px solid rgba(0, 255, 136, 0.06);
          background: rgba(0, 255, 136, 0.03);
          flex-shrink: 0;
          font-family: 'Courier New', monospace;
          animation: fadeIn 0.5s ease;
        }

        .now-playing-icon {
          color: #00ff88;
          font-size: 0.9rem;
          animation: pulse 1.5s ease-in-out infinite;
        }

        .now-playing-text {
          color: #aaffcc;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          flex: 1;
        }

        .now-playing-pulse {
          color: #00ff88;
          font-size: 0.6rem;
          animation: pulse 1s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
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
          50% { opacity: 1; transform: scale(1.03); }
        }

        @media (max-width: 1024px) {
          .wheel-fullscreen-container {
            height: 400px;
          }
        }

        @media (max-width: 768px) {
          .radar-modal-overlay {
            padding-top: 3rem;
          }

          .wheel-fullscreen-overlay {
            padding: 1rem 1.5rem;
            padding-top: 4rem;
          }

          .wheel-header {
            padding: 0.3rem 0 0.8rem 0;
          }

          .wheel-title {
            font-size: 1rem;
          }

          .wheel-close-btn {
            font-size: 1.2rem;
          }

          .wheel-prompt {
            font-size: 1.2rem;
          }

          .wheel-sub-prompt {
            font-size: 0.75rem;
          }

          .wheel-fullscreen-container {
            height: 350px;
            min-height: 250px;
          }

          .wheel-hint {
            font-size: 0.65rem;
          }

          .terminal-modal {
            width: 98%;
            max-height: 90vh;
          }

          .terminal-header {
            padding: 0.5rem 1rem;
          }

          .terminal-dot {
            width: 10px;
            height: 10px;
          }

          .terminal-title {
            font-size: 0.7rem;
          }

          .terminal-body {
            padding: 1rem 1.2rem 0.8rem 1.2rem;
            min-height: 130px;
          }

          .terminal-line {
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

          .now-playing-bottom {
            padding: 0.4rem 1rem;
          }

          .now-playing-text {
            font-size: 0.7rem;
          }
        }

        @media (max-width: 480px) {
          .radar-modal-overlay {
            padding-top: 2.5rem;
          }

          .wheel-fullscreen-overlay {
            padding: 0.8rem 1rem;
            padding-top: 3rem;
          }

          .wheel-header {
            padding: 0.2rem 0 0.6rem 0;
          }

          .wheel-title {
            font-size: 0.8rem;
          }

          .wheel-close-btn {
            font-size: 1rem;
          }

          .wheel-prompt {
            font-size: 0.95rem;
          }

          .wheel-sub-prompt {
            font-size: 0.6rem;
          }

          .wheel-fullscreen-container {
            height: 280px;
            min-height: 200px;
          }

          .wheel-hint {
            font-size: 0.5rem;
          }

          .terminal-modal {
            width: 100%;
            border-radius: 0;
            max-height: 100vh;
          }

          .terminal-header {
            padding: 0.4rem 0.8rem;
          }

          .terminal-dot {
            width: 8px;
            height: 8px;
          }

          .terminal-title {
            font-size: 0.6rem;
          }

          .terminal-close-btn {
            font-size: 1rem;
          }

          .terminal-body {
            padding: 0.8rem 0.8rem 0.6rem 0.8rem;
            min-height: 110px;
          }

          .terminal-line {
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
            font-size: 0.9rem;
            padding: 0.4rem 0;
          }

          .now-playing-bottom {
            padding: 0.3rem 0.8rem;
          }

          .now-playing-text {
            font-size: 0.6rem;
          }

          .now-playing-icon {
            font-size: 0.6rem;
          }

          .now-playing-pulse {
            font-size: 0.4rem;
          }
        }
      `}</style>
    </div>
  );
};

export default RadarModal;