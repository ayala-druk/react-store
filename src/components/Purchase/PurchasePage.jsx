import React, { useState } from "react";
import { Link } from "react-router-dom";
import OrderSummary from "./OrderSummary";
import PurchaseForm from "./PurchaseForm";
import PurchaseConfirmation from "./PurchaseConfirmation";
import "./Purchase.css";

function PurchasePage({ cart, getCartTotal, clearCart, currentUser }) {
  const [purchaseComplete, setPurchaseComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const handlePurchase = () => {
    const orderNum = "TS-" + Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(orderNum);
    setPurchaseComplete(true);
    clearCart();
  };

  if (purchaseComplete) {
    return (
      <PurchaseConfirmation
        orderNumber={orderNumber}
        email={currentUser?.email || "your@email.com"}
      />
    );
  }

  if (cart.length === 0) {
    return (
      <div className="page">
        <div className="container">
          <div className="empty-cart">
            <span className="empty-cart-icon">📦</span>
            <h2>אין מוצרים לרכישה</h2>
            <p>העגלה ריקה — הוסיפו מוצרים לפני המעבר לתשלום</p>
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
        <h1 className="page-title">השלמת רכישה</h1>
        <p className="page-subtitle">מלאו את פרטי המשלוח והתשלום</p>

        <div className="purchase-layout">
          <PurchaseForm onSubmit={handlePurchase} />
          <OrderSummary cart={cart} getCartTotal={getCartTotal} />
        </div>
      </div>
    </div>
  );
}

export default PurchasePage;
