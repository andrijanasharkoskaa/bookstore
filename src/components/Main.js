import Info from "./Info";
function Main() {
  return (
    <>
      <div className="main">
        <div className="left-part">
          <h1>Up to 75% Off</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            fringilla felis ac nulla fermentum volutpat. Ut enim diam, congue id
            iaculis eu, porta sit amet mauris. Nunc ex mauris, ullamcorper et
            mattis id, consequat vel tortor. Vivamus justo sem, hendrerit vel
            sapien a, tincidunt dignissim dui. Nulla quis lobortis arcu. Donec
            urna augue, iaculis at libero vel, dictum congue mauris. Nam et
            fringilla nisi.
          </p>
          <button className="shop-btn">Shop Now</button>
        </div>
        <div className="right-part">
          <div className="books">
            <img
              src="https://m.media-amazon.com/images/I/81EcXiV-9WL._AC_UF1000,1000_QL80_.jpg"
              alt=""
            />
            <img
              src="https://m.media-amazon.com/images/I/91LUbAcpACL._AC_UF1000,1000_QL80_.jpg"
              alt=""
            />
            <img
              src="https://cdn.kobo.com/book-images/9b641bf6-ae44-4c1e-aa2b-e57ca746eb82/1200/1200/False/the-richest-man-in-babylon-31.jpg"
              alt=""
            />

            <img
              src="https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
