import React, { useState } from "react";

function Footer({ setPage }) {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) return alert("Enter your email");
    alert(`Subscribed: ${email}`);
    setEmail("");
  };

  return (
    <footer style={styles.footer}>
      {/* LEFT SIDE */}
      <div style={styles.column}>
        <h2 style={styles.brand}>BeYouStyle</h2>
        <p style={styles.tagline}>@ BeYouStyle</p>
      </div>

      {/* CENTER */}
      <div style={styles.columnCenter}>
        {/* SHOP */}
        <div>
          <h4 style={styles.heading}>Shop</h4>
          <p style={styles.link} onClick={() => setPage("home")}>Home</p>
          <p style={styles.link} onClick={() => setPage("blog")}>Blog</p>
          <p style={styles.link} onClick={() => setPage("contact")}>Contact Us</p>
        </div>

        {/* HELP */}
        <div>
          <h4 style={styles.heading}>Help</h4>
          <p style={styles.link} onClick={() => setPage("contact")}>
            <span style={{ marginRight: "6px" }}>📞</span>
            Contact Us
          </p>
        </div>

        {/* FOLLOW US */}
        <div>
          <h4 style={styles.heading}>Follow Us</h4>
          <p style={styles.link}>Instagram</p>
          <p style={styles.link}>TikTok</p>
          <p style={styles.link}>Pages</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div style={styles.column}>
        <h4 style={styles.heading}>Subscribe To our Newsletter</h4>
          <p style={styles.subscribeText}>Get updates on new arrivals, exclusive offers, and style tips directly to your inbox.</p>

        <div style={styles.subscribeBox}>
          <input
            type="email"
            placeholder="Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>

        <button onClick={handleSubscribe} style={styles.button}>
          Subscribe
        </button>
      </div>
    </footer>
  );
}

/* =========================
   STYLES
========================= */
const styles = {
  footer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "60px 40px",
    backgroundColor: "#D4AF37",
    color: "#111",
    flexWrap: "wrap",
    gap: "40px",
    height:"40vh",
  },

  column: {
    flex: 1,
    minWidth: "200px",
  },

  columnCenter: {
    flex: 2,
    display: "flex",
    justifyContent: "space-around",
    minWidth: "300px",
  },

  brand: {
    fontSize: "28px",
    fontWeight: "700",
  },

  tagline: {
    marginTop: "5px",
  },

  heading: {
    fontSize: "18px",
    marginBottom: "10px",
    fontWeight: "700",
  },

  link: {
    cursor: "pointer",
    marginBottom: "8px",
    fontSize: "15px",
  },

  subscribeBox: {
    borderBottom: "2px solid #111",
    marginBottom: "10px",
  },

  subscribeText: {
  fontSize: "14px",
  marginBottom: "15px",
  lineHeight: "1.5",
  color: "#222",
},
  input: {
    width: "100%",
    padding: "8px",
    border: "none",
    outline: "none",
    background: "transparent",
    color: "#111",
  },

  button: {
    padding: "10px 20px",
    backgroundColor: "#111",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
};

export default Footer;