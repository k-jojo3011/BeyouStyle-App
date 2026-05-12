import React, { useState, useEffect } from "react";

import slide2 from "../assets/images/slide2.jpeg";
import slide3 from "../assets/images/slide3.jpeg";
import slide4 from "../assets/images/slide4.jpeg";
import slide5 from "../assets/images/slide5.jpeg";

const images = [slide2, slide3, slide4, slide5];

function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // slightly slower = more luxury feel

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.slider}>
      <img src={images[index]} alt="fashion" style={styles.img} />
    </div>
  );
}

/* =========================
   STYLES
========================= */
const styles = {
  slider: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",   // FIX: use 100% instead of 100vw
    overflow: "hidden",
    zIndex: 0,
    left: 0,
    right: 0,
  },

  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    position: "absolute",
    top: 0,
    left: 0,
  },
};

export default Slider;