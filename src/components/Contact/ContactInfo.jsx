import React from "react";

function ContactInfo() {
  const info = [
    { icon: "📍", label: "כתובת", value: "רחוב הרצל 50, תל אביב" },
    { icon: "📞", label: "טלפון", value: "03-1234567" },
    { icon: "📧", label: "אימייל", value: "info@techstore.co.il" },
    { icon: "🕐", label: "שעות פעילות", value: "א-ה 09:00-18:00" },
  ];

  return (
    <div className="contact-info-card card">
      <h3 className="contact-info-title">פרטי התקשרות</h3>
      <div className="contact-info-list">
        {info.map((item, index) => (
          <div key={index} className="contact-info-item">
            <span className="contact-info-icon">{item.icon}</span>
            <div>
              <span className="contact-info-label">{item.label}</span>
              <span className="contact-info-value">{item.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactInfo;
