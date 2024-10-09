import React, { useState } from 'react';

function Booking({ selectedDog }) {
  const [hours, setHours] = useState(1);
  const [date, setDate] = useState('');

  if (!selectedDog) return <div>Please select a dog first.</div>;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the booking submission
    console.log(`Booked ${selectedDog.name} for ${hours} hours on ${date}`);
    alert(`Thank you for booking ${selectedDog.name}! We'll contact you soon to confirm your reservation.`);
  };

  return (
    <div className="booking">
      <h2>Rent {selectedDog.name}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <label>
          Number of Hours:
          <input
            type="number"
            min="1"
            max="12"
            value={hours}
            onChange={(e) => setHours(parseInt(e.target.value))}
            required
          />
        </label>
        <p>Total Cost: ${selectedDog.hourlyRate * hours}</p>
        <button type="submit" className="cta-button">Confirm Rental</button>
      </form>
    </div>
  );
}

export default Booking;