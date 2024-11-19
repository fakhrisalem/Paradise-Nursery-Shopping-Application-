import React from "react";
import "./AboutUs.css";
import Service from './service';
function AboutUs() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    <div className="about-us-container">
      <h1 className="about-us-heading">
        Welcome to Paradise Nursery, where green meets serenity!
      </h1>
    
      <p className="about-us-content">
        At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission is to provide a wide range of high-quality plants that not only enhance the beauty of your surroundings but also contribute to a healthier and more sustainable lifestyle. From air-purifying plants to aromatic fragrant ones, we have something for every plant enthusiast.

        Our team of experts is dedicated to ensuring that each plant meets our strict standards of quality and care. Whether you're a seasoned gardener or just starting your green journey, we're here to support you every step of the way. Feel free to explore our collection, ask questions, and let us help you find the perfect plant for your home or office.

        Join us in our mission to create a greener, healthier world. Visit Paradise Nursery today and experience the beauty of nature right at your doorstep.
      </p>

      <p className="plant_logo_left">
        <img 
          src="https://i.pinimg.com/originals/7c/cd/e6/7ccde6a93c911570c1457e1325df22f2.gif" 
          height='50px' 
          width='50px' 
          alt="Plant Logo" 
        />
      </p>
     

      <p className="plant_logo_right">
        <img 
          src="https://i.pinimg.com/originals/ee/34/9f/ee349f7a8f7bf015c886d9efe673a3ec.gif" 
          height='50px' 
          width='50px' 
          alt="Plant Logo" 
        />
      </p>
      <div className="service-container">
                    <Service />
                </div>
                <p className="plant_logo_left">
        <img 
          src="https://i.pinimg.com/originals/70/de/93/70de934a0dc1173355f6667c428bed76.gif" 
          height='50px' 
          width='50px' 
          alt="Plant Logo" 
        />
      </p>

      {}
      <button 
        className="scroll-to-top" 
        onClick={scrollToTop} 
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '40px',
          color: 'white',
        }}
      >
        ↑
      </button>
    </div>
  );
}

export default AboutUs;