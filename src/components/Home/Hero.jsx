import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content container">
        <div className="hero-text">
          <span className="hero-badge">🔥 מבצעים חמים</span>
          <h1 className="hero-title">
            הטכנולוגיה הכי חדשה
            <br />
            <span className="hero-highlight">במחירים הכי טובים</span>
          </h1>
          <p className="hero-desc">
            גלו את מגוון המוצרים שלנו — אוזניות, שעונים חכמים, מקלדות ועוד.
            משלוח חינם בהזמנה מעל ₪200.
          </p>
          <div className="hero-actions">
            <Link to="/products" className="btn btn-primary btn-lg">
              לצפייה במוצרים ←
            </Link>
            <Link to="/about" className="btn btn-secondary btn-lg">
              קצת עלינו
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop"
              alt="אוזניות"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
