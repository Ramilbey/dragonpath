import React from "react";
import "./Loading.css";

export default function Loading() {
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
