import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products, addToCart }) {
  if (products.length === 0) {
    return (
      <div className="empty-state">
        <span className="empty-icon">🔍</span>
        <h3>לא נמצאו מוצרים</h3>
        <p>נסו לשנות את הסינון או לחפש מונח אחר</p>
      </div>
    );
  }

  return (
    <div className="products-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;
