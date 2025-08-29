import React from "react";

export default function Loading() {
  return (
    <div className="loading-screen" style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "black", 
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999
    }}>
      <img src="/dragon.gif" alt="Loading..." style={{ width: "300px" }} />
    </div>
  );
}
