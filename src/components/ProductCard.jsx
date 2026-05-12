import { useState } from "react";

function ProductCard({ product, addToCart, onClick }) {
  const [selectedImage, setSelectedImage] = useState(product.image);

  return (
    <div style={styles.wrapper}>

      {/* IMAGE BOX ONLY */}
      <div style={styles.imageBox}>
        <img
          src={selectedImage}
          alt={product.name}
          style={styles.img}
          onClick={onClick}
        />
      </div>

      {/* CONTENT BELOW (NOT BOXED) */}
      <div style={styles.content}>
        <h3>{product.name}</h3>
        <p style={styles.price}>Ksh {product.price}</p>

        {product.colors && (
          <div style={styles.colorRow}>
            {product.colors.map((c, i) => (
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
        )}

      </div>
    </div>
  );
}
const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  imageBox: {
    background: "white",
    borderRadius: "10px",
    overflow: "hidden",
    width: "100%",
    height: "350px", // 👈 IMPORTANT: fixed height for all cards
  },

  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover", // 👈 keeps image nicely cropped, no distortion
    cursor: "pointer",
    display: "block",
  },

  content: {
    padding: "15px",
    textAlign: "center",
  },

  price: {
    fontWeight: "bold",
    margin: "10px 0",
  },

  colorRow: {
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    marginBottom: "10px",
  },

  colorCircle: {
    width: "18px",
    height: "18px",
    borderRadius: "50%",
    cursor: "pointer",
    border: "1px solid #ccc",
  },
};

export default ProductCard;