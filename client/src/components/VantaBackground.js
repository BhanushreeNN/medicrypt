import React, { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

const VantaBackgroundWithText = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE, // Pass the THREE instance
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x84caed, // Customized color
          backgroundColor: 0x09335e, // Customized background color
          points: 13.0,
          maxDistance: 21.0,
          spacing: 17.0,
          // Enable background blur
          backgroundBlur: 0.5, // Set blur level to make it visible
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
    className="flag"
      style={{
        position: "relative", // Position the text relative to the Vanta background
        height: "100vh", // Full viewport height
        overflow: "hidden", // Hide anything outside of the container
      }}
    >
      {/* Vanta background */}
      <div
        ref={vantaRef}
        style={{
          position: "absolute", // Vanta effect in absolute position
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          filter: "blur(2px)",
          zIndex: -1, // Make sure the background stays behind the text
        }}
      ></div>

      {/* Overlay text */}
      <div
        style={{
          position: "absolute", // Position the text absolutely within the container
          top: "50%", // Vertically center the text
          left: "50%", // Horizontally center the text
          transform: "translate(-50%, -50%)", // Adjust for exact centering
          color: "#fff", // White text color
          fontSize: "3rem", // Customize font size
          fontWeight: "bold", // Customize font weight
          textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)", // Optional text shadow for better visibility
        }}
      >
        <div className="landHeading">
          <h1
            style={{
              fontFamily: "Arial, Helvetica, sans-serif",
              fontWeight: "bold",
              fontSize: "70px",
            }}
          >
            MEDICRYPT
          </h1>
          {/* Animated typing text */}
          <p className="animated-text">
            Revolutionizing Patient Record Management with Blockchain Technology
          </p>
        </div>
      </div>
    </div>
  );
};

export default VantaBackgroundWithText;
