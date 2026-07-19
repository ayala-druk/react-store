import React from "react";
import { Link } from "react-router-dom";

function CartItem({ item, removeFromCart, updateQuantity }) {
  return (
    <div className="cart-item card">
      <Link to={`/products/${item.id}`}>
        <img src={item.image} alt={item.name} className="cart-item-image" />
      </Link>
      <div className="cart-item-details">
        <Link to={`/products/${item.id}`}>
          <h3 className="cart-item-name">{item.name}</h3>
        </Link>
        <span className="cart-item-category">{item.category}</span>
        <span className="cart-item-unit-price">₪{item.price} ליחידה</span>
      </div>
      <div className="cart-item-controls">
        <div className="quantity-control">
          <button
            className="qty-btn"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
          >
            −
          </button>
          <span className="qty-value">{item.quantity}</span>
          <button
            className="qty-btn"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            +
          </button>
        </div>
      </div>
      <div className="cart-item-total">
        <span className="cart-item-price">₪{item.price * item.quantity}</span>
        <button
          className="cart-item-remove"
          onClick={() => removeFromCart(item.id)}
          title="הסרה מהעגלה"
        >
          🗑️ הסר
        </button>
      </div>
    </div>
  );
}

export default CartItem;
