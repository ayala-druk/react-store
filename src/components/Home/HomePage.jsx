import React from "react";
import Hero from "./Hero";
import FeaturedProducts from "./FeaturedProducts";
import Stats from "./Stats";
import Categories from "./Categories";
import "./Home.css";

function HomePage({ products, addToCart }) {
  return (
    <div className="home-page">
      <Hero />
      <Categories />
      <FeaturedProducts products={products} addToCart={addToCart} />
      <Stats />
    </div>
  );
}

export default HomePage;
