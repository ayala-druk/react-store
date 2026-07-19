import React from "react";
import AboutInfo from "./AboutInfo";
import AboutImage from "./AboutImage";
import TeamSection from "./TeamSection";
import Values from "./Values";
import "./About.css";

function AboutPage() {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">אודות TechStore</h1>
        <p className="page-subtitle">הסיפור שלנו, הערכים שלנו והצוות שמאחורי הקלעים</p>

        <div className="about-hero-section">
          <AboutInfo />
          <AboutImage />
        </div>

        <Values />
        <TeamSection />
      </div>
    </div>
  );
}

export default AboutPage;
