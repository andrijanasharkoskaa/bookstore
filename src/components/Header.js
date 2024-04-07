import React, { useState } from "react";
import CartModal from "./CartModal";

function Header() {
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  function addToCartFromHeader(item) {
    setCartItems([...cartItems, item]);
  }

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <>
      <div className="header">
        <div className="logo">
          <i className="fa-solid fa-book"></i>
          <span>Bookly</span>
        </div>

        <div className="search-bar">
          <input
            type="search"
            className="input-field"
            placeholder="Search..."
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>

        <div className="cart">
          <i className="fa-solid fa-heart"></i>
          <i
            className="fa-solid fa-cart-shopping"
            onClick={toggleModal}
            style={{ cursor: "pointer" }}
          ></i>
          {cartItems.length > 0 && (
            <div className="cart-counter">{cartItems.length}</div>
          )}
          <i className="fa-solid fa-user"></i>
        </div>
      </div>
      {showModal && <CartModal cartItems={cartItems} onClose={toggleModal} />}
    </>
  );
}

export default Header;
