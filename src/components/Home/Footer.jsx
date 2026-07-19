import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3 className="footer-logo">🛒 TechStore</h3>
            <p className="footer-desc">
              חנות הטכנולוגיה המובילה בישראל. אנחנו מביאים לכם את המוצרים הכי חדשים במחירים הכי טובים.
            </p>
          </div>
          <div className="footer-col">
            <h4 className="footer-title">קישורים</h4>
            <ul className="footer-links">
              <li><Link to="/">דף הבית</Link></li>
              <li><Link to="/products">מוצרים</Link></li>
              <li><Link to="/about">אודות</Link></li>
              <li><Link to="/contact">צור קשר</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-title">שירות</h4>
            <ul className="footer-links">
              <li><Link to="/cart">עגלת קניות</Link></li>
              <li><Link to="/login">התחברות</Link></li>
              <li><Link to="/register">הרשמה</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-title">יצירת קשר</h4>
            <ul className="footer-links">
              <li>📧 info@techstore.co.il</li>
              <li>📞 03-1234567</li>
              <li>📍 תל אביב, ישראל</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 TechStore. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
