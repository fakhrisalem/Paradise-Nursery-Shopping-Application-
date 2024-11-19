import React, { useState } from 'react';
import { Provider } from 'react-redux';
import Landing from './Landing';
import Home from './home';
import AboutUs from './AboutUs';
import Products from './productList';
import ContactUs from './contactus';
import Cart from './Cartltem';
import store from './store';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <Provider store={store}>
      <div className="app-container">
        <header className="header">
          <nav className="navbar">
            {currentPage !== 'landing' && (
              <>
                <button onClick={() => handleNavigation('home')}>Home</button>
                <button onClick={() => handleNavigation('aboutus')}>About Us</button>
                <button onClick={() => handleNavigation('products')}>Products</button>
                <button onClick={() => handleNavigation('contactus')}>Contact</button>
              </>
            )}
          </nav>
        </header>

        {currentPage === 'landing' && (
          <Landing onGetStarted={() => handleNavigation('home')} />
        )}
        {currentPage === 'home' && <Home />}
        {currentPage === 'aboutus' && <AboutUs />}
        {currentPage === 'products' && <Products onViewCartClick={() => handleNavigation('cart')} />}
        {currentPage === 'cart' && <Cart onContinueShopping={() => handleNavigation('products')} />}
        {currentPage === 'contactus' && <ContactUs />}

        <footer className="footer">
          <p>&copy; 2024 Moo Plants. All rights reserved.</p>
        </footer>
      </div>
    </Provider>
  );
}

export default App;