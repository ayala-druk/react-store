import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function UserProfile({ currentUser, logout }) {
  const navigate = useNavigate();

  // אם לא מחובר
  if (!currentUser) {
    return (
      <div className="page">
        <div className="container">
          <div className="auth-card card">
            <div className="auth-icon">🔒</div>
            <h2>לא מחובר/ת</h2>
            <p className="auth-subtitle">יש להתחבר כדי לצפות בפרופיל</p>
            <Link to="/login" className="btn btn-primary btn-lg" style={{ width: "100%" }}>
              התחברות
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="page">
      <div className="container">
        <div className="profile-card card">
          <div className="profile-header">
            <div className="profile-avatar">
              {currentUser.role === "admin" ? "👑" : "👤"}
            </div>
            <h1 className="profile-name">{currentUser.fullName}</h1>
            <span className={`badge ${currentUser.role === "admin" ? "badge-primary" : "badge-success"}`}>
              {currentUser.role === "admin" ? "מנהל" : "משתמש"}
            </span>
          </div>

          <div className="profile-info">
            <div className="profile-info-row">
              <span className="profile-label">👤 שם משתמש</span>
              <span className="profile-value">{currentUser.username}</span>
            </div>
            <div className="profile-info-row">
              <span className="profile-label">📧 אימייל</span>
              <span className="profile-value">{currentUser.email}</span>
            </div>
            <div className="profile-info-row">
              <span className="profile-label">🔑 תפקיד</span>
              <span className="profile-value">
                {currentUser.role === "admin" ? "מנהל מערכת" : "משתמש רגיל"}
              </span>
            </div>
          </div>

          <div className="profile-actions">
            {currentUser.role === "admin" && (
              <Link to="/admin" className="btn btn-accent btn-lg" style={{ width: "100%" }}>
                🛠️ ניהול מוצרים
              </Link>
            )}
            <Link to="/products" className="btn btn-secondary btn-lg" style={{ width: "100%" }}>
              🛒 המשך קניות
            </Link>
            <button
              className="btn btn-danger btn-lg"
              style={{ width: "100%" }}
              onClick={handleLogout}
            >
              🚪 התנתקות
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
