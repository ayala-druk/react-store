import React from "react";

function Values() {
  const values = [
    { icon: "🎯", title: "איכות", desc: "רק מוצרים שעוברים בדיקות קפדניות" },
    { icon: "💰", title: "מחיר הוגן", desc: "מחירים תחרותיים ושקופים" },
    { icon: "🚚", title: "משלוח מהיר", desc: "משלוח תוך 1-3 ימי עסקים" },
    { icon: "🛡️", title: "אחריות", desc: "אחריות מלאה על כל המוצרים" },
  ];

  return (
    <section className="values-section">
      <h2 className="section-title">הערכים שלנו</h2>
      <div className="values-grid">
        {values.map((value, index) => (
          <div key={index} className="value-card">
            <span className="value-icon">{value.icon}</span>
            <h3 className="value-title">{value.title}</h3>
            <p className="value-desc">{value.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Values;
