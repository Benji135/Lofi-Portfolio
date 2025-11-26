import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./PixelLoading.css";

export default function PixelOSBoot({ onFinish }) {
  const bootLines = [
    "Loading sprite atlas...",
    "Initializing tilemap...",
    "Setting up scene manager...",
    "Compiling shaders...",
    "Loading palette data...",
    "Caching textures...",
    "Ready for adventure."
  ];

  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  const progress = Math.round((currentLineIndex / bootLines.length) * 100);
  const isReady = progress === 100;

  // Start typing only after animation completes
  useEffect(() => {
    if (!animationComplete) return;

    if (currentLineIndex >= bootLines.length) {
      setIsComplete(true);
      setTimeout(() => onFinish?.(), 600);
      return;
    }

    const currentLine = bootLines[currentLineIndex];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex <= currentLine.length) {
        setCurrentText(currentLine.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentLineIndex(prev => prev + 1);
          setCurrentText("");
        }, 150);
      }
    }, 25);

    return () => clearInterval(typeInterval);
  }, [currentLineIndex, animationComplete]);

  // Handle SPACE key press
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.code === 'Space' && isReady) {
        event.preventDefault();
        handleSkipClick();
      }
    };

    if (isReady) {
      window.addEventListener('keydown', handleKeyPress);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isReady]);

  // Scale Y from center animation
  const containerVariants = {
    hidden: {
      opacity: 0,
      scaleY: 0,
    },
    visible: {
      opacity: 1,
      scaleY: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      }
    }
  };

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  const handleSkipClick = () => {
    if (isReady) {
      console.log("pressed");
    }
  };

  return (
    <div className="pixel-container">
      {/* Background Image Layer */}
      <div className="pixel-bg-image"></div>
      
      <motion.div
        className="pixel-terminal"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        onAnimationComplete={handleAnimationComplete}
        style={{
          transformOrigin: "center center"
        }}
      >
        {/* Header */}
        <div className="pixel-header">
          <div className="pixel-title">PIXEL-ENGINE</div>
          <div className="pixel-status">
            <div className={`pixel-led ${isComplete ? "active" : ""}`} />
            <div className="pixel-time">v1.16</div>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="pixel-content">
          {/* Show loading state during animation */}
          {!animationComplete && (
            <div className="pixel-line">
              <span className="pixel-prompt">{">"}</span> Initializing...
            </div>
          )}

          {/* Previous completed lines - only show after animation */}
          {animationComplete && bootLines.slice(0, currentLineIndex).map((line, index) => (
            <div key={index} className="pixel-line">
              <span className="pixel-prompt">{">"}</span> {line}
            </div>
          ))}

          {/* Current typing line - only show after animation */}
          {animationComplete && currentLineIndex < bootLines.length && (
            <div className="pixel-line typing">
              <span className="pixel-prompt">{">"}</span> {currentText}
              <span className="pixel-cursor">█</span>
            </div>
          )}

          {/* Completion state */}
          {animationComplete && isComplete && (
            <div className="pixel-line complete">
              <span className="pixel-prompt success">{">>"}</span> SYSTEM READY
              <span className="pixel-cursor">█</span>
            </div>
          )}

          {/* Pixel Progress Bar - fade in only */}
          {animationComplete && (
            <motion.div
              className="pixel-progress"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            >
              <div className="pixel-bar">
                {Array.from({ length: 16 }).map((_, index) => (
                  <div
                    key={index}
                    className={`pixel-block ${progress >= (index + 1) * 6.25 ? "filled" : ""
                      }`}
                  />
                ))}
              </div>
              <div className="pixel-percent">{progress}%</div>
            </motion.div>
          )}
        </div>

        {/* Footer */}
        <div className="pixel-footer">
          <button 
            className={`pixel-skip-btn ${isReady ? 'ready' : 'disabled'}`}
            onClick={handleSkipClick}
            disabled={!isReady}
          >
            {isReady ? '[SPACE] to continue' : 'Loading...'}
          </button>
          <div className="pixel-copyright">© 2024 PIXEL STUDIOS</div>
        </div>
      </motion.div>
    </div>
  );
}