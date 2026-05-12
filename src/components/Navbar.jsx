import React, { useState, useEffect } from "react";
import navLogo from "../assets/images/NavLogo.jpeg";

function Navbar({ cartCount, setPage, openCart }) {
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [currency, setCurrency] = useState("KES");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        ...styles.nav,
        background: scrolled ? "#fff" : "rgba(0,0,0,0.25)",
      }}
    >
      {/* LEFT - LOGO */}
      <div style={styles.left}>
       <img src={navLogo}  alt="logo" onClick={() => setPage("home")}
       style={{
    ...styles.logoImg,
    filter: scrolled ? "none" : " invert(1)",
  }}
/>
      </div>

      {/* CENTER - MENU */}
      <div style={styles.center}>
        <span onClick={() => setPage("home")} style={styles.link}>Home</span>
        <span onClick={() => setPage("home")} style={styles.link}>New Arrivals</span>
        <span onClick={() => setPage("shop")} style={styles.link}>About Us</span>
        <span onClick={() => setPage("blog")} style={styles.link}>Blog</span>
        <span onClick={() => setPage("contact")} style={styles.link}>Contact</span>
      </div>

      {/* RIGHT - UTILITIES */}
      <div style={styles.right}>

        {/* CURRENCY */}
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          style={styles.currency}
        >
          <option>KES</option>
          <option>USD</option>
          <option>EUR</option>
        </select>

        {/* SEARCH */}
        <span onClick={() => setShowSearch(!showSearch)} style={styles.icon}>
          🔍
        </span>

        {showSearch && (
          <input
            placeholder="Search..."
            style={styles.searchInput}
          />
        )}

        {/* CART */}
        <span onClick={openCart} style={styles.icon}>
          🛒({cartCount})
        </span>
      </div>
    </div>
  );
}
/* =========================
   STYLES
========================= */
const styles = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    padding: "18px 40px",
    transition: "0.3s ease",
  },

  left: {
    flex: 1,
  },

  center: {
    flex: 2,
    display: "flex",
    justifyContent: "center",
    gap: "30px",
  },

  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "18px",
  },

  logoImg: {
    height: "45px",
    cursor: "pointer",
  },

  link: {
    cursor: "pointer",
    fontSize: "20px",
    fontWeight: "500",
    letterSpacing: "0.5px",
    color: "#D4AF37",
  },

  icon: {
    cursor: "pointer",
    fontSize: "18px",
  },

  currency: {
    border: "none",
    background: "transparent",
    cursor: "pointer",
    fontSize: "13px",
  },

  searchInput: {
    padding: "6px 10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    outline: "none",
  },
};

export default Navbar;