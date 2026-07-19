import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../Products/ProductCard";

function FeaturedProducts({ products, addToCart }) {
  const featured = products.slice(0, 4);

  return (
    <section className="featured-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">מוצרים מובילים</h2>
          <Link to="/products" className="section-link">
            לכל המוצרים ←
          </Link>
        </div>
        <div className="products-grid">
          {featured.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
