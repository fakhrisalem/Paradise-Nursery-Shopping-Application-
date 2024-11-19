import React from 'react';
import ContactUs from './contactus';

const ParentComponent = () => {
    return (
        <div className="parent-container">
            <ContactUs />
            <img className="outside-image left" src="https://m.media-amazon.com/images/I/81wKbHG0dfL.__AC_SX300_SY300_QL70_FMwebp_.jpg" alt="Left" />
            <img className="outside-image right" src="https://m.media-amazon.com/images/I/71Oi+bq0WPL._AC_SY300_SX300_.jpg" alt="Right" />
        </div>
    );
};

export default ParentComponent;