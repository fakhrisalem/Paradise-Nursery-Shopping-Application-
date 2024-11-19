
import React, { useEffect, useState } from 'react';
import './features.css'; 

const Features = () => {
    const [visibleImages, setVisibleImages] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisibleImages(prev => [...prev, 1]);
        }, 2000); 

        const timer2 = setTimeout(() => {
            setVisibleImages(prev => [...prev, 2]);
        }, 3000); 

        const timer3 = setTimeout(() => {
            setVisibleImages(prev => [...prev, 3]);
        }, 4000); 

        const timer4 = setTimeout(() => {
            setVisibleImages(prev => [...prev, 4]);
        }, 4000); 

        const timer5 = setTimeout(() => {
            setVisibleImages(prev => [...prev, 5]);
        }, 5000); 

        return () => {
            clearTimeout(timer);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
            clearTimeout(timer5);
        };
    }, []);

    return (
        <div className="features-container">
            <h1 className="features-title">Our Features</h1>
            <div className="features-grid">
                <div className="feature-card">
                    {visibleImages.includes(1) && (
                        <img 
                            src="https://m.media-amazon.com/images/I/91tnz5jRAEL.__AC_SX300_SY300_QL70_FMwebp_.jpg" 
                            alt="Feature 1" 
                        />
                    )}
                    <h3>Customer Satisfaction</h3>
                    <p>You are safe with our satisfaction guarantee.</p>
                </div>
                <div className="feature-card">
                    {visibleImages.includes(2) && (
                        <img 
                            src="https://m.media-amazon.com/images/I/61HEXuoSeQL.__AC_SX300_SY300_QL70_FMwebp_.jpg" 
                            alt="Feature 2" 
                        />
                    )}
                    <h3>Variety of Plants</h3>
                    <p>We have more than 100 varieties of plants.</p>
                </div>
                <div className="feature-card">
                    {visibleImages.includes(3) && (
                        <img 
                            src="https://m.media-amazon.com/images/I/81rDAYvrEiL._AC_SX679_.jpg" 
                            alt="Feature 3" 
                        />
                    )}
                    <h3>Shop Online</h3>
                    <p>Save time, we send you your plant to your house.</p>
                </div>
                <div className="feature-card">
                    {visibleImages.includes(4) && (
                        <img 
                            src="https://thumbs.dreamstime.com/b/young-beautiful-woman-taking-care-home-plants-table-indoors-young-beautiful-woman-taking-care-home-plants-table-152877907.jpg" 
                            alt="Feature 4" 
                        />
                    )}
                    <h3>Customer Support</h3>
                    <p>Feel free to reach us at 800-234-567.</p>
                </div>
                <div className="feature-card">
                    {visibleImages.includes(5) && (
                        <img 
                            src="https://m.media-amazon.com/images/I/71hTpxDGT-L._AC_SX679_.jpg" 
                            alt="Feature 5" 
                        />
                    )}
                    <h3>Customer Support</h3>
                    <p>Feel free to reach us at 800-234-567.</p>
                </div>
            </div>
        </div>
    );
};

export default Features;