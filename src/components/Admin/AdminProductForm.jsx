import React, { useState, useEffect } from "react";

function AdminProductForm({ product, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: "",
    inStock: true,
  });

  // אם יש מוצר לעריכה - מילוי הטופס
  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        description: product.description,
        price: product.price.toString(),
        image: product.image,
        category: product.category,
        inStock: product.inStock,
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...formData,
      price: parseFloat(formData.price),
    });
  };

  return (
    <div className="admin-form card">
      <h2 className="admin-form-title">
        {product ? "✏️ עריכת מוצר" : "➕ הוספת מוצר חדש"}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label">שם המוצר</label>
            <input
              type="text"
              name="name"
              className="form-input"
              placeholder="שם המוצר"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">קטגוריה</label>
            <input
              type="text"
              name="category"
              className="form-input"
              placeholder="לדוגמה: אוזניות"
              value={formData.category}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">תיאור</label>
          <textarea
            name="description"
            className="form-input"
            placeholder="תיאור המוצר..."
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label">מחיר (₪)</label>
            <input
              type="number"
              name="price"
              className="form-input"
              placeholder="0"
              min="0"
              step="0.01"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">קישור לתמונה</label>
            <input
              type="url"
              name="image"
              className="form-input"
              placeholder="https://..."
              value={formData.image}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label className="admin-checkbox">
            <input
              type="checkbox"
              name="inStock"
              checked={formData.inStock}
              onChange={handleChange}
            />
            <span>המוצר במלאי</span>
          </label>
        </div>

        {formData.image && (
          <div className="admin-preview">
            <p className="form-label">תצוגה מקדימה:</p>
            <img src={formData.image} alt="תצוגה מקדימה" className="admin-preview-image" />
          </div>
        )}

        <div className="admin-form-actions">
          <button type="submit" className="btn btn-success btn-lg">
            {product ? "💾 שמירת שינויים" : "➕ הוסף מוצר"}
          </button>
          <button type="button" className="btn btn-secondary btn-lg" onClick={onCancel}>
            ביטול
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminProductForm;
