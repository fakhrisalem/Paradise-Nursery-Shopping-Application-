
import React from 'react';
import Features from './features';
import Testimonials from './testimonials';
import OurWork from './ourwork';
import ShopAll from './shopall';
import './home.css';

const Home = ({ onNavigateToProducts }) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', 
        });
    };

    return (
        <div className="home-container">
            <section className="home-hero" aria-label="Paradise Nursery">
                <div className="background-image"></div>
                <div className="content">
                    <div className="landing_content">
                    </div>
                </div>
            </section>

            <section className="home-section">
                <Features />
            </section>

            <div className="home-divider" aria-hidden="true"></div>
            <section className="home-section shopall-container">
                <ShopAll onNavigateToProducts={onNavigateToProducts} />
            </section>

            <div className="home-divider" aria-hidden="true"></div>
            <section className="home-section testimonials-container">
                <Testimonials />
            </section>

            <div className="home-divider" aria-hidden="true"></div>
            <section className="home-section our-work-container">
                <OurWork />
            </section>

            <button 
                className="scroll-to-top" 
                onClick={scrollToTop} 
                aria-label="Scroll to top"
            >
                ↑
            </button>
        </div>
    );
};

export default Home;