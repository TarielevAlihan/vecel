import React from 'react';
import './Header.css'; 

function Header({ onOpenCart }) {
  return (
    <header className="header">
      {}
      <img src="/images/logo.png" alt="Game Store Logo" className="logo" />

      {}
      <h1>Game Store</h1>

      {}
      <button onClick={onOpenCart} className="cart-button">
        🛒 Корзина
      </button>
    </header>
  );
}

export default Header;
