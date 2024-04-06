function Catalog() {
  return (
    <>
      <div className="catalog-title">
        <div className="line"></div>
        <h3 className="title"> Our Catalog</h3>
        <div className="line"></div>
      </div>
      <div className="catalog">
        <div className="book-widget">
          <img src="https://m.media-amazon.com/images/I/81-dhgnwqEL._AC_UF1000,1000_QL80_.jpg" />
          <p className="book-title">Romanov Sisters</p>
          <p>$20</p>
          <button className="add-cart">Add To Cart</button>
        </div>
        <div className="book-widget">
          <img src="https://m.media-amazon.com/images/I/41SvK+T3eYL._SL500_.jpg" />
          <p className="book-title">The Lord of the Rings: The Two Towers</p>
          <p>$50</p>
          <button className="add-cart">Add To Cart</button>
        </div>
        <div className="book-widget">
          <img src="https://www.cbc.ca/strombo/content/images/worst-book-covers-tarzan.jpg" />
          <p className="book-title">Tarzan</p>
          <p>$20</p>
          <button className="add-cart">Add To Cart</button>
        </div>
        <div className="book-widget">
          <img src="https://images.ctfassets.net/usf1vwtuqyxm/24YWmI4UcyoMwj7wdKrEcL/374de1941927db12bd844fb197eab11f/English_Harry_Potter_3_Epub_9781781100233.jpg?w=914&q=70&fm=jpg" />
          <p className="book-title">Harry Potter and the Prisoner of Azkaban</p>
          <p>$20</p>
          <button className="add-cart">Add To Cart</button>
        </div>
      </div>
    </>
  );
}

export default Catalog;
