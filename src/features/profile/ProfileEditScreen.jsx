// src/features/profile/ProfileEditScreen.jsx

import React, { useState } from 'react';

const ProfileEditScreen = ({ user, onSave }) => {
    const [formData, setFormData] = useState({ 
        name: user.name, 
        mobile: '987-654-3210', // Mock Data
        email: 'user@example.com', // Mock Data
        age: user.age,
        gender: user.gender 
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, send formData to API
        alert(`Profile updated for ${formData.name}`);
        onSave(formData); // Go back to main profile view
    };

    return (
        <div className="flex flex-col h-full bg-light-bg p-4 overflow-y-auto">
            <div className="bg-white p-6 rounded-xl shadow-md text-center mb-6">
                {/* Profile Photo Placeholder */}
                <img 
                    src="https://via.placeholder.com/80" 
                    alt="Profile"
                    className="w-20 h-20 rounded-full border-2 border-primary-dark mx-auto mb-3"
                />
                
                <form onSubmit={handleSubmit} className="space-y-4 text-left mt-4">
                    {/* Name */}
                    <div>
                        <label className="text-sm text-gray-500 block mb-1">Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" />
                    </div>
                    {/* Mobile Number */}
                    <div>
                        <label className="text-sm text-gray-500 block mb-1">Mobile Number</label>
                        <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" />
                    </div>
                    {/* Email */}
                    <div>
                        <label className="text-sm text-gray-500 block mb-1">E-mail</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" />
                    </div>
                    {/* Age and Gender (Simplified) */}
                    <div className="flex gap-4">
                        <div className="w-1/3">
                            <label className="text-sm text-gray-500 block mb-1">Age</label>
                            <input type="number" name="age" value={formData.age} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg" />
                        </div>
                        <div className="flex-1 pt-2">
                            <label className="text-sm text-gray-500 block mb-1">Gender</label>
                            <div className="flex items-center gap-4 h-full">
                                <label><input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} className="mr-1" /> Male</label>
                                <label><input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} className="mr-1" /> Female</label>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="w-full mt-4 py-3 bg-primary-dark text-white font-semibold rounded-lg hover:bg-gray-700">
                        Update
                    </button>
                </form>
            </div>
            <div className="h-10"></div>
        </div>
    );
};

export default ProfileEditScreen;