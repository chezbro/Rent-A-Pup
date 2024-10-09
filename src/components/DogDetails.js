import React from 'react';
import { Link } from 'react-router-dom';

function DogDetails({ selectedDog }) {
  if (!selectedDog) return <div>Loading...</div>;

  return (
    <div className="dog-details">
      <h2>{selectedDog.name}</h2>
      <img src={`https://placedog.net/400/300?id=${selectedDog.id}`} alt={selectedDog.name} />
      <p>Breed: {selectedDog.breed}</p>
      <p>Hourly Rate: ${selectedDog.hourlyRate}</p>
      <Link to="/booking" className="cta-button">Rent Now</Link>
    </div>
  );
}

export default DogDetails;