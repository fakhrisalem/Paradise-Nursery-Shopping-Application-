
import React from 'react';
import './Landing.css'; 

const Landing = ({ onGetStarted }) => (
  <div className="landing-page">
    <h1>Welcome to Our Store!</h1>
    <button className="get-started-button" onClick={onGetStarted}>
      Get Started
    </button>
  </div>
);

export default Landing;