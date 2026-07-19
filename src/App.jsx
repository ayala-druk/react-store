import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Home/Footer";
import AppRouter from "./router/AppRouter";
import productsData from "./data/products";
import defaultUsers from "./data/users";
import "./App.css";

function App() {
  // ===== מידע מוצרים (Products Data in App) =====
  const [products, setProducts] = useState(productsData);

  // ===== מידע עגלה (Cart Data in App) =====
  const [cart, setCart] = useState([]);

  // ===== מידע משתמשים (Users Data) =====
  const [users, setUsers] = useState(defaultUsers);
  const [currentUser, setCurrentUser] = useState(null);

  // ===== פונקציות עגלה =====

  // הוספת מוצר לעגלה
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // הסרת מוצר מהעגלה
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  // עדכון כמות מוצר בעגלה
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // ספירת מוצרים בעגלה
  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // סכום כולל של העגלה
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // ניקוי העגלה
  const clearCart = () => {
    setCart([]);
  };

  // ===== פונקציות משתמשים =====

  // התחברות
  const login = (username, password) => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      setCurrentUser(user);
      return { success: true, user };
    }
    return { success: false, message: "שם משתמש או סיסמה שגויים" };
  };

  // הרשמה
  const register = (userData) => {
    const existingUser = users.find(
      (u) => u.username === userData.username || u.email === userData.email
    );
    if (existingUser) {
      return { success: false, message: "שם משתמש או אימייל כבר קיימים במערכת" };
    }
    const newUser = {
      ...userData,
      id: users.length + 1,
      role: "user",
    };
    setUsers((prev) => [...prev, newUser]);
    setCurrentUser(newUser);
    return { success: true, user: newUser };
  };

  // התנתקות
  const logout = () => {
    setCurrentUser(null);
  };

  // ===== פונקציות מנהל =====

  // הוספת מוצר חדש
  const addProduct = (newProduct) => {
    const product = {
      ...newProduct,
      id: products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1,
      rating: 0,
      inStock: true,
    };
    setProducts((prev) => [...prev, product]);
  };

  // עדכון מוצר
  const updateProduct = (productId, updatedData) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === productId ? { ...p, ...updatedData } : p))
    );
  };

  // מחיקת מוצר
  const deleteProduct = (productId) => {
    setProducts((prev) => prev.filter((p) => p.id !== productId));
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  return (
    <div className="app">
      <Navbar
        cartCount={getCartCount()}
        currentUser={currentUser}
        logout={logout}
      />
      <main className="main-content">
        <AppRouter
          products={products}
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          getCartTotal={getCartTotal}
          getCartCount={getCartCount}
          clearCart={clearCart}
          currentUser={currentUser}
          login={login}
          register={register}
          logout={logout}
          addProduct={addProduct}
          updateProduct={updateProduct}
          deleteProduct={deleteProduct}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
