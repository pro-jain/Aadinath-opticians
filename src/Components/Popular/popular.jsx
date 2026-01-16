import React from 'react'
import './popular.css';
import Item from '../Item/Item';
import { popularProducts } from '../Assets/data';

const Popular = () => {
  return (
    <section className="popular">
      <div className="section-header">
        <h1>Popular Picks</h1>
        <p>Best-sellers your customers already love.</p>
      </div>
      <div className="popular-grid">
        {popularProducts.map((product) => (
          <Item
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            new_price={product.new_price}
            old_price={product.old_price}
          />
        ))}
      </div>
    </section>
  );
};

export default Popular;
