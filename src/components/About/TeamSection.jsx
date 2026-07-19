import React from "react";

function TeamSection() {
  const team = [
    { name: "יוסי כהן", role: "מייסד ומנכ\"ל", emoji: "👨‍💼" },
    { name: "שירה לוי", role: "מנהלת שיווק", emoji: "👩‍💻" },
    { name: "דוד אברהם", role: "מומחה טכנולוגיה", emoji: "🧑‍🔬" },
    { name: "נועה מזרחי", role: "שירות לקוחות", emoji: "👩‍🎓" },
  ];

  return (
    <section className="team-section">
      <h2 className="section-title">הצוות שלנו</h2>
      <div className="team-grid">
        {team.map((member, index) => (
          <div key={index} className="team-card card">
            <div className="team-avatar">{member.emoji}</div>
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
