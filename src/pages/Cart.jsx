import React from "react";

function Cart({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container">
      <h1>Cart</h1>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, index) => (
          <p key={index}>
            {item.name} - ${item.price}
          </p>
        ))
      )}

      <h3>Total: ${total}</h3>
    </div>
  );
}

export default Cart;