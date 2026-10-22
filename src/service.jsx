import React from "react";
import "./service.css";

const Service = () => (
  <section className="service-container" aria-labelledby="service-title">
    <div className="service-image-frame">
      <img
        src="https://i.pinimg.com/originals/4d/ed/34/4ded3483aa11970395144db5091df695.gif"
        alt="A peaceful collection of green plants"
      />
      <span className="service-image-label">Grow with confidence</span>
    </div>

    <div className="service-content">
      <p className="service-eyebrow">A little more green, every day</p>
      <h2 id="service-title">Services for Plant Lovers</h2>
      <p className="service-description">
        Whether you are choosing your first houseplant or growing a leafy
        collection, Paradise Nursery is here to make plant care feel simple
        and enjoyable.
      </p>

      <ul className="service-highlights">
        <li>
          <span className="service-highlight-icon" aria-hidden="true">01</span>
          <span>
            <strong>Plants for every space</strong>
            <span>Find a plant that feels right at home.</span>
          </span>
        </li>
        <li>
          <span className="service-highlight-icon" aria-hidden="true">02</span>
          <span>
            <strong>Helpful care guidance</strong>
            <span>Get friendly tips for keeping plants happy.</span>
          </span>
        </li>
        <li>
          <span className="service-highlight-icon" aria-hidden="true">03</span>
          <span>
            <strong>Support along the way</strong>
            <span>We are here when you have plant questions.</span>
          </span>
        </li>
      </ul>
    </div>
  </section>
);

export default Service;
