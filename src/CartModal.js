import React from "react";

function CartModal({ cartItems, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>

        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <span>{item.title}</span>
              <span>${item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CartModal;
