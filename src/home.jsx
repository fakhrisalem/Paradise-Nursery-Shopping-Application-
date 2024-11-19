
import React from 'react';
import Features from './features';
import Testimonials from './testimonials'; 
import ShopAll from './shopall'; 
import './home.css'; 

const Home = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', 
        });
    };

    return (
        <div className="home-container">
            <div className="background-image"></div>
            
            <div className="content">
                <div className="landing_content">
                   
                </div>
            </div>

            <div className="spacer"></div>
            <div className="features-container">
                <Features />
            </div>

            <div className="spacer"></div>
            <div className="shopall-container">
                <ShopAll />
            </div>

            <div className="spacer">
                <div className="testimonials-container">
                    <Testimonials />
                </div>
            </div>

            {}
            <button 
                className="scroll-to-top" 
                onClick={scrollToTop} 
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '40px',
                    color: 'white',
                }}
            >
                ↑
            </button>
        </div>
    );
};

export default Home;