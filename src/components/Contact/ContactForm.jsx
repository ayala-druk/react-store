import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="contact-form-card card">
      <h2 className="contact-form-title">שלחו לנו הודעה</h2>
      {submitted && (
        <div className="success-message">
          ✓ ההודעה נשלחה בהצלחה! נחזור אליכם בהקדם.
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">שם מלא</label>
            <input
              type="text"
              name="name"
              className="form-input"
              placeholder="הכניסו את שמכם"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">אימייל</label>
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="example@mail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">נושא</label>
          <input
            type="text"
            name="subject"
            className="form-input"
            placeholder="במה נוכל לעזור?"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">הודעה</label>
          <textarea
            name="message"
            className="form-input"
            placeholder="כתבו את ההודעה שלכם כאן..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%" }}>
          שליחה
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
