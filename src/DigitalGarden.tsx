/* eslint-disable @typescript-eslint/no-explicit-any */
// src/DigitalGarden.jsx
import React from "react";

import { images } from "./garden";
import "./DigitalGarden.css"; // Assuming you have a CSS file for styles
export default function DigitalGarden() {
  return (
    <section className="digital-garden">
      <h2>Our little Digital Garden 🌼</h2>

      <div className="garden-grid">
        {images.map((photo, i) => (
          <div
            key={i}
            className="polaroid"
            style={
              {
                ["--r" as any]: `${Math.random() * 4 - 2}deg`,
              } as React.CSSProperties
            } // random tilt
          >
            <img
              src={photo.photoSource}
              alt={`Memory ${i + 1}`}
              className="polaroid-image"
              loading="lazy"
            />
            <p className="polaroid-caption">{photo.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
