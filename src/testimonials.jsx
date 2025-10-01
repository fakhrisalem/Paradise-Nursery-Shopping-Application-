import React, { useEffect, useState } from 'react';
import "./testimonials.css";

const testimonialsData = [
    {
        img: "https://iv1.lisimg.com/image/14942009/740full-jessica-clements.jpg",
        quote: "Quis ipsum suspendisse ultrices gravida risus comodo viverra maecenas.",
        author: "- Tori Buckey, CEO Twitter"
    },
    {
        img: "https://i.pinimg.com/736x/ec/c1/16/ecc116b5aab92919efc6f63f0959fb6d.jpg",
        quote: "Ipsum dolor sit amet conseto Quis ipsum suspendisse ultrices gravida.",
        author: "- Margaret Roth | CEO Waze"
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
        }, 4000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="page-container">
            <div className="testimonials-section">
                <h4 className="section-title">Testimonials</h4>
                <div className="testimonial-content">
                    <div className="testimonial-image">
                        <img src={testimonialsData[currentIndex].img} alt="Testimonial author" />
                    </div>
                    <div className="testimonial-text">
                         <p>"{testimonialsData[currentIndex].quote}"</p>
                         <p className="author">{testimonialsData[currentIndex].author}</p>
                    </div>
                </div>
            </div>

            <div className="showcase-section">
                <h4 className="section-title">Our Work</h4>
                <div className="image-gallery">
                    <div className="image-item">
                        <img className="showcase-image" src="https://img.freepik.com/premium-photo/woman-caring-plants-home-spring-day_566707-2254.jpg" alt="Woman caring for plants" />
                        <div className="image-overlay">Spring Care</div>
                    </div>
                    <div className="image-item">
                        <img className="showcase-image" src="https://thumbs.dreamstime.com/b/family-caring-plants-cute-child-girl-helping-her-mother-to-care-mom-daughter-engaging-gardening-home-happy-spring-246906086.jpg" alt="Family caring for plants" />
                        <div className="image-overlay">Family Gardening</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;

