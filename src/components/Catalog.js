import React, { useState } from "react";
import Book from "./Book";
import CartModal from "../CartModal";

function Catalog() {
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  function addToCart(book) {
    setCartItems([...cartItems, book]);
  }

  function toggleModal() {
    setShowModal(!showModal);
  }

  const books = [
    {
      url: "https://m.media-amazon.com/images/I/81-dhgnwqEL._AC_UF1000,1000_QL80_.jpg",
      title: "Romanov Sisters",
      price: 20,
    },
    {
      url: "https://m.media-amazon.com/images/I/41SvK+T3eYL._SL500_.jpg",
      title: "The Lord of the Rings: The Two Towers",
      price: 50,
    },
    {
      url: "https://www.cbc.ca/strombo/content/images/worst-book-covers-tarzan.jpg",
      title: "Tarzan",
      price: 30,
    },
    {
      url: "https://images.ctfassets.net/usf1vwtuqyxm/24YWmI4UcyoMwj7wdKrEcL/374de1941927db12bd844fb197eab11f/English_Harry_Potter_3_Epub_9781781100233.jpg?w=914&q=70&fm=jpg",
      title: "Harry Potter and the Prisoner of Azkaban",
      price: 70,
    },
  ];

  return (
    <>
      <div className="catalog-title">
        <div className="line"></div>
        <h3 className="title"> Our Catalog</h3>
        <div className="line"></div>
      </div>
      <div className="catalog">
        {books.map((book, index) => (
          <Book
            key={index}
            url={book.url}
            title={book.title}
            price={book.price}
            addToCart={() => addToCart(book)}
          />
        ))}
      </div>
      {showModal && <CartModal cartItems={cartItems} onClose={toggleModal} />}
    </>
  );
}

export default Catalog;
