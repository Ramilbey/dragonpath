import React, { useEffect, useRef } from "react";
import "./Loading.css";

export default function Loading() {
  const audioRef = useRef(null);

  useEffect(() => {
    // Initialize audio (Cool UI Sound)
    audioRef.current = new Audio("/assets/loading-sound.mp3");
    audioRef.current.volume = 0; // Start silent for fade-in

    // Attempt to play
    const playPromise = audioRef.current.play();

    if (playPromise !== undefined) {
      playPromise.then(() => {
        // Fade in effect
        let vol = 0;
        const fadeInterval = setInterval(() => {
          if (vol < 0.4) { // Max volume 0.4
            vol += 0.05;
            if (audioRef.current) audioRef.current.volume = Math.min(vol, 0.4);
          } else {
            clearInterval(fadeInterval);
          }
        }, 100); // Faster fade (100ms steps)
      }).catch(error => {
        // Auto-play was prevented
        console.log("Audio autoplay was prevented:", error);
      });
    }

    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <img
          src="/assets/loadindragon.gif"
          alt="DragonPath Loading..."
          className="loading-gif"
        />
        <div className="loading-text">DragonPath</div>
        <div className="loading-bar-container">
          <div className="loading-bar"></div>
        </div>
      </div>
    </div>
  );
}
