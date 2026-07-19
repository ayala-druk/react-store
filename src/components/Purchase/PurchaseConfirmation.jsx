import React from "react";
import { Link } from "react-router-dom";

function PurchaseConfirmation({ orderNumber, email }) {
  return (
    <div className="page">
      <div className="container">
        <div className="confirmation-card card">
          <div className="confirmation-icon">✅</div>
          <h1 className="confirmation-title">ההזמנה בוצעה בהצלחה!</h1>
          <p className="confirmation-subtitle">
            תודה על הרכישה שלך ב-TechStore
          </p>

          <div className="confirmation-details">
            <div className="confirmation-row">
              <span className="confirmation-label">מספר הזמנה:</span>
              <span className="confirmation-value">{orderNumber}</span>
            </div>
            <div className="confirmation-row">
              <span className="confirmation-label">אישור נשלח ל:</span>
              <span className="confirmation-value">{email}</span>
            </div>
            <div className="confirmation-row">
              <span className="confirmation-label">זמן משלוח משוער:</span>
              <span className="confirmation-value">3-5 ימי עסקים</span>
            </div>
          </div>

          <div className="confirmation-message">
            <p>📧 אישור הזמנה נשלח לכתובת האימייל שלך</p>
            <p>📦 תקבלו עדכון כשהחבילה תצא למשלוח</p>
          </div>

          <div className="confirmation-actions">
            <Link to="/" className="btn btn-primary btn-lg">
              חזרה לדף הבית
            </Link>
            <Link to="/products" className="btn btn-secondary btn-lg">
              המשך קניות
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PurchaseConfirmation;
