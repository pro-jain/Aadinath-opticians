import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const heroImage =
    'https://images.unsplash.com/photo-1492446845049-9c50cc313f00?auto=format&fit=crop&w=1600&q=80';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-left">
                <p className="eyebrow">Since 1998 • Family-run optics</p>
                <h1>Specs that keep your city moving.</h1>
                <p className="subhead">Premium lenses, honest pricing, and fittings by people who care.</p>
                <div className="hero-actions" style={{ textAlign: "center" }}>
                    <Link to="../Pages/store.jsx" className="primary-btn">
                        Explore Now
                    </Link>
                </div>
            </div>
            <div className="hero-right">
                <div className="hero-card">
                    <img src={heroImage} alt="Person wearing sunglasses" />
                    <div className="hero-badge">Free eye-checkup at store</div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
