import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";

function LoginPage({ login, currentUser }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // אם המשתמש כבר מחובר - הפניה לפרופיל
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!username || !password) {
      setError("יש למלא את כל השדות");
      return;
    }

    const result = login(username, password);
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
          <div className="auth-icon">🔐</div>
          <h1 className="auth-title">התחברות</h1>
          <p className="auth-subtitle">ברוכים השבים! הכניסו את הפרטים שלכם</p>

          {error && <div className="auth-error">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">שם משתמש</label>
              <input
                type="text"
                className="form-input"
                placeholder="הכניסו שם משתמש"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">סיסמה</label>
              <input
                type="password"
                className="form-input"
                placeholder="הכניסו סיסמה"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%" }}>
              התחברות
            </button>
          </form>

          <div className="auth-footer">
            <p>
              אין לכם חשבון?{" "}
              <Link to="/register" className="auth-link">
                הרשמו עכשיו
              </Link>
            </p>
          </div>

          <div className="auth-demo">
            <p className="auth-demo-title">פרטי התחברות לדוגמה:</p>
            <p>מנהל: admin / admin123</p>
            <p>משתמש: user1 / user123</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
