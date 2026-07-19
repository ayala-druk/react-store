import React from "react";

function SocialLinks() {
  const socials = [
    { name: "Facebook", icon: "📘", url: "#" },
    { name: "Instagram", icon: "📸", url: "#" },
    { name: "Twitter", icon: "🐦", url: "#" },
    { name: "YouTube", icon: "▶️", url: "#" },
  ];

  return (
    <div className="social-links-card card">
      <h3 className="contact-info-title">עקבו אחרינו</h3>
      <div className="social-links-grid">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            className="social-link"
            title={social.name}
          >
            <span className="social-icon">{social.icon}</span>
            <span className="social-name">{social.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default SocialLinks;
