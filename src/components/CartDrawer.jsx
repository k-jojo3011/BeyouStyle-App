import React from "react";

function CartDrawer({ cart, setCart, isOpen, setIsOpen }) {
  // ➕ increase quantity
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // ➖ decrease quantity
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id && item.qty > 1
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  // ❌ remove item
  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // 💰 total price
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <>
      {/* overlay */}
      {isOpen && (
        <div style={styles.overlay} onClick={() => setIsOpen(false)} />
      )}

      {/* drawer */}
      <div
        style={{
          ...styles.drawer,
          right: isOpen ? "0" : "-400px",
        }}
      >
        {/* header */}
        <div style={styles.header}>
          <h2>My Cart</h2>
          <button onClick={() => setIsOpen(false)} style={styles.closeBtn}>
            ✕
          </button>
        </div>

        {/* items */}
        <div style={styles.body}>
          {cart.length === 0 ? (
            <p>Your cart is empty 🛒</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} style={styles.item}>
                <img src={item.image} alt={item.name} style={styles.img} />

                <div style={{ flex: 1 }}>
                  <h4>{item.name}</h4>
                  <p>KES {item.price}</p>

                  {/* qty controls */}
                  <div style={styles.qtyBox}>
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  style={styles.remove}
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

        {/* footer */}
        {cart.length > 0 && (
          <div style={styles.footer}>
            <h3>Total: KES {total}</h3>
            <button style={styles.checkoutBtn}>
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.4)",
    zIndex: 998,
  },

  drawer: {
    position: "fixed",
    top: 0,
    width: "360px",
    height: "100%",
    background: "#fff",
    boxShadow: "-3px 0 10px rgba(0,0,0,0.2)",
    transition: "0.3s ease",
    zIndex: 999,
    display: "flex",
    flexDirection: "column",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    borderBottom: "1px solid #eee",
  },

  closeBtn: {
    background: "transparent",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
  },

  body: {
    padding: "15px",
    overflowY: "auto",
    flex: 1,
  },

  item: {
    display: "flex",
    gap: "10px",
    marginBottom: "15px",
    alignItems: "center",
  },

  img: {
    width: "60px",
    height: "60px",
    objectFit: "cover",
    borderRadius: "8px",
  },

  qtyBox: {
    display: "flex",
    gap: "8px",
    alignItems: "center",
    marginTop: "5px",
  },

  remove: {
    background: "red",
    color: "#fff",
    border: "none",
    padding: "5px 8px",
    borderRadius: "5px",
    cursor: "pointer",
  },

  footer: {
    borderTop: "1px solid #eee",
    padding: "15px",
  },

  checkoutBtn: {
    width: "100%",
    padding: "10px",
    background: "black",
    color: "white",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default CartDrawer;