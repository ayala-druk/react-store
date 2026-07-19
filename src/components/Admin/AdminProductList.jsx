import React from "react";

function AdminProductList({ products, onEdit, onDelete }) {
  return (
    <div className="admin-products">
      <h2 className="admin-section-title">רשימת מוצרים</h2>
      <div className="admin-table-wrapper">
        <table className="admin-table">
          <thead>
            <tr>
              <th>תמונה</th>
              <th>שם</th>
              <th>קטגוריה</th>
              <th>מחיר</th>
              <th>דירוג</th>
              <th>מלאי</th>
              <th>פעולות</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="admin-table-image"
                  />
                </td>
                <td className="admin-table-name">{product.name}</td>
                <td>
                  <span className="badge badge-primary">{product.category}</span>
                </td>
                <td className="admin-table-price">₪{product.price}</td>
                <td>⭐ {product.rating}</td>
                <td>
                  {product.inStock ? (
                    <span className="badge badge-success">במלאי</span>
                  ) : (
                    <span className="badge badge-danger">אזל</span>
                  )}
                </td>
                <td>
                  <div className="admin-actions">
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => onEdit(product)}
                    >
                      ✏️ עריכה
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => onDelete(product.id)}
                    >
                      🗑️ מחיקה
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminProductList;
