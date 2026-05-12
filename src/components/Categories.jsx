/* YES — REPLACE THIS ENTIRE Categories.jsx FILE WITH THIS */

import React from "react";

import slide2 from "../assets/images/slide2.jpeg";
import slide3 from "../assets/images/slide3.jpeg";
import slide4 from "../assets/images/slide4.jpeg";

const categories = [
  {
    name: "Shoulder Bags",
    image: slide2,
  },
  {
    name: "Backpacks",
    image: slide3,
  },
  {
    name: "Accessories",
    image: slide4,
  },
];

function Categories() {
  return (
    <section style={styles.container}>
      {categories.map((cat, index) => (
        <div key={index} style={styles.card}>
          <img src={cat.image} alt={cat.name} style={styles.image} />

          <div style={styles.overlay}>
            <h2 style={styles.title}>{cat.name}</h2>

            <button
              style={styles.shopBtn}
              onMouseOver={(e) =>
                (e.target.style.borderBottom = "2px solid #D4AF37")
              }
              onMouseOut={(e) =>
                (e.target.style.borderBottom = "2px solid white")
              }
              onClick={() => alert(`Shop ${cat.name}`)}
            >
              Shop Now
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "14px",
    padding: "30px 20px",
    backgroundColor: "#fdfbf7",
  },

  card: {
    position: "relative",
    height: "720px",
    overflow: "hidden",
    cursor: "pointer",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.5s ease",
  },

  overlay: {
    position: "absolute",
    bottom: "55px",
    left: "40px",
    color: "#fff",
    zIndex: 2,
  },

  title: {
    fontSize: "52px",
    fontWeight: "400",
    marginBottom: "20px",
    fontFamily: "'Playfair Display', serif",
  },

  shopBtn: {
    background: "transparent",
    border: "none",
    borderBottom: "2px solid white",
    color: "#fff",
    fontSize: "26px",
    cursor: "pointer",
    padding: "0",
    fontFamily: "'Playfair Display', serif",
    transition: "0.3s ease",
  },
};

export default Categories;