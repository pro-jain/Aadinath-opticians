import React from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import { NavLink, Link } from 'react-router-dom';

const logoUrl = logo;
const cartUrl = 'https://cdn-icons-png.flaticon.com/512/2331/2331970.png'; // red handbag icon
const navLinks = [
  { to: '/', label: 'Home' },
  { to: '../../Pages/About_Us.jsx', label: 'About Us' },
  { to: '../../Pages/ContactUs.jsx', label: 'Contact Us' },
  { to: '../../Pages/Store.jsx', label: 'Store' },
  {to: '../../Pages/blogs.jsx', label: 'Blogs' },
];

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="nav-logo">
        <img src={logoUrl} alt="Specs logo" />
        <div className="nav-brand">
          <span className="brand-name">Aadinath Opticians</span>
          <span className="brand-tag">Aakho ki dekhbhal, aadinath opticians ke saath</span>
        </div>
      </div>

      <nav>
        <ul className="nav-menu">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} to={link.to} end={link.to === '/'}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="nav-actions">
        <Link to="/login" className="ghost-btn">
          Login
        </Link>
        <Link to="/cart" className="cart-icon">
          <img src={cartUrl} alt="Cart" />
          <span className="nav-cart-count">0</span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
