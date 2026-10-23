
import { useState } from "react";
import ProductCard from "./components/ProductCard";
import "./App.css";

const products = [
  { id: 1, name: "Wireless Headphones", category: "Audio", price: 2499, image: "🎧", color: "purple" },
  { id: 2, name: "Smart Watch", category: "Gadgets", price: 1899, image: "⌚", color: "pink" },
  { id: 3, name: "Wireless Earbuds", category: "Audio", price: 1299, image: "🎵", color: "blue" },
  { id: 4, name: "Travel Backpack", category: "Accessories", price: 999, image: "🎒", color: "yellow" },
  { id: 5, name: "Digital Camera", category: "Gadgets", price: 4599, image: "📷", color: "pink" },
  { id: 6, name: "Bluetooth Speaker", category: "Audio", price: 1599, image: "🔊", color: "purple" }
];

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [dark, setDark] = useState(false);
  const [message, setMessage] = useState("");

  const categories = ["All", "Audio", "Gadgets", "Accessories"];

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || product.category === category)
    );
  });

  function addToCart(product) {
    setCart([...cart, product]);
    setMessage(product.name + " added to cart!");
  }

  return (
    <div className={dark ? "app dark" : "app"}>
      <header className="navbar">
        <a className="logo" href="#home">nova<span>mart.</span></a>

        <nav>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
        </nav>

        <div className="nav-buttons">
          <button className="theme-btn" onClick={() => setDark(!dark)}>
            {dark ? "☀️ Light" : "🌙 Dark"}
          </button>
          <button
            className="cart-btn"
            onClick={() => setMessage("You have " + cart.length + " item(s) in your cart. Total: ₹" + cart.reduce((sum, p) => sum + p.price, 0).toLocaleString("en-IN"))}
          >
            🛒 Cart ({cart.length})
          </button>
        </div>
      </header>

      <main id="home" className="container">
        <section className="hero">
          <div>
            <span className="tagline">YOUR STYLE, YOUR CHOICE</span>
            <h1>Find your next<br /><span>favourite thing.</span></h1>
            <p>Discover cool gadgets and everyday essentials at prices you'll love.</p>
            <a className="shop-btn" href="#products">Shop collection ↗</a>
          </div>
          <div className="hero-art">
            <div className="hero-circle">🛍️</div>
            <span className="sparkle">✦</span>
            <div className="offer">Special finds<br /><strong>Just for you!</strong></div>
          </div>
        </section>

        <section className="stats">
          <div><span>📦</span><p>Products</p><h2>{products.length}+</h2></div>
          <div><span>🏷️</span><p>Categories</p><h2>{categories.length - 1}</h2></div>
          <div><span>🛒</span><p>Cart items</p><h2>{cart.length}</h2></div>
          <div><span>💜</span><p>Our promise</p><h2>Quality</h2></div>
        </section>

        <section id="products" className="products-section">
          <div className="section-heading">
            <div>
              <span className="tagline">HANDPICKED FOR YOU</span>
              <h2>Explore products <span>✦</span></h2>
              <p>Everyday favourites, all in one place.</p>
            </div>
            <input
              className="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="🔍 Search products..."
            />
          </div>

          <div className="categories">
            {categories.map((item) => (
              <button
                key={item}
                className={category === item ? "category active" : "category"}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAdd={addToCart}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p className="empty">No products found. Try another search.</p>
          )}
        </section>

        <section id="about" className="about">
          <h2>A little something for everyone 💜</h2>
          <p>Discover useful products, simple shopping and everyday happiness.</p>
        </section>

        {message && (
          <div className="toast" role="status">
            {message}
            <button onClick={() => setMessage("")}>×</button>
          </div>
        )}
      </main>

      <footer>
        <a className="logo" href="#home">nova<span>mart.</span></a>
        <p>Made with 💜 for everyday living</p>
        <span>© 2026 NovaMart</span>
      </footer>
    </div>
  );
}

export default App;
