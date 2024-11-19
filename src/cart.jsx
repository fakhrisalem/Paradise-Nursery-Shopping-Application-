import React from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
    const navigate = useNavigate();

    const handleContinueShopping = () => {
        navigate("/products"); 
    };

    return (
        <div>
            <h1>Your Cart</h1>
            <CartItem onContinueShopping={handleContinueShopping} />
        </div>
    );
};

export default Cart;