
import React from 'react';
import './InfoCard.css'; 

const InfoCard = ({ image, title, description }) => {
    return (
        <div className="info-card">
            <img src={image} alt={title} />
            <div className="info-text">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;