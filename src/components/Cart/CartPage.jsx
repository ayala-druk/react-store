import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import "./Cart.css";

function CartPage({ cart, removeFromCart, updateQuantity, getCartTotal, getCartCount }) {
  if (cart.length === 0) {
    return (
      <div className="page">
        <div className="container">
          <div className="empty-cart">
            <span className="empty-cart-icon">🛒</span>
            <h2>העגלה ריקה</h2>
            <p>עדיין לא הוספת מוצרים לעגלה</p>
            <Link to="/products" className="btn btn-primary btn-lg">
              לצפייה במוצרים ←
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">עגלת קניות</h1>
        <p className="page-subtitle">{getCartCount()} פריטים בעגלה</p>

        <div className="cart-layout">
          <div className="cart-items">
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            ))}
          </div>
          <CartSummary
            cart={cart}
            getCartTotal={getCartTotal}
            getCartCount={getCartCount}
          />
        </div>
      </div>
    </div>
  );
}

export default CartPage;
