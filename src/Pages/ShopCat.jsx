import React, { useContext, useMemo } from 'react';
import './CSS/ShopCat.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';

const categoryBanners = {
  sunglasses:
    'https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=1600&q=80',
  men: 'https://images.unsplash.com/photo-1509942774464-05c76c8e1f5c?auto=format&fit=crop&w=1600&q=80',
  women:
    'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1600&q=80',
};

const ShopCat = ({ category }) => {
  const { products } = useContext(ShopContext);

  const filteredProducts = useMemo(
    () => products.filter((product) => product.category === category),
    [products, category]
  );

  return (
    <section className="shop-cat">
      <div className="shop-cat-hero">
        <img className="shop-cat-banner" src={categoryBanners[category]} alt={`${category} banner`} />
        <div className="shop-cat-overlay">
          <p className="eyebrow">Curated for you</p>
          <h2>{category === 'men' ? "Men's frames" : category === 'women' ? "Women's picks" : 'Sunglasses'}</h2>
          <p className="subcopy">Premium lenses with scratch guard and UV400 protection.</p>
        </div>
      </div>

      <div className="shop-cat-header">
        <p>
          Showing <strong>{filteredProducts.length}</strong> products in {category}.
        </p>
        <div className="pill">Free shipping over ₹999</div>
      </div>

      <div className="shop-cat-grid">
        {filteredProducts.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="empty">More styles coming soon. Reach us for custom orders.</div>
      )}
    </section>
  );
};

export default ShopCat;
