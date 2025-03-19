import React, { useState } from 'react';
import './register-pet.css';

const RegisterPet = () => {
    const [petName, setPetName] = useState('');
    const [petType, setPetType] = useState('dog');
    const [petBreed, setPetBreed] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Registering pet:', { petName, petType, petBreed });
    };

    return (
        <div className="register-pet-container">
            <h1>Register Your Pet for Mating</h1>
            <form onSubmit={handleSubmit}>
                <label>Pet Name:</label>
                <input type="text" value={petName} onChange={(e) => setPetName(e.target.value)} required />

                <label>Pet Type:</label>
                <select value={petType} onChange={(e) => setPetType(e.target.value)}>
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                </select>

                <label>Breed:</label>
                <input type="text" value={petBreed} onChange={(e) => setPetBreed(e.target.value)} required />

                <button type="submit">Register Pet</button>
            </form>
        </div>
    );
};

export default RegisterPet;
