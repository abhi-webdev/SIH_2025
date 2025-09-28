// src/components/PassengerDetails.jsx

import React, { useState } from 'react';

const initialPassenger = { name: '', age: '', gender: 'Male', contact: '', email: '' };

const PassengerDetails = ({ selectedSeats, bus, onContinue }) => {
  const [passengers, setPassengers] = useState(
    selectedSeats.map((seat, index) => ({
      ...initialPassenger,
      id: index,
      seatNumber: seat.seatNumber
    }))
  );
  const [contactInfo, setContactInfo] = useState({ phone: '', email: '' });

  const handlePassengerChange = (id, field, value) => {
    setPassengers(passengers.map(p => 
      p.id === id ? { ...p, [field]: value } : p
    ));
  };
  
  const handleContactChange = (field, value) => {
    setContactInfo(prev => ({ ...prev, [field]: value }));
  };

  const total = selectedSeats.length * bus.price;

  const handleSubmit = (e) => {
    e.preventDefault();
    const allValid = passengers.every(p => p.name && p.age);
    if (allValid && contactInfo.phone && contactInfo.email) {
      onContinue({ passengers, contactInfo, total });
    } else {
      alert("Please fill out all required passenger and contact details.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col h-full bg-light-bg">
        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto p-4">
            
            {/* Passenger Details */}
            <h3 className="text-lg font-bold text-primary-dark mb-4">Passenger Details</h3>
            
            {passengers.map((p, index) => (
                <div key={p.id} className="bg-white p-4 rounded-xl shadow-md mb-4 border border-gray-100">
                    <p className="text-sm font-semibold text-dark-grey mb-3">Passenger {index + 1} (Seat: {p.seatNumber})</p>
                    <div className="space-y-3">
                        <input 
                            type="text" 
                            placeholder="Name" 
                            className="text-input"
                            value={p.name}
                            onChange={(e) => handlePassengerChange(p.id, 'name', e.target.value)}
                        />
                        <div className="flex space-x-4">
                            <input 
                                type="number" 
                                placeholder="Age" 
                                className="text-input w-1/3"
                                value={p.age}
                                onChange={(e) => handlePassengerChange(p.id, 'age', e.target.value)}
                            />
                            <select
                                className="text-input flex-1"
                                value={p.gender}
                                onChange={(e) => handlePassengerChange(p.id, 'gender', e.target.value)}
                            >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                </div>
            ))}
            
            {/* Contact Details */}
            <h3 className="text-lg font-bold text-primary-dark mb-4 mt-6">Contact Details</h3>
             <div className="bg-white p-4 rounded-xl shadow-md mb-4 border border-gray-100 space-y-3">
                <input 
                    type="email" 
                    placeholder="Email" 
                    className="text-input"
                    value={contactInfo.email}
                    onChange={(e) => handleContactChange('email', e.target.value)}
                    required
                />
                 <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="text-input"
                    value={contactInfo.phone}
                    onChange={(e) => handleContactChange('phone', e.target.value)}
                    required
                />
            </div>

            {/* Boarding/Deboarding Points (Simplified for brevity) */}
            <h3 className="text-lg font-bold text-primary-dark mb-4 mt-6">Points</h3>
            <div className="bg-white p-4 rounded-xl shadow-md mb-4 border border-gray-100">
                <p className="text-sm text-dark-grey">Boarding: <span className="font-semibold">Chennai CMBT @ 9:00AM</span></p>
                <p className="text-sm text-dark-grey">Deboarding: <span className="font-semibold">Bangalore BSS @ 9:00PM</span></p>
            </div>
            
            <div className="h-20"></div> {/* Spacer */}
        </div>
        
        {/* Sticky Footer */}
        <div className="sticky bottom-0 w-full bg-white p-4 shadow-2xl border-t border-gray-200">
            <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-dark-grey">Total: ₹{total}</span>
                <button 
                    type="submit"
                    className="py-3 px-8 text-white font-semibold rounded-lg bg-accent-green hover:bg-green-600 transition-colors"
                >
                    Continue to pay
                </button>
            </div>
        </div>
    </form>
  );
};

export default PassengerDetails;