import React from "react";
import "./Loading.css";

export default function Loading() {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-wordmark">
          DRAGON<span className="text-crimson">PATH</span>
        </div>
        <div className="loading-tagline">YOUR PATH STARTS HERE</div>
        <div className="loading-bar-container">
          <div className="loading-bar"></div>
        </div>
      </div>
    </div>
  );
}
