import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetailsPage({ products, addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [addedMessage, setAddedMessage] = useState(false);

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="page">
        <div className="container">
          <div className="empty-state">
            <span className="empty-icon">❌</span>
            <h3>המוצר לא נמצא</h3>
            <p>המוצר שחיפשת אינו קיים</p>
            <Link to="/products" className="btn btn-primary" style={{ marginTop: "20px" }}>
              חזרה למוצרים
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAddedMessage(true);
    setTimeout(() => setAddedMessage(false), 2000);
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="page">
      <div className="container">
        <button className="back-link" onClick={() => navigate(-1)}>
          → חזרה
        </button>

        <div className="product-details">
          <div className="product-details-image-wrapper">
            <img
              src={product.image}
              alt={product.name}
              className="product-details-image"
            />
            {!product.inStock && (
              <div className="out-of-stock-overlay">אזל מהמלאי</div>
            )}
          </div>

          <div className="product-details-info">
            <span className="badge badge-primary">{product.category}</span>
            <h1 className="product-details-name">{product.name}</h1>

            <div className="product-details-rating">
              <span className="rating-stars">
                {"⭐".repeat(Math.round(product.rating))}
              </span>
              <span className="rating-value">{product.rating} / 5</span>
            </div>

            <p className="product-details-desc">{product.description}</p>

            <div className="product-details-price">₪{product.price}</div>

            <div className="product-details-status">
              {product.inStock ? (
                <span className="badge badge-success">במלאי ✓</span>
              ) : (
                <span className="badge badge-danger">אזל מהמלאי</span>
              )}
            </div>

            {product.inStock && (
              <div className="product-details-actions">
                <div className="quantity-control">
                  <button
                    className="qty-btn"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    −
                  </button>
                  <span className="qty-value">{quantity}</span>
                  <button
                    className="qty-btn"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <button className="btn btn-primary btn-lg" onClick={handleAddToCart}>
                  הוסף לעגלה — ₪{product.price * quantity}
                </button>
              </div>
            )}

            {addedMessage && (
              <div className="added-message">
                ✓ המוצר נוסף לעגלה בהצלחה!
              </div>
            )}
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section className="related-section">
            <h2 className="section-title">מוצרים דומים</h2>
            <div className="related-grid">
              {relatedProducts.map((rp) => (
                <Link to={`/products/${rp.id}`} key={rp.id} className="related-card card">
                  <img src={rp.image} alt={rp.name} className="related-image" />
                  <div className="related-info">
                    <h4>{rp.name}</h4>
                    <span className="product-card-price">₪{rp.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default ProductDetailsPage;
