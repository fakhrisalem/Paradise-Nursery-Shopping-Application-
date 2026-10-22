import React from 'react';
import './features.css';

const features = [
    {
        title: 'Customer Satisfaction',
        description: 'You are safe with our satisfaction guarantee.',
        image: 'https://m.media-amazon.com/images/I/91tnz5jRAEL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        imageAlt: 'Healthy plant representing customer satisfaction',
    },
    {
        title: 'Variety of Plants',
        description: 'We have more than 100 varieties of plants.',
        image: 'https://m.media-amazon.com/images/I/61HEXuoSeQL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        imageAlt: 'A selection of plants available in our nursery',
    },
    {
        title: 'Shop Online',
        description: 'Save time, we send your plant to your house.',
        image: 'https://m.media-amazon.com/images/I/81rDAYvrEiL._AC_SX679_.jpg',
        imageAlt: 'Plant ready to be ordered online',
    },
    {
        title: 'Customer Support',
        description: 'Feel free to reach us at 800-234-567.',
        image: 'https://thumbs.dreamstime.com/b/young-beautiful-woman-taking-care-home-plants-table-indoors-young-beautiful-woman-taking-care-home-plants-table-152877907.jpg',
        imageAlt: 'A person caring for houseplants',
    },
    {
        title: 'Plant Care Advice',
        description: 'Get helpful tips to keep your plants thriving.',
        image: 'https://m.media-amazon.com/images/I/71hTpxDGT-L._AC_SX679_.jpg',
        imageAlt: 'Plant and gardening care supplies',
    },
];

const Features = () => (
    <div className="features-container">
        <h2 className="features-title">Our Features</h2>
        <div className="features-grid">
            {features.map((feature) => (
                <article className="feature-card" key={feature.title}>
                    <div className="feature-image-frame">
                        <img src={feature.image} alt={feature.imageAlt} />
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                </article>
            ))}
        </div>
    </div>
);

export default Features;
