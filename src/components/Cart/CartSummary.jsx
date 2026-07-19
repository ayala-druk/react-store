import React from "react";
import { Link } from "react-router-dom";

function CartSummary({ cart, getCartTotal, getCartCount }) {
  const total = getCartTotal();
  const shipping = total > 200 ? 0 : 30;
  const finalTotal = total + shipping;

  return (
    <div className="cart-summary card">
      <h3 className="cart-summary-title">סיכום הזמנה</h3>

      <div className="cart-summary-rows">
        <div className="summary-row">
          <span>מוצרים ({getCartCount()})</span>
          <span>₪{total}</span>
        </div>
        <div className="summary-row">
          <span>משלוח</span>
          <span>{shipping === 0 ? "חינם ✓" : `₪${shipping}`}</span>
        </div>
        {shipping > 0 && (
          <p className="shipping-note">
            משלוח חינם בהזמנות מעל ₪200
          </p>
        )}
        <div className="summary-divider"></div>
        <div className="summary-row summary-total">
          <span>סה"כ לתשלום</span>
          <span>₪{finalTotal}</span>
        </div>
      </div>

      <Link to="/purchase" className="btn btn-accent btn-lg" style={{ width: "100%", marginTop: "20px" }}>
        מעבר לתשלום ←
      </Link>

      <Link to="/products" className="btn btn-secondary" style={{ width: "100%", marginTop: "10px" }}>
        המשך קניות
      </Link>
    </div>
  );
}

export default CartSummary;
