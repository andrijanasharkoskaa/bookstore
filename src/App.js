import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import Catalog from "./components/Catalog";
import Info from "./components/Info";
import Homepage from "./components/Homepage";
import About from "./components/About";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <ul className="menu">
        <Link to="home" className="list-item">
          Home
        </Link>

        <Link to="catalog" className="list-item">
          Catalog
        </Link>

        <Link to="reviews" className="list-item">
          Reviews
        </Link>

        <Link to="about" className="list-item">
          About
        </Link>
      </ul>

      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/reviews" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
