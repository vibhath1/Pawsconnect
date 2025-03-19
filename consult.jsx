import React, { useState } from 'react';
import './consult.css';

const vets = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    credentials: 'DVM, DACVIM',
    clinic: 'Pawsome Pet Care Center',
    location: 'Downtown Pet Hospital',
    fee: '$75',
    availability: ['9:00 AM', '11:00 AM', '2:00 PM']
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    credentials: 'DVM, DABVP',
    clinic: 'Happy Tails Veterinary Clinic',
    location: 'Sunset Pet Care',
    fee: '$85',
    availability: ['10:00 AM', '1:00 PM', '4:00 PM']
  }
];

const Consult = () => {
  const [selectedVet, setSelectedVet] = useState(null);
  const [step, setStep] = useState(1);

  return (
    <div className="consultation-container">
      {step === 1 && (
        <div>
          <h2>Pet Information</h2>
          <button onClick={() => setStep(2)}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2>Available Veterinarians</h2>
          {vets.map((vet) => (
            <div key={vet.id} onClick={() => setSelectedVet(vet)} className={selectedVet?.id === vet.id ? 'selected' : ''}>
              <h3>{vet.name}</h3>
              <p>{vet.credentials}</p>
            </div>
          ))}
          <button onClick={() => setStep(1)}>Back</button>
          <button onClick={() => setStep(3)}>Next</button>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2>Confirm Consultation</h2>
          {selectedVet && <p>Consulting with {selectedVet.name}</p>}
          <button onClick={() => setStep(2)}>Back</button>
          <button onClick={() => alert('Consultation Scheduled!')}>Confirm</button>
        </div>
      )}
    </div>
  );
};

export default Consult;
