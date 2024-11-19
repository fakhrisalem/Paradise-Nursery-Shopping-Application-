
import React from 'react';
import CartItem from './CartItem';

const ParentComponent = () => {
    const handleContinueShopping = () => {
      
        console.log("Navigating to shopping page...");
     
    };

    return (
        <CartItem onContinueShopping={handleContinueShopping} />
    );
};

export default ParentComponent;