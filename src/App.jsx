import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import CartDrawer from "./components/CartDrawer";
import ProductDetails from "./components/ProductDetails";

/* Images */
import bagGrey from "./assets/images/sling8.jpeg";
import bagBlack from "./assets/images/sling7.jpeg";
import bagMaroon from "./assets/images/sling6.jpeg";
import scarfImg from "./assets/images/scarves.jpeg";
import slingBlack from "./assets/images/slide4.jpeg";
import slingWhite from "./assets/images/slide3.jpeg";
import slingBrown from "./assets/images/slide2.jpeg";
import scarfPink from "./assets/images/scarfPink.png";
import hobo3 from "./assets/images/hobo.jpg";
import bagleather from "./assets/images/bagLeather.jpg";


function App() {
  /* =========================
     STATE
  ========================== */
  const [page, setPage] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  /* =========================
     PRODUCTS
  ========================== */
  const products = [
    {
      id: 1,
      name: "Sling Bag",
      price: 1800,
      stock: 5,
      image: bagGrey,
      description: "Stylish sling bag for everyday luxury use.",
      colors: [
        { color: "#939393", image: bagGrey },
        { color: "#070707", image: bagBlack },
        { color: "#D4AF37", image: bagMaroon },
      ],
    },
    {
      id: 2,
      name: "Leather Bag",
      price: 2000,
      stock: 10,
      image: bagleather,
      description: "Soft silk scarf with elegant finishing.",
    },
    {
      id: 3,
      name: "Baguette",
      price: 1500,
      stock: 2,
      image: slingBlack,
      description: "Minimal luxury baguette bag for modern fashion.",
      colors: [
        { color: "#060505", image: slingBlack },
        { color: "#f1efef", image: slingWhite },
        { color: "#cb6f35", image: slingBrown },
      ],
    },
    {
      id: 4,
      name: "Hobo Bag",
      price: 6000,
      stock: 4,
      image:hobo3,
      description: "Elegant heels for premium occasions.",
    },

    
  ];

  /* =========================
     CART FUNCTION
  ========================== */
  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });

    setIsCartOpen(true);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  /* =========================
     RENDER
  ========================== */
  return (
    <div style={styles.app}>
      {/* NAVBAR */}
      <Navbar
        setPage={setPage}
        cartCount={cartCount}
        openCart={() => setIsCartOpen(true)}
      />

      {/* CART */}
      <CartDrawer
        cart={cart}
        setCart={setCart}
        isOpen={isCartOpen}
        setIsOpen={setIsCartOpen}
      />

      {/* MAIN CONTENT */}
      <main style={styles.main}>
        {selectedProduct ? (
          <ProductDetails
            product={selectedProduct}
            addToCart={addToCart}
            goBack={() => setSelectedProduct(null)}
          />
        ) : (
          <>
            {page === "home" && (
              <Home
                products={products}
                addToCart={addToCart}
                setSelectedProduct={setSelectedProduct}
              />
            )}

            {page === "contact" && <Contact />}
          </>
        )}
      </main>

      {/* FOOTER */}
      <Footer setPage={setPage} />
    </div>
  );
}

/* =========================
   STYLES
========================= */
const styles = {
  app: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  main: {
    flex: 1,
    width: "100%",
  },
};

export default App;