import React from "react";

function ProductFilter({ categories, selectedCategory, onCategoryChange, searchQuery, onSearchChange }) {
  return (
    <div className="product-filter">
      <div className="filter-search">
        <input
          type="text"
          className="form-input"
          placeholder="חיפוש מוצרים..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div className="filter-categories">
        <button
          className={`filter-btn ${selectedCategory === "הכל" ? "active" : ""}`}
          onClick={() => onCategoryChange("הכל")}
        >
          הכל
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => onCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductFilter;
