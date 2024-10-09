import React from 'react';
import { Link } from 'react-router-dom';

function DogList({ setSelectedDog }) {
  const dogs = [
    { id: 1, name: 'Buddy', breed: 'Chocolate Lab', hourlyRate: 15 },
    { id: 2, name: 'Max', breed: 'Golden Retriever', hourlyRate: 18 },
    { id: 3, name: 'Luna', breed: 'Husky', hourlyRate: 20 },
    { id: 4, name: 'Bella', breed: 'Poodle', hourlyRate: 22 },
    { id: 5, name: 'Charlie', breed: 'Beagle', hourlyRate: 16 },
  ];

  return (
    <div className="dog-list">
      <h2>Available Dogs</h2>
      <ul>
        {dogs.map((dog) => (
          <li key={dog.id}>
            <Link to={`/dogs/${dog.id}`} onClick={() => setSelectedDog(dog)}>
              <img src={`https://placedog.net/200/200?id=${dog.id}`} alt={dog.name} />
              <h3>{dog.name}</h3>
              <p>{dog.breed}</p>
              <p>${dog.hourlyRate}/hour</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DogList;