import React from "react";
import { Link } from "react-router-dom";

function Categories() {
  const categories = [
    { icon: "🎧", name: "אוזניות", color: "#dbeafe" },
    { icon: "⌚", name: "שעונים", color: "#fef3c7" },
    { icon: "⌨️", name: "מקלדות", color: "#d1fae5" },
    { icon: "🖱️", name: "עכברים", color: "#ede9fe" },
    { icon: "🔊", name: "רמקולים", color: "#fee2e2" },
    { icon: "💡", name: "תאורה", color: "#fef9c3" },
  ];

  return (
    <section className="categories-section">
      <div className="container">
        <h2 className="section-title">קטגוריות</h2>
        <div className="categories-grid">
          {categories.map((cat) => (
            <Link
              to="/products"
              key={cat.name}
              className="category-card"
              style={{ backgroundColor: cat.color }}
            >
              <span className="category-icon">{cat.icon}</span>
              <span className="category-name">{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
