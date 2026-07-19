import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminProductForm from "./AdminProductForm";
import AdminProductList from "./AdminProductList";
import "./Admin.css";

function AdminPage({ products, currentUser, addProduct, updateProduct, deleteProduct }) {
  const [editingProduct, setEditingProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // אם לא מחובר או לא מנהל
  if (!currentUser || currentUser.role !== "admin") {
    return (
      <div className="page">
        <div className="container">
          <div className="auth-card card">
            <div className="auth-icon">🔒</div>
            <h2>אין הרשאה</h2>
            <p className="auth-subtitle">
              רק מנהלים יכולים לגשת לדף זה
            </p>
            <Link to="/login" className="btn btn-primary btn-lg" style={{ width: "100%" }}>
              התחברות כמנהל
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSave = (productData) => {
    if (editingProduct) {
      updateProduct(editingProduct.id, productData);
    } else {
      addProduct(productData);
    }
    setEditingProduct(null);
    setShowForm(false);
  };

  const handleCancel = () => {
    setEditingProduct(null);
    setShowForm(false);
  };

  const handleDelete = (productId) => {
    if (window.confirm("האם אתה בטוח שברצונך למחוק מוצר זה?")) {
      deleteProduct(productId);
    }
  };

  return (
    <div className="page">
      <div className="container">
        <div className="admin-header">
          <div>
            <h1 className="page-title">🛠️ ניהול מוצרים</h1>
            <p className="page-subtitle">
              {products.length} מוצרים במערכת
            </p>
          </div>
          {!showForm && (
            <button
              className="btn btn-primary btn-lg"
              onClick={() => {
                setEditingProduct(null);
                setShowForm(true);
              }}
            >
              + הוסף מוצר חדש
            </button>
          )}
        </div>

        {showForm && (
          <AdminProductForm
            product={editingProduct}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        )}

        <AdminProductList
          products={products}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default AdminPage;
