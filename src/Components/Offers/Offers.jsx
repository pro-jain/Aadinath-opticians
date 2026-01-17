import React from 'react';
import { Link } from 'react-router-dom';
import './Offers.css';

const offerImage =
  'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?auto=format&fit=crop&w=1200&q=80';

const Offers = () => {
  return (
    <section className="offers">
      <div className="offer-copy">
        <p className="eyebrow">This week only</p>
        <h2>50% off blue-light protection.</h2>
        <p className="subcopy">
          Perfect for late-night work and long drives. Add premium blue-light lenses to any frame and save big.
        </p>
        <div className="offer-actions">
          <Link to="/women" className="primary-btn">
            Shop women
          </Link>
          <Link to="/sunglasses" className="ghost-btn">
            Explore sunglasses
          </Link>
        </div>
      </div>

      <div className="offer-visual">
        <div className="offer-card">
          <img src={offerImage} alt="Customer wearing stylish spectacles" />
          <div className="offer-stamp">Limited seats for free eye test</div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
