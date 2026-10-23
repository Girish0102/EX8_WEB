
function ProductCard({ product, onAdd }) {
  return (
    <article className="product-card">
      <div className={`product-image ${product.color}`}>
        <span>{product.image}</span>
        <label>FEATURED</label>
      </div>

      <div className="product-info">
        <p>{product.category}</p>
        <h3>{product.name}</h3>
        <div className="product-bottom">
          <strong>₹{product.price.toLocaleString("en-IN")}</strong>
          <button onClick={() => onAdd(product)} aria-label={`Add ${product.name} to cart`}>+</button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
