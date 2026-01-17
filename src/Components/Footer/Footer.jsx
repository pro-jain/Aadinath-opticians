import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img
            src="https://www.kindpng.com/picc/m/24-248253_glasses-logo-png-transparent-png.png"
            alt="Glasses logo"
          />
          <div>
            <p className="brand-name">Adinath Opticians</p>
            <p className="brand-tag">Family-run specs boutique since 1998</p>
          </div>
        </div>

        <ul className="footer-links">
          <li>Home</li>
          <li>Frames</li>
          <li>Eye test</li>
          <li>Contact</li>
        </ul>

        <div className="footer-social">
          <a href="https://instagram.com" aria-label="Instagram" className="social-pill">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 72 72" fill="currentColor">
              <path d="M36 19.8c5.3 0 5.9 0 8 .1 2 .1 3.1.4 3.8.7.9.3 1.5.7 2.2 1.4.7.7 1.1 1.3 1.4 2.2.3.7.6 1.8.7 3.8.1 2.1.1 2.7.1 8s0 5.9-.1 8c-.1 2-.4 3.1-.7 3.8-.3.9-.7 1.5-1.4 2.2-.7.7-1.3 1.1-2.2 1.4-.7.3-1.8.6-3.8.7-2.1.1-2.7.1-8 .1s-5.9 0-8-.1c-2-.1-3.1-.4-3.8-.7-.9-.3-1.5-.7-2.2-1.4-.7-.7-1.1-1.3-1.4-2.2-.3-.7-.6-1.8-.7-3.8-.1-2.1-.1-2.7-.1-8s0-5.9.1-8c.1-2 .4-3.1.7-3.8.3-.9.7-1.5 1.4-2.2.7-.7 1.3-1.1 2.2-1.4.7-.3 1.8-.6 3.8-.7 2.1-.1 2.7-.1 8-.1z" />
              <path d="M36 29.3c-3.7 0-6.7 3-6.7 6.7s3 6.7 6.7 6.7 6.7-3 6.7-6.7-3-6.7-6.7-6.7zm0 10.9c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2-1.9 4.2-4.2 4.2z" />
              <circle cx="44.5" cy="27.5" r="1.5" />
            </svg>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Adinath Opticians. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
