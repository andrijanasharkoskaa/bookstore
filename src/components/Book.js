import React from "react";

function Book({ url, title, price }) {
  return (
    <div className="book-widget">
      <img src={url} alt={title} />
      <p className="book-title">{title}</p>
      <p>${price}</p>
      <button className="add-cart">Add To Cart</button>
    </div>
  );
}

export default Book;
