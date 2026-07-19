import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function RegisterPage({ register, currentUser }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  // אם כבר מחובר
  if (currentUser) {
    return (
      <div className="page">
        <div className="container">
          <div className="auth-card card">
            <div className="auth-icon">👤</div>
            <h2>כבר מחובר/ת!</h2>
            <p className="auth-subtitle">שלום {currentUser.fullName || currentUser.username}</p>
            <Link to="/profile" className="btn btn-primary btn-lg" style={{ width: "100%" }}>
              מעבר לפרופיל
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.fullName || !formData.username || !formData.email || !formData.password) {
      setError("יש למלא את כל השדות");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("הסיסמאות אינן תואמות");
      return;
    }

    if (formData.password.length < 4) {
      setError("הסיסמה חייבת להכיל לפחות 4 תווים");
      return;
    }

    const result = register({
      fullName: formData.fullName,
      username: formData.username,
      email: formData.email,
      password: formData.password,
    });

    if (result.success) {
      navigate("/");
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="page">
      <div className="container">
        <div className="auth-card card">
          <div className="auth-icon">✨</div>
          <h1 className="auth-title">הרשמה</h1>
          <p className="auth-subtitle">צרו חשבון חדש ותתחילו לקנות</p>

          {error && <div className="auth-error">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">שם מלא</label>
              <input
                type="text"
                name="fullName"
                className="form-input"
                placeholder="ישראל ישראלי"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">שם משתמש</label>
              <input
                type="text"
                name="username"
                className="form-input"
                placeholder="בחרו שם משתמש"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">אימייל</label>
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="example@mail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">סיסמה</label>
              <input
                type="password"
                name="password"
                className="form-input"
                placeholder="לפחות 4 תווים"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">אישור סיסמה</label>
              <input
                type="password"
                name="confirmPassword"
                className="form-input"
                placeholder="הכניסו שוב את הסיסמה"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%" }}>
              יצירת חשבון
            </button>
          </form>

          <div className="auth-footer">
            <p>
              כבר יש לכם חשבון?{" "}
              <Link to="/login" className="auth-link">
                התחברו כאן
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
