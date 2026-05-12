import { useState } from "react";
import Navbar from "../components/Navbar";

function ProductDetails({
  product,
  addToCart,
  setPage,
  cartCount,
  openCart,
}) {
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={styles.page}>
  

      {/* PRODUCT SECTION */}
      <div style={styles.container}>
        <div style={styles.wrapper}>
          {/* LEFT IMAGE */}
          <div style={styles.imageSection}>
            <img
              src={selectedImage}
              alt={product.name}
              style={styles.image}
              onClick={() => setIsOpen(true)}
            />
          </div>

          {/* RIGHT DETAILS */}
          <div style={styles.details}>
            <h1 style={styles.productName}>{product.name}</h1>
            <h2 style={styles.price}>Ksh {product.price}</h2>

            <hr style={styles.line} />

            {/* COLORS */}
            <p style={styles.label}>
              <strong>Color:</strong>
            </p>

            <div style={styles.colorRow}>
              {product.colors?.map((c, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedImage(c.image)}
                  style={{
                    ...styles.colorCircle,
                    backgroundColor: c.color,
                  }}
                />
              ))}
            </div>

            {/* QUANTITY */}
            <p style={styles.label}>
              <strong>Quantity:</strong>
            </p>

            <div style={styles.qtyBox}>
              <button
                onClick={() =>
                  setQuantity((prev) => Math.max(1, prev - 1))
                }
                style={styles.qtyBtn}
              >
                -
              </button>

              <span style={styles.qtyValue}>{quantity}</span>

              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                style={styles.qtyBtn}
              >
                +
              </button>
            </div>

            {/* BUTTONS */}
            <button
              style={styles.cartBtn}
              onClick={() =>
                addToCart({ ...product, qty: quantity })
              }
            >
              Add to Cart
            </button>

            <button style={styles.buyBtn}>Buy It Now</button>

            {/* DESCRIPTION */}
            <div style={styles.descriptionBox}>
              <h3 style={styles.descriptionTitle}>Description</h3>
              <p style={styles.descriptionText}>
                {product.description}
              </p>
            </div>
          </div>
        </div>

        {/* SIMILAR PRODUCTS */}
       <div style={styles.similarSection}>
       <h3 style={styles.similarTitle}>Similar Products</h3>

       <div style={styles.similarGrid}>
        {(product.similar || []).map((item, index) => (
      <div key={index} style={styles.similarCard}>
        <img
          src={item.image}
          alt={item.name}
          style={styles.similarImg}
        />

        <p style={styles.similarName}>{item.name}</p>
        <p style={styles.similarColor}>{item.color}</p>
      </div>
    ))}
  </div>
</div>
      </div>

      {/* IMAGE POPUP */}
      {isOpen && (
        <div style={styles.modal} onClick={() => setIsOpen(false)}>
          <img
            src={selectedImage}
            alt="preview"
            style={styles.modalImage}
          />
        </div>
      )}
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: "#000",
    color: "#fff",
    minHeight: "100vh",
    fontFamily: "'Poppins', sans-serif",
  },

  /* MAIN CONTAINER */
  container: {
    padding: "140px 60px 60px", // top padding prevents navbar overlap
  },

  wrapper: {
    display: "flex",
    gap: "60px",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },

  imageSection: {
    flex: 1,
    textAlign: "center",
  },

  image: {
    width: "100%",
    maxWidth: "650px",
    borderRadius: "14px",
    cursor: "pointer",
    border: "2px solid #D4AF37",
    boxShadow: "0 8px 25px rgba(212,175,55,0.15)",
  },

  details: {
    flex: 1,
    minWidth: "320px",
  },

  productName: {
    fontSize: "46px",
    color: "#D4AF37",
    marginBottom: "10px",
    fontWeight: "700",
  },

  price: {
    fontSize: "30px",
    marginBottom: "20px",
    color: "#fff",
  },

  line: {
    border: "1px solid rgba(212,175,55,0.25)",
    marginBottom: "25px",
  },

  label: {
    marginBottom: "10px",
    color: "#D4AF37",
    fontSize: "18px",
  },

  colorRow: {
    display: "flex",
    gap: "14px",
    marginBottom: "30px",
  },

  colorCircle: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    cursor: "pointer",
    border: "2px solid #D4AF37",
    transition: "0.3s ease",
  },

  qtyBox: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginBottom: "35px",
  },

  qtyBtn: {
    width: "48px",
    height: "48px",
    border: "1px solid #D4AF37",
    backgroundColor: "transparent",
    color: "#D4AF37",
    fontSize: "24px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  qtyValue: {
    fontSize: "22px",
    minWidth: "30px",
    textAlign: "center",
    color: "#fff",
  },

  cartBtn: {
    display: "block",
    width: "100%",
    padding: "18px",
    marginBottom: "15px",
    backgroundColor: "#D4AF37",
    color: "#000",
    border: "none",
    fontWeight: "700",
    fontSize: "17px",
    cursor: "pointer",
    letterSpacing: "1px",
  },

  buyBtn: {
    display: "block",
    width: "100%",
    padding: "18px",
    backgroundColor: "transparent",
    color: "#D4AF37",
    border: "2px solid #D4AF37",
    fontWeight: "700",
    fontSize: "17px",
    cursor: "pointer",
    marginBottom: "35px",
    letterSpacing: "1px",
  },

  descriptionBox: {
    borderTop: "1px solid rgba(212,175,55,0.25)",
    paddingTop: "25px",
  },

  descriptionTitle: {
    color: "#D4AF37",
    marginBottom: "12px",
    fontSize: "24px",
  },

  descriptionText: {
    lineHeight: "1.9",
    color: "#ccc",
    fontSize: "16px",
  },

  similarSection: {
  marginTop: "60px",
  paddingTop: "30px",
  borderTop: "1px solid rgba(212,175,55,0.2)",
},

similarTitle: {
  color: "#D4AF37",
  fontSize: "26px",
  marginBottom: "20px",
},

similarGrid: {
  display: "flex",
  gap: "20px",
  flexWrap: "wrap",
},

similarCard: {
  width: "180px",
  cursor: "pointer",
  textAlign: "center",
  border: "1px solid rgba(212,175,55,0.2)",
  padding: "10px",
  borderRadius: "10px",
  transition: "0.3s ease",
},

similarImg: {
  width: "100%",
  height: "140px",
  objectFit: "cover",
  borderRadius: "8px",
},

similarName: {
  color: "#fff",
  marginTop: "10px",
  fontWeight: "600",
},

similarColor: {
  color: "#aaa",
  fontSize: "14px",
},

  /* POPUP */
  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.92)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },

  modalImage: {
    maxWidth: "90%",
    maxHeight: "90%",
    borderRadius: "12px",
    border: "2px solid #D4AF37",
  },
};

export default ProductDetails;