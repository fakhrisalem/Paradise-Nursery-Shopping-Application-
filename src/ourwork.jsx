import React from "react";
import "./testimonials.css";

const OurWork = () => (
    <div className="showcase-section">
        <h4 className="section-title">Our Work</h4>
        <div className="image-gallery">
            <div className="image-item">
                <img
                    className="showcase-image"
                    src="https://img.freepik.com/premium-photo/woman-caring-plants-home-spring-day_566707-2254.jpg"
                    alt="Woman caring for plants"
                />
                <div className="image-overlay">Spring Care</div>
            </div>
            <div className="image-item">
                <img
                    className="showcase-image"
                    src="https://thumbs.dreamstime.com/b/family-caring-plants-cute-child-girl-helping-her-mother-to-care-mom-daughter-engaging-gardening-home-happy-spring-246906086.jpg"
                    alt="Family caring for plants"
                />
                <div className="image-overlay">Family Gardening</div>
            </div>
        </div>
    </div>
);

export default OurWork;
