import React, { useState, useEffect } from 'react';
import './adopt.css';

const petData = {
  1: {
    name: 'Max',
    breed: 'Golden Retriever',
    age: '2 years',
    gender: 'Male',
    location: 'San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&q=80',
    vaccinations: [
      { name: 'Rabies', date: '2023-05-15' },
      { name: 'DHPP', date: '2023-04-20' },
      { name: 'Bordetella', date: '2023-06-01' }
    ],
    traits: ['Friendly', 'Energetic', 'Good with kids', 'Trained', 'Playful'],
    biography: 'Max is a loving and energetic Golden Retriever...',
    contact: {
      phone: '(555) 123-4567',
      email: 'adopt@ggashelter.org',
      hours: '9:00 AM - 5:00 PM',
      location: '123 Shelter Lane, San Francisco, CA'
    }
  }
};

const Adopt = () => {
  const [selectedPet, setSelectedPet] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleViewDetails = (petId) => {
    setSelectedPet(petData[petId]);
    setModalOpen(true);
  };

  return (
    <div className="adoption-container">
      <h1>Available Pets</h1>
      <div className="pets-grid">
        {Object.keys(petData).map((id) => (
          <div key={id} className="pet-card">
            <img src={petData[id].image} alt={petData[id].name} />
            <h3>{petData[id].name}</h3>
            <p>{petData[id].breed}</p>
            <p>{petData[id].age} • {petData[id].gender}</p>
            <button onClick={() => handleViewDetails(id)}>View Details</button>
          </div>
        ))}
      </div>
      {modalOpen && selectedPet && (
        <div className="modal">
          <div className="modal-content">
            <button onClick={() => setModalOpen(false)}>Close</button>
            <h2>{selectedPet.name}</h2>
            <img src={selectedPet.image} alt={selectedPet.name} />
            <p>{selectedPet.biography}</p>
            <p>Contact: {selectedPet.contact.phone} | {selectedPet.contact.email}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Adopt;
