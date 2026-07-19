import React, { useState } from "react";
import ProductList from "./ProductList";
import ProductFilter from "./ProductFilter";
import ProductSort from "./ProductSort";
import "./Products.css";

function ProductsPage({ products, addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState("הכל");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");

  // חילוץ קטגוריות ייחודיות
  const categories = [...new Set(products.map((p) => p.category))];

  // סינון לפי קטגוריה וחיפוש
  let filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "הכל" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // מיון
  if (sortBy === "price-low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">המוצרים שלנו</h1>
        <p className="page-subtitle">
          {filteredProducts.length} מוצרים נמצאו
        </p>

        <div className="products-controls">
          <ProductFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
          <ProductSort sortBy={sortBy} onSortChange={setSortBy} />
        </div>

        <ProductList products={filteredProducts} addToCart={addToCart} />
      </div>
    </div>
  );
}

export default ProductsPage;
