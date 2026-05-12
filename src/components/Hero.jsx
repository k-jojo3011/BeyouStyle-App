import React from "react";
import bgImage from "../assets/images/Sling-Bag1.jpeg";

function Hero() {
  return (
    <div style={styles.hero}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>Elegant. Bold. Feminine.</h1>
        <p>Discover scarves, bags, sandals & heels designed for your style</p>
      </div>
    </div>
  );
}

const styles = {
  hero: {
    height: "300px",
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  },
  overlay: {
    background: "rgba(0,0,0,0.5)",
    height: "100%",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: "32px",
    fontWeight: "bold",
  },
};

export default Hero;