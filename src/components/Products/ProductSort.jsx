import React from "react";

function ProductSort({ sortBy, onSortChange }) {
  return (
    <div className="product-sort">
      <label className="sort-label">מיון לפי:</label>
      <select
        className="form-input sort-select"
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="default">ברירת מחדל</option>
        <option value="price-low">מחיר: נמוך לגבוה</option>
        <option value="price-high">מחיר: גבוה לנמוך</option>
        <option value="rating">דירוג</option>
      </select>
    </div>
  );
}

export default ProductSort;
