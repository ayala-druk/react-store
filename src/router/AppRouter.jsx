import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../components/Home/HomePage";
import AboutPage from "../components/About/AboutPage";
import ProductsPage from "../components/Products/ProductsPage";
import ProductDetailsPage from "../components/ProductDetails/ProductDetailsPage";
import ContactPage from "../components/Contact/ContactPage";
import CartPage from "../components/Cart/CartPage";
import PurchasePage from "../components/Purchase/PurchasePage";
import LoginPage from "../components/Auth/LoginPage";
import RegisterPage from "../components/Auth/RegisterPage";
import UserProfile from "../components/Auth/UserProfile";
import AdminPage from "../components/Admin/AdminPage";

function AppRouter({
  products,
  cart,
  addToCart,
  removeFromCart,
  updateQuantity,
  getCartTotal,
  getCartCount,
  clearCart,
  currentUser,
  login,
  register,
  logout,
  addProduct,
  updateProduct,
  deleteProduct,
}) {
  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage products={products} addToCart={addToCart} />}
      />
      <Route path="/about" element={<AboutPage />} />
      <Route
        path="/products"
        element={<ProductsPage products={products} addToCart={addToCart} />}
      />
      <Route
        path="/products/:id"
        element={<ProductDetailsPage products={products} addToCart={addToCart} />}
      />
      <Route path="/contact" element={<ContactPage />} />
      <Route
        path="/cart"
        element={
          <CartPage
            cart={cart}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
            getCartTotal={getCartTotal}
            getCartCount={getCartCount}
          />
        }
      />
      <Route
        path="/purchase"
        element={
          <PurchasePage
            cart={cart}
            getCartTotal={getCartTotal}
            clearCart={clearCart}
            currentUser={currentUser}
          />
        }
      />
      <Route path="/login" element={<LoginPage login={login} currentUser={currentUser} />} />
      <Route path="/register" element={<RegisterPage register={register} currentUser={currentUser} />} />
      <Route
        path="/profile"
        element={<UserProfile currentUser={currentUser} logout={logout} />}
      />
      <Route
        path="/admin"
        element={
          <AdminPage
            products={products}
            currentUser={currentUser}
            addProduct={addProduct}
            updateProduct={updateProduct}
            deleteProduct={deleteProduct}
          />
        }
      />
    </Routes>
  );
}

export default AppRouter;
