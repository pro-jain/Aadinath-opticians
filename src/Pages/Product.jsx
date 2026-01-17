import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

const Product = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const product = products.find((item) => String(item.id) === String(productId));

  if (!product) {
    return <div className="page">We could not find that product.</div>;
  }

  return (
    <section className="product-page">
      <div className="product-media">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-info">
        <p className="eyebrow">In stock • Ships in 24h</p>
        <h1>{product.name}</h1>
        <p className="subcopy">{product.description}</p>

        <div className="price-row">
          <span className="price-new">₹ {product.new_price}</span>
          <span className="price-old">₹ {product.old_price}</span>
        </div>

        <ul className="feature-list">
          <li>Scratch-resistant UV400 lenses</li>
          <li>Free nose-pad and temple adjustment</li>
          <li>1-year coating warranty</li>
        </ul>

        <div className="product-actions">
          <button className="primary-btn">Add to cart</button>
          <button className="ghost-btn">Book eye test</button>
        </div>
      </div>
    </section>
  );
};

export default Product;
