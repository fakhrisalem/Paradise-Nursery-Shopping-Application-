import React from 'react';
import './footer.css';

const Footer = ({ onNavigate }) => {
    return (
        <footer className="site-footer">
            <div className="site-footer__content">
                <div className="site-footer__brand">
                    <h2>Paradise Nursery</h2>
                    <p>Bringing nature closer to home with plants for every space.</p>
                </div>

                <nav className="site-footer__links" aria-label="Footer navigation">
                    <h3>Explore</h3>
                    <button type="button" onClick={() => onNavigate('home')}>Home</button>
                    <button type="button" onClick={() => onNavigate('products')}>Products</button>
                    <button type="button" onClick={() => onNavigate('aboutus')}>About us</button>
                    <button type="button" onClick={() => onNavigate('contactus')}>Contact</button>
                </nav>

                <div className="site-footer__contact">
                    <h3>Need help?</h3>
                    <p>Our team is here to help you choose and care for your plants.</p>
                    <button type="button" onClick={() => onNavigate('contactus')}>
                        Get in touch
                    </button>
                </div>
            </div>
            <div className="site-footer__bottom">
                <p>&copy; {new Date().getFullYear()} Paradise Nursery. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;