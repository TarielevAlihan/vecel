import React from "react";
import "./CartModal.css"; 

const CartModal = ({ isOpen, onClose, cartItems, removeFromCart }) => {
  if (!isOpen) return null; 





  
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close" onClick={onClose}>
          ×
        </button>
        <h2>Корзина</h2>
        {cartItems.length === 0 ? (
          <p>Корзина пуста</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={process.env.PUBLIC_URL + item.image}
                alt={item.name}
                className="cart-item-image"
              />

              <div>
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>Удалить</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CartModal;
