// src/features/auth/SetupScreen.jsx (Optimized with Tailwind)

import React, { useState } from 'react';
// Path confirmed as correct for the new structure:
import LogoComponent from '../../components/LogoComponent'; 
import '../../App.css'; 

const SetupScreen = ({ onSetupComplete, onSkip }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: 'Male', 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Account Information Saved:', formData);
    onSetupComplete();
  };

  return (
    // Replaced inline style with Tailwind classes
    <div className="p-8 bg-white h-full flex flex-col"> 
      <LogoComponent />
      
      {/* Replaced inline style with Tailwind classes */}
      <div className="text-center"> 
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Enter your information</h2>
        <p className="text-sm text-gray-500 mb-10">Fill up your personal information for seamless experience</p>
      </div>

      {/* Main form structure using flex and spacing utilities */}
      <form onSubmit={handleSubmit} className="flex flex-col flex-grow">
        
        {/* Name Input */}
        <div className="mb-5">
          <label htmlFor="name" className="text-sm font-medium text-gray-700 block mb-1">Name</label>
          <input id="name" name="name" type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-dark focus:border-primary-dark" placeholder="Eddy Kim" value={formData.name} onChange={handleChange} required />
        </div>
        
        {/* E-mail Input */}
        <div className="mb-5">
          <label htmlFor="email" className="text-sm font-medium text-gray-700 block mb-1">E-mail</label>
          <input id="email" name="email" type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-dark focus:border-primary-dark" placeholder="eddy.kim@email.kr" value={formData.email} onChange={handleChange} required />
        </div>

        {/* Age and Gender (Side by Side) */}
        {/* Replaced gap: '20px' with gap-5 and removed inline flex styling */}
        <div className="flex gap-5 mb-10"> 
          <div className="flex-1">
            <label htmlFor="age" className="text-sm font-medium text-gray-700 block mb-1">Age</label>
            <input id="age" name="age" type="number" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primary-dark focus:border-primary-dark" placeholder="29" value={formData.age} onChange={handleChange} min="18" max="100" required />
          </div>

          <div className="flex-1">
            <label className="text-sm font-medium text-gray-700 block mb-1">Gender</label>
            {/* Replaced inline flex styling with Tailwind classes */}
            <div className="flex gap-4 h-full items-center pt-1">
              <label className="flex items-center text-sm cursor-pointer">
                <input 
                  type="radio" 
                  name="gender" 
                  value="Male" 
                  checked={formData.gender === 'Male'} 
                  onChange={handleChange} 
                  className="mr-1 text-primary-dark focus:ring-primary-dark"
                /> 
                ♂ Male
              </label>
              <label className="flex items-center text-sm cursor-pointer">
                <input 
                  type="radio" 
                  name="gender" 
                  value="Female" 
                  checked={formData.gender === 'Female'} 
                  onChange={handleChange} 
                  className="mr-1 text-primary-dark focus:ring-primary-dark"
                /> 
                ♀ Female
              </label>
            </div>
          </div>
        </div>

        {/* Skip and Save Buttons */}
        {/* Replaced inline style with auto margin and center alignment */}
        <div className="mt-auto text-center"> 
            <button 
                type="button" 
                onClick={onSkip} 
                className="bg-transparent border-none text-gray-500 text-sm mb-3 cursor-pointer hover:text-gray-700"
            >
                Skip
            </button>
            <button type="submit" className="w-full py-3 bg-primary-dark text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition-colors">
                Save
            </button>
        </div>
      </form>
    </div>
  );
};

export default SetupScreen;