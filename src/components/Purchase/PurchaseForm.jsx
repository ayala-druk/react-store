import React, { useState } from "react";

function PurchaseForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="purchase-form-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="purchase-section card">
          <h3 className="purchase-section-title">📦 פרטי משלוח</h3>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">שם מלא</label>
              <input
                type="text"
                name="fullName"
                className="form-input"
                placeholder="ישראל ישראלי"
                value={formData.fullName}
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
            <label className="form-label">טלפון</label>
            <input
              type="tel"
              name="phone"
              className="form-input"
              placeholder="050-1234567"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">כתובת</label>
            <input
              type="text"
              name="address"
              className="form-input"
              placeholder="רחוב ומספר בית"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">עיר</label>
              <input
                type="text"
                name="city"
                className="form-input"
                placeholder="תל אביב"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">מיקוד</label>
              <input
                type="text"
                name="zipCode"
                className="form-input"
                placeholder="1234567"
                value={formData.zipCode}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="purchase-section card">
          <h3 className="purchase-section-title">💳 פרטי תשלום</h3>
          <div className="form-group">
            <label className="form-label">מספר כרטיס</label>
            <input
              type="text"
              name="cardNumber"
              className="form-input"
              placeholder="1234 5678 9012 3456"
              value={formData.cardNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">תוקף</label>
              <input
                type="text"
                name="expiry"
                className="form-input"
                placeholder="MM/YY"
                value={formData.expiry}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">CVV</label>
              <input
                type="text"
                name="cvv"
                className="form-input"
                placeholder="123"
                value={formData.cvv}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-accent btn-lg" style={{ width: "100%" }}>
          אישור ותשלום ←
        </button>
      </form>
    </div>
  );
}

export default PurchaseForm;
