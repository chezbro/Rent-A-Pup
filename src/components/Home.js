import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h2>Welcome to Rent-A-Pup</h2>
        <p className="tagline">Your Daily Dose of Canine Companionship</p>
        <img src="https://placedog.net/800/400?random" alt="Happy dogs" className="hero-image" />
        <p className="description">
          Experience the joy of having a furry friend without the long-term commitment. 
          Rent a dog for a day and create unforgettable memories!
        </p>
        <Link to="/dogs" className="cta-button">Find Your Perfect Pup</Link>
      </section>

      <section className="features">
        <h3>Why Rent-A-Pup?</h3>
        <div className="feature-list">
          <div className="feature-item">
            <img src="https://placedog.net/200/200?id=1" alt="Variety of dogs" />
            <h4>Wide Selection</h4>
            <p>Choose from a variety of breeds and personalities</p>
          </div>
          <div className="feature-item">
            <img src="https://placedog.net/200/200?id=2" alt="Flexible rental" />
            <h4>Flexible Rentals</h4>
            <p>Rent for a few hours or a full day</p>
          </div>
          <div className="feature-item">
            <img src="https://placedog.net/200/200?id=3" alt="Health checked dogs" />
            <h4>Health Checked</h4>
            <p>All our dogs are vaccinated and well-cared for</p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h3>How It Works</h3>
        <ol>
          <li>Browse our selection of available dogs</li>
          <li>Choose your perfect furry companion</li>
          <li>Select your rental duration</li>
          <li>Meet your new friend and enjoy your time together!</li>
        </ol>
        <Link to="/dogs" className="secondary-button">Get Started</Link>
      </section>
    </div>
  );
}

export default Home;