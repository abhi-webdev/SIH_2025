// src/features/booking/AddPassengerModal.jsx

import React, { useState } from 'react';
import ModalWrapper from '../../components/ModalWrapper';

const initialPassenger = { name: '', age: '', gender: 'Male' };

const AddPassengerModal = ({ onClose, onSavePassenger, isEditing = false, initialData }) => {
    const [formData, setFormData] = useState(initialData || initialPassenger);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSavePassenger(formData);
        onClose();
    };

    return (
        <ModalWrapper onClose={onClose} title={isEditing ? "Edit Passenger" : "Add Passenger"}>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1">Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Frehnchi, M/24"
                        value={formData.name} 
                        onChange={handleChange} 
                        className="text-input" 
                        required 
                    />
                </div>

                {/* Age and Gender (Side by Side) */}
                <div className="flex gap-4">
                    <div className="w-1/3">
                        <label className="text-sm font-medium text-gray-700 block mb-1">Age</label>
                        <input 
                            type="number" 
                            name="age" 
                            placeholder="24"
                            value={formData.age} 
                            onChange={handleChange} 
                            className="text-input" 
                            required 
                        />
                    </div>
                    <div className="flex-1">
                        <label className="text-sm font-medium text-gray-700 block mb-1">Gender</label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="text-input"
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                </div>

                <div className="pt-4">
                    <button 
                        type="submit" 
                        className="w-full py-3 bg-primary-dark text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition-colors"
                    >
                        {isEditing ? "Save Changes" : "Add"}
                    </button>
                </div>
            </form>
        </ModalWrapper>
    );
};

export default AddPassengerModal;