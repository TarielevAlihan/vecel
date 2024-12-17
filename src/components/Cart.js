import React, { useState } from 'react';
import './Cart.css'; 

const Cart = ({ items, onClose, removeFromCart }) => {
  const [address, setAddress] = useState(""); // Адрес доставки

  // Подсчет общей стоимости корзины
  const getTotalPrice = () => {
    return items.reduce((total, game) => total + game.price, 0);
  };

  // Обработчик покупки
  const handlePurchase = (e) => {
    e.preventDefault();
    if (items.length === 0) {
      alert("Корзина пуста! Добавьте товары перед покупкой.");
    } else {
      alert(`Спасибо за покупку! Товары будут доставлены по адресу: ${address}`);
      setAddress(""); // Очистка адреса
      onClose(); // Закрыть корзину
    }
  };

  return (
    <div className="cart-modal">
      <h2>Корзина</h2>
      {items.length > 0 ? (
        <>
          <ul>
            {items.map((game, index) => (
              <li key={index}>
                {game.name} - ${game.price}
                <button onClick={() => removeFromCart(game.id)}>Удалить</button>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h3>Общая стоимость: ${getTotalPrice()}</h3>
          </div>

          {}
          <form onSubmit={handlePurchase}>
            <label>
              Адрес доставки:
              <input
                type="text"
                placeholder="Введите ваш адрес"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </label>
            <button type="submit">Купить</button>
          </form>
        </>
      ) : (
        <p>Корзина пуста</p>
      )}
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
};

export default Cart;
