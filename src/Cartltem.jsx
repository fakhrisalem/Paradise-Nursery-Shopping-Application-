import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CreatSlice';
import './Cartltem.css';

const Cartltem= ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + item.quantity * parseFloat(item.cost.slice(1)), 0).toFixed(2);
  };

  const calculateTotalCost = (item) => {
    return (item.quantity * parseFloat(item.cost.slice(1))).toFixed(2);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    onContinueShopping();
  };

  const handleCheckoutShopping = (e) => {
    e.preventDefault();
    alert('Functionality to be added for future reference');
  };

  return (
    <div className="cart-page">
      <div className="cart-navbar">
        <div className="cart-navbar-brand">
          <div className="luxury">
            <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="Paradise Nursery logo" />
            <a href="https://ioborin22.github.io/coursera-paradise-nursery-shopping-application">
              <div className="tag_home_link">
                <h3>Paradise Nursery</h3>
                <i>Where Green Meets Serenity</i>
              </div>
            </a>
          </div>
        </div>
        <button
          type="button"
          className="cart-navbar-button"
          onClick={onContinueShopping}
          aria-label="Continue shopping"
        >
          Continue shopping
        </button>
      </div>
      <main className="cart-content">
        <h2>Total Cart Amount: ${calculateTotalAmount()}</h2>
        <div className="cart-items-list">
          {cart.map(item => (
            <div className="cart-item" key={item.name}>
              <img className="cart-item-image" src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-cost">{item.cost}</div>
                <div className="cart-item-quantity">
                  <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                  <span className="cart-item-quantity-value">{item.quantity}</span>
                  <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
                </div>
                <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
                <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
              </div>
            </div>
          ))}
           <p className="plant_logo_left">
        <img 
          src="https://i.pinimg.com/originals/27/66/ab/2766ab19e30e26a3dcf20273d3f0faa9.gif" 
          height='50px' 
          width='50px' 
          alt="Plant Logo" 
        />
      </p>
        </div>
        <div className="continue_shopping_btn">
      <button className="get-started-button" onClick={handleContinueShopping}>Continue Shopping</button>
      <br />
          
          <button className="get-started-button1" onClick={handleCheckoutShopping}>Checkout</button>
        </div>
      </main>
    </div>
    
  );
};

export default Cartltem;