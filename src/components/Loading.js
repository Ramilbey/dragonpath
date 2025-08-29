import React from "react";

export default function Loading() {
  return (
    <div
      className="loading-screen"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <img
        src="/assets/loadindragon.gif"
        alt="Loading..."
        style={{
          width: "80%",        // takes 80% of screen width
          maxWidth: "300px",   // but never bigger than 300px
          height: "auto",      // keeps aspect ratio
        }}
      />
    </div>
  );
}
