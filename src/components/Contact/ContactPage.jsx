import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactMap from "./ContactMap";
import "./Contact.css";

function ContactPage() {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">צור קשר</h1>
        <p className="page-subtitle">נשמח לשמוע מכם! מלאו את הטופס ונחזור אליכם בהקדם</p>

        <div className="contact-layout">
          <div className="contact-form-wrapper">
            <ContactForm />
          </div>
          <div className="contact-sidebar">
            <ContactInfo />
            <ContactMap />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
