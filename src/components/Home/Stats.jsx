import React from "react";

function Stats() {
  const stats = [
    { number: "10K+", label: "לקוחות מרוצים" },
    { number: "500+", label: "מוצרים במלאי" },
    { number: "24/7", label: "שירות לקוחות" },
    { number: "100%", label: "אחריות מלאה" },
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
