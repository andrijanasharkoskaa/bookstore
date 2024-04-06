function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <i class="fa-solid fa-book"></i>
          <span>Bookly</span>
        </div>

        <div className="search-bar">
          <input
            type="search"
            className="input-field"
            placeholder="Search..."
          />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>

        <div className="cart">
          <i class="fa-solid fa-heart"></i>
          <i class="fa-solid fa-cart-shopping"></i>
          <i class="fa-solid fa-user"></i>
        </div>
      </div>

      {/* Main part */}
    </>
  );
}

export default Header;
