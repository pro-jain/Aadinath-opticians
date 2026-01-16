import React from 'react';
import './NewCollection.css';
import Item from '../Item/Item';
import { newCollectionProducts } from '../Assets/data';

const NewCollection = () => {
  return (
    <section className="new-collections">
      <div className="section-header">
        <h1>New Arrivals</h1>
        <p>Fresh styles curated for this season.</p>
      </div>
      <div className="collections-grid">
        {newCollectionProducts.map((item) => (
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
    </section>
  );
};

export default NewCollection;
