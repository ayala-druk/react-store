import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product, addToCart }) {
  const { id, name, price, image, category, rating, inStock } = product;

  return (
    <div className="product-card card">
      <Link to={`/products/${id}`} className="product-card-image-link">
        <img src={image} alt={name} className="product-card-image" />
        {!inStock && <span className="out-of-stock-badge">אזל מהמלאי</span>}
      </Link>
      <div className="product-card-body">
        <span className="product-card-category">{category}</span>
        <Link to={`/products/${id}`}>
          <h3 className="product-card-name">{name}</h3>
        </Link>
        <div className="product-card-rating">
          <span className="rating-stars">{"⭐".repeat(Math.round(rating))}</span>
          <span className="rating-value">{rating}</span>
        </div>
        <div className="product-card-footer">
          <span className="product-card-price">₪{price}</span>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => addToCart(product)}
            disabled={!inStock}
          >
            {inStock ? "הוסף לעגלה" : "אזל"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
