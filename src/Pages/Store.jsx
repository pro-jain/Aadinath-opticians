import React, { useContext, useMemo, useState } from 'react';
import './CSS/store.css';
import Item from '../Components/Item/Item';
import { ShopContext } from '../Context/ShopContext';

const audienceOptions = [
  { value: 'all', label: 'All' },
  { value: 'men', label: 'Men' },
  { value: 'women', label: 'Women' },
  { value: 'kids', label: 'Kids' },
];

const frameOptions = [
  { value: 'all', label: 'All types' },
  { value: 'sunglasses', label: 'Sunglasses' },
  { value: 'power', label: 'Power frames' },
];

const Store = () => {
  const { products } = useContext(ShopContext);
  const [audience, setAudience] = useState('all');
  const [frameType, setFrameType] = useState('all');

  const filtered = useMemo(
    () =>
      products.filter(
        (p) =>
          (audience === 'all' || p.target === audience) &&
          (frameType === 'all' || p.frameType === frameType)
      ),
    [products, audience, frameType]
  );

  return (
    <section className="store-page">
      <div className="store-hero">
        <div>
          <p className="eyebrow">Browse our catalogue</p>
          <h1>Find your perfect pair</h1>
          <p className="subcopy">Filter by audience and frame type to see matching products.</p>
        </div>
        <div className="store-pill">Free blue-light upgrade on power frames</div>
      </div>

      <div className="store-filters">
        <div className="filter-group">
          <span className="filter-label">Audience</span>
          <div className="filter-options">
            {audienceOptions.map((opt) => (
              <button
                key={opt.value}
                className={opt.value === audience ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setAudience(opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="filter-group">
          <span className="filter-label">Category</span>
          <div className="filter-options">
            {frameOptions.map((opt) => (
              <button
                key={opt.value}
                className={opt.value === frameType ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setFrameType(opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="store-meta">
        Showing <strong>{filtered.length}</strong> products
      </div>

      <div className="store-grid">
        {filtered.map((item) => (
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

      {filtered.length === 0 && <div className="empty">No products match that combo yet.</div>}
    </section>
  );
};

export default Store;
