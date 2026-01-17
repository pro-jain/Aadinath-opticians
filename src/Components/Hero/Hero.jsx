import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const heroImage =
    '../Assets/hero.jpeg';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-left">
                <p className="subhead">Premium lenses, honest pricing, and fittings by people who care.</p>
                <div className="hero-actions">
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
