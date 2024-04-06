import Catalog from "./Catalog";

function Info() {
  return (
    <>
      <div className="info">
        <div className="info-widget">
          <i class="fa-solid fa-truck-fast"></i>
          <p>Free Shipping</p>
        </div>
        <div className="info-widget">
          <i class="fa-solid fa-lock"></i>
          <p>Secure Payment</p>
        </div>
        <div className="info-widget">
          <i class="fa-solid fa-rotate-right"></i>
          <p>Easy Returns</p>
        </div>
        <div className="info-widget">
          <i class="fa-solid fa-headset"></i>
          <p>24/7 Support</p>
        </div>
      </div>

      <Catalog />
    </>
  );
}

export default Info;
