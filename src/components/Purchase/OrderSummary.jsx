import React from "react";

function OrderSummary({ cart, getCartTotal }) {
  const total = getCartTotal();
  const shipping = total > 200 ? 0 : 30;

  return (
    <div className="order-summary card">
      <h3 className="cart-summary-title">סיכום הזמנה</h3>
      <div className="order-items">
        {cart.map((item) => (
          <div key={item.id} className="order-item">
            <img src={item.image} alt={item.name} className="order-item-image" />
            <div className="order-item-details">
              <span className="order-item-name">{item.name}</span>
              <span className="order-item-qty">כמות: {item.quantity}</span>
            </div>
            <span className="order-item-price">₪{item.price * item.quantity}</span>
          </div>
        ))}
      </div>
      <div className="summary-divider"></div>
      <div className="cart-summary-rows">
        <div className="summary-row">
          <span>סכום ביניים</span>
          <span>₪{total}</span>
        </div>
        <div className="summary-row">
          <span>משלוח</span>
          <span>{shipping === 0 ? "חינם ✓" : `₪${shipping}`}</span>
        </div>
        <div className="summary-divider"></div>
        <div className="summary-row summary-total">
          <span>סה"כ</span>
          <span>₪{total + shipping}</span>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
