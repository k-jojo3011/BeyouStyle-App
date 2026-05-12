import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import ProductDetails from "../components/ProductDetails";
import Slider from "../components/Slider";
import scarfImg from "../assets/images/scarves.jpeg";
import scarfPink from "../assets/images/scarfPink.png";

import bagBlack from "../assets/images/sling6.jpeg";
import bagBrown from "../assets/images/sling7.jpeg";
import bagGold from "../assets/images/sling8.jpeg";

import slide2 from "../assets/images/slide2.jpeg";
import slide3 from "../assets/images/slide3.jpeg";
import hobo3 from "../assets/images/hobo.jpg";
import bagleather from "../assets/images/bagLeather.jpg";

/* =========================
   Categories Section
========================= */
/* =========================
   LUXURY CATEGORY SECTION
   REPLACE YOUR CURRENT Categories() WITH THIS
========================= */
function Categories() {
  const categories = [
    {
      name: "Totes",
      image: slide3,
    },
    {
      name: "Chic Leather  Bag",
      image:  bagleather,
    },
    {
      name: "Hobo Bag",
      image: hobo3,
    },
  ];

  return (
    <section style={styles.luxuryCategories}>
      {categories.map((cat, index) => (
        <div key={index} style={styles.luxuryCard}>
          <img src={cat.image} alt={cat.name} style={styles.luxuryImage} />

          <div style={styles.luxuryOverlay}>
            <h2 style={styles.luxuryTitle}>{cat.name}</h2>

            <button
              style={styles.shopNowBtn}
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

/* =========================
   Join Community Section
========================= */
function JoinCommunity() {
  const [email, setEmail] = useState("");

  const handleJoin = () => {
    if (!email) return alert("Please enter your email");
    alert(`Welcome to BeYouStyle community: ${email}`);
    setEmail("");
  };

  return (
    <div style={styles.joinSection}>
      <div style={styles.joinContent}>
        <h2 style={styles.joinTitle}>Join Our Community</h2>
        <p style={styles.joinText}>
          Get exclusive updates, new arrivals, and special offers.
        </p>

        <div style={styles.joinInputRow}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.joinInput}
          />
          <button onClick={handleJoin} style={styles.joinBtn}>
            Join
          </button>
        </div>
      </div>
    </div>
  );
}

/* =========================
   Home Component
========================= */
function Home({ products, addToCart, setSelectedProduct }) {
  return (
    <div style={styles.page}>
      {/* HERO */}
      <div style={styles.hero}>
        <Slider />
        <div style={styles.heroDarkOverlay}></div>

        <div style={styles.heroOverlay}>
          <p style={styles.subHeading}>NEW ARRIVALS</p>

          <h1 style={styles.heroTitle}>Timeless Elegance</h1>

          <p style={styles.heroSubtitle}>
            Discover premium fashion inspired by BeYouStyle.
          </p>

          <button style={styles.shopBtn}>SHOP NOW</button>
        </div>
      </div>

      {/* PRODUCTS */}
      <div style={styles.productsSection}>
        <p style={styles.subHeading}>FEATURED PICKS</p>

        <h1 style={styles.sectionTitle}>Best Sellers Products</h1>

        <div style={styles.grid}>
          {products.length === 0 ? (
            <p>No products available</p>
          ) : (
            products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => setSelectedProduct(product)}
              />
            ))
          )}
        </div>
      </div>

      {/* ABOUT US */}
      <div style={styles.aboutSection}>
        <div style={styles.aboutImageWrapper}>
          <img
            src="https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=80"
            alt="About"
            style={styles.aboutImage}
          />
        </div>

        <div style={styles.aboutContent}>
          <p style={styles.subHeading}>ABOUT US</p>

          <h2 style={styles.aboutTitle}>Redefining Luxury Fashion</h2>

          <p style={styles.aboutText}>
            BeYouStyle is a premium fashion brand dedicated to timeless elegance
            and craftsmanship.
          </p>

          <button style={styles.aboutBtn}>Learn More</button>
        </div>
      </div>

      {/* JOIN COMMUNITY */}
      <JoinCommunity />

      {/* CATEGORIES */}
      <Categories />



      {/* INFO STRIP */}
<div style={styles.infoStrip}>
  <div style={styles.infoItem}>
    <h4>Free Kenya Shipping</h4>
    <p>Free shipping on all orders in Kenya.</p>
  </div>

   <div style={styles.infoItem}>
    <h4>Guaranteed For Life</h4>
    <p>We make bags that last a lifetime. Find out more here.</p>
  </div>

  <div style={styles.infoItem}>
    <h4>Customer Service</h4>
    <p>
      Need to contact us? Day or night, just send an e-mail to{" "}
      customercare@beyoustyle.com
    </p>
  </div>

  <div style={styles.infoItem}>
    <h4>Secure Payment</h4>
    <p>Your payment information is processed securely by Direct Pay Online.</p>
  </div>

 
</div>

 {/* WHATSAPP FLOATING CHAT BUTTON */}
<a
  href="https://wa.me/?text=Hello%20I%20would%20like%20to%20shop%20with%20BeYouStyle"
  target="_blank"
  rel="noopener noreferrer"
  style={styles.whatsappFloat}
>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
    alt="WhatsApp Chat"
    style={styles.whatsappIcon}
  />
</a>
</div>
  );
}

/* =========================
   STYLES
========================= */
const styles = {
  page: {
    width: "100%",
    backgroundColor: "#fdfbf7",
    fontFamily: "'Poppins', sans-serif",
  },

  hero: {
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
  },

  heroOverlay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "#fff",
    zIndex: 2,
  },

  heroDarkOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.4)",
    zIndex: 1,
  },

  subHeading: {
    color: "#D4AF37",
    letterSpacing: "4px",
    fontSize: "14px",
    fontWeight: "600",
  },

  heroTitle: {
    fontSize: "50px",
    fontWeight: "700",
  },

  heroSubtitle: {
    fontSize: "18px",
    color: "#fff",
  },

  shopBtn: {
    backgroundColor: "#D4AF37",
    padding: "12px 30px",
    border: "none",
    fontWeight: "bold",
  },


  /* ADD THESE STYLES INSIDE YOUR styles OBJECT */

infoStrip: {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "30px",
  padding: "60px 40px",
  backgroundColor: "#f8f8f8",
  borderTop: "1px solid #e5e5e5",
  borderBottom: "1px solid #e5e5e5",
  textAlign: "center",
},

infoItem: {
  padding: "10px 15px",
},

infoTitle: {
  fontSize: "18px",
  fontWeight: "600",
  marginBottom: "12px",
  color: "#111",
},

infoText: {
  fontSize: "14px",
  color: "#555",
  lineHeight: "1.7",
},

/* OPTIONAL — makes category cards cleaner */
categoryCard: {
  textAlign: "center",
},

imageWrapper: {
  overflow: "hidden",
  borderRadius: "8px",
},


  aboutSection: {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "60px",
  padding: "100px 40px",
  backgroundColor: "#fdfbf7",
  flexWrap: "wrap",
},

aboutImageWrapper: {
  flex: 1,
  minWidth: "300px",
},

aboutImage: {
  width: "100%",
  height: "500px",
  objectFit: "cover",
  borderRadius: "10px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
},

aboutContent: {
  flex: 1,
  minWidth: "300px",
},

aboutTitle: {
  fontSize: "40px",
  fontWeight: "700",
  marginBottom: "20px",
  color: "#111",
},

aboutText: {
  fontSize: "18px",
  lineHeight: "1.7",
  color: "#444",
  marginBottom: "30px",
},

aboutBtn: {
  padding: "14px 30px",
  backgroundColor: "#D4AF37",
  border: "none",
  color: "#111",
  fontWeight: "bold",
  cursor: "pointer",
  letterSpacing: "2px",
},

  joinSection: {
    backgroundColor: "#000",
    color: "#fff",
    padding: "90px 20px",
    display: "flex",
    justifyContent: "center",
  },

  joinContent: {
    textAlign: "center",
    maxWidth: "600px",
  },

  joinTitle: {
    fontSize: "36px",
    fontWeight: "700",
  },

  joinText: {
    color: "#ccc",
  },

  joinInputRow: {
    display: "flex",
    borderBottom: "1px solid #555",
  },

  joinInput: {
    flex: 1,
    background: "transparent",
    border: "none",
    color: "#fff",
    padding: "10px",
  },

  joinBtn: {
    backgroundColor: "#D4AF37",
    border: "none",
    padding: "10px 20px",
  },

/* =========================
   ADD THESE TO YOUR styles OBJECT
========================= */

luxuryCategories: {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "14px",
  padding: "40px 20px",
  backgroundColor: "#fdfbf7",
},

luxuryCard: {
  position: "relative",
  height: "730px",
  overflow: "hidden",
  cursor: "pointer",
},

luxuryImage: {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.5s ease",
},

luxuryOverlay: {
  position: "absolute",
  bottom: "60px",
  left: "45px",
  color: "#fff",
  zIndex: 2,
},

luxuryTitle: {
  fontSize: "20px",
  fontWeight: "500",
  marginBottom: "20px",
  fontFamily: "'Playfair Display', serif",
  color: "#f1992d",
},

shopNowBtn: {
  background: "transparent",
  border: "none",
  borderBottom: "2px solid white",
  color: "#f1992d",
  fontSize: "20px",
  cursor: "pointer",
  padding: "0",
  fontFamily: "'Playfair Display', serif",
  transition: "0.3s ease",
},

/* OPTIONAL HOVER EFFECT */
luxuryCardHover: {
  transform: "scale(1.05)",
},

  productsSection: {
    padding: "100px 40px",
    textAlign: "center",
  },

  sectionTitle: {
    fontSize: "42px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "30px",
  },

  /* ADD THESE INSIDE YOUR styles OBJECT */

whatsappFloat: {
  position: "fixed",
  bottom: "25px",
  left: "25px",
  zIndex: 999,
  width: "65px",
  height: "65px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "transform 0.3s ease",
},

whatsappIcon: {
  width: "65px",
  height: "65px",
},


  
};

export default Home;