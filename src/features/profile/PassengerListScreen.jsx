// src/features/profile/PassengerListScreen.jsx

import React, { useState } from 'react';

const SavedPassenger = ({ passenger }) => (
    <div className="bg-white p-4 rounded-xl shadow-md mb-3 border border-gray-100">
        <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-dark-grey">{passenger.name}</h3>
            <span className="text-sm text-gray-500">{passenger.age} Years, {passenger.gender}</span>
            <button className="text-primary-dark hover:text-accent-green">
                {/* Edit Icon */}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
            </button>
        </div>
    </div>
);

const PassengerListScreen = () => {
    const [passengers, setPassengers] = useState([
        { id: 1, name: 'Kapil Saini', age: 24, gender: 'Male' },
        { id: 2, name: 'Vidhi Sharma', age: 22, gender: 'Female' },
    ]);

    // Example form state for adding a new passenger
    const [newPassenger, setNewPassenger] = useState({ name: '', age: '', gender: 'Male' });

    const handleAddPassenger = () => {
        if (newPassenger.name && newPassenger.age) {
            setPassengers([...passengers, { ...newPassenger, id: passengers.length + 1 }]);
            setNewPassenger({ name: '', age: '', gender: 'Male' });
        }
    };

    return (
        <div className="flex flex-col h-full bg-light-bg p-4 overflow-y-auto">
            
            <button 
                className="flex items-center justify-center py-3 mb-4 text-primary-dark font-semibold border-2 border-primary-dark rounded-lg hover:bg-primary-dark hover:text-white transition-colors"
                onClick={() => alert("Open Add Passenger Modal/Form")}
            >
                {/* Plus Icon */}
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                Add Passenger
            </button>
            
            <h2 className="text-lg font-bold text-dark-grey mb-3">Saved Passengers ({passengers.length})</h2>
            
            <div className="flex-1 space-y-3">
                {passengers.map(p => <SavedPassenger key={p.id} passenger={p} />)}
                
                {/* Quick Add Form Section (Mimics the bottom form in the UI) */}
                <div className="bg-white p-4 rounded-xl shadow-md space-y-3">
                    <h3 className="text-base font-semibold text-primary-dark">Add New Quick</h3>
                     <input 
                        type="text" 
                        placeholder="Name" 
                        className="text-input" 
                        value={newPassenger.name} 
                        onChange={(e) => setNewPassenger({...newPassenger, name: e.target.value})}
                    />
                    <div className="flex space-x-4">
                         <input 
                            type="number" 
                            placeholder="Age" 
                            className="text-input w-1/3"
                            value={newPassenger.age} 
                            onChange={(e) => setNewPassenger({...newPassenger, age: e.target.value})}
                        />
                        <select
                            className="text-input flex-1"
                            value={newPassenger.gender}
                            onChange={(e) => setNewPassenger({...newPassenger, gender: e.target.value})}
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <button 
                        className="w-full py-3 bg-accent-green text-white font-semibold rounded-lg mt-2"
                        onClick={handleAddPassenger}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PassengerListScreen;