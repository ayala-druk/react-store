import React from "react";

function AboutImage() {
  return (
    <div className="about-image-wrapper">
      <img
        src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop"
        alt="הצוות שלנו עובד"
        className="about-image"
      />
      <div className="about-image-badge">
        <span className="about-badge-number">5+</span>
        <span className="about-badge-text">שנות ניסיון</span>
      </div>
    </div>
  );
}

export default AboutImage;
