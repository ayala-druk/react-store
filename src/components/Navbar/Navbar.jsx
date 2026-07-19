import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar({ cartCount, currentUser, logout }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-icon">🛒</span>
          <span className="logo-text">TechStore</span>
        </Link>

        <button className="navbar-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${menuOpen ? "active" : ""}`}></span>
        </button>

        <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
          <li>
            <NavLink to="/" onClick={closeMenu}>
              דף הבית
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" onClick={closeMenu}>
              מוצרים
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenu}>
              אודות
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMenu}>
              צור קשר
            </NavLink>
          </li>

          {currentUser && currentUser.role === "admin" && (
            <li>
              <NavLink to="/admin" onClick={closeMenu} className="nav-admin">
                ניהול
              </NavLink>
            </li>
          )}
        </ul>

        <div className="navbar-actions">
          <Link to="/cart" className="cart-btn" onClick={closeMenu}>
            🛍️
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>

          {currentUser ? (
            <div className="user-menu">
              <Link to="/profile" className="user-btn" onClick={closeMenu}>
                👤 {currentUser.fullName || currentUser.username}
              </Link>
              <button className="logout-btn" onClick={logout}>
                יציאה
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-primary btn-sm" onClick={closeMenu}>
              התחברות
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
