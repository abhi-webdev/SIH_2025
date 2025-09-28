// src/features/profile/AddMoneyModal.jsx

import React, { useState } from 'react';
import ModalWrapper from '../../components/ModalWrapper';

const presetAmounts = [100, 500, 1000]; // Preset values for quick selection

const AddMoneyModal = ({ onClose, onAddMoney }) => {
    const [amount, setAmount] = useState(1000);

    const handlePresetClick = (val) => {
        setAmount(val);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (amount > 0) {
            onAddMoney(amount); // Function to initiate payment
        } else {
            alert('Please enter a valid amount.');
        }
        onClose();
    };

    return (
        <ModalWrapper onClose={onClose} title="Add Money">
            <form onSubmit={handleSubmit}>
                <label htmlFor="amount" className="text-sm font-medium text-gray-700 block mb-2">
                    Enter the amount that should be added to wallet
                </label>
                
                {/* Amount Input */}
                <div className="relative mb-4">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg font-semibold text-gray-600">₹</span>
                    <input 
                        id="amount"
                        type="number" 
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        className="w-full p-3 pl-8 border border-gray-300 rounded-lg text-lg focus:ring-primary-dark focus:border-primary-dark" 
                        required 
                    />
                </div>
                
                {/* Preset Buttons */}
                <div className="flex justify-between space-x-2 mb-6">
                    {presetAmounts.map((val) => (
                        <button
                            key={val}
                            type="button"
                            onClick={() => handlePresetClick(val)}
                            className="flex-1 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                        >
                            +₹{val}
                        </button>
                    ))}
                </div>
                
                {/* Add Button */}
                <button 
                    type="submit" 
                    className="w-full py-3 bg-primary-dark text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition-colors"
                >
                    Add
                </button>
            </form>
        </ModalWrapper>
    );
};

export default AddMoneyModal;