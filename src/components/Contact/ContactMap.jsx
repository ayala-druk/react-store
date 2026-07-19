import React from "react";

function ContactMap() {
  return (
    <div className="contact-map-card card">
      <h3 className="contact-info-title">המיקום שלנו</h3>
      <div className="map-placeholder">
        <span className="map-pin">📍</span>
        <p>רחוב הרצל 50, תל אביב</p>
      </div>
    </div>
  );
}

export default ContactMap;
