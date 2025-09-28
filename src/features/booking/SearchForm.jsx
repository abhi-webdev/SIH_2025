// src/features/booking/SearchForm.jsx (FINAL FIX: Reverting to Direct Inputs)

import React, { useState } from 'react';
import { BusFront, Calendar, RefreshCw } from 'lucide-react'; 

const SearchForm = ({ onSearch }) => {
    // Initialize state to EMPTY STRINGS (Crucial for robust input)
    const [from, setFrom] = useState(''); 
    const [to, setTo] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]); 

    // --- HANDLERS ---
    const handleSubmit = (e) => {
        e.preventDefault();
        // Validation check for non-empty fields
        if (from.trim().length > 0 && to.trim().length > 0 && date) {
            onSearch({ from, to, date }); 
        } else {
            alert("Please fill all required fields.");
        }
    };
    
    const handleSwap = () => {
        setFrom(to);
        setTo(from);
    };
    
    // NOTE: The InputGroup sub-component definition is REMOVED.
    // The JSX uses direct input tags now.

    return (
        <div className="relative z-20 mx-4">
            <div className="bg-white p-5 rounded-2xl shadow-xl mt-6"> 
                
                {/* FIX: Removed pt-4 from form and added py-3 margins back to inputs */}
                <form onSubmit={handleSubmit}>
                    
                    {/* 1. FROM Input (Using Direct Input JSX) */}
                    <div className="relative flex items-center border-b border-gray-200 py-3">
                        <BusFront className="w-5 h-5 text-gray-500 mr-3" />
                        <input 
                            type="text"
                            placeholder="From: Select city" 
                            value={from} 
                            onChange={(e) => setFrom(e.target.value)}
                            // Explicitly set maxLength to prevent 1-char bug
                            maxLength={256}
                            className="w-full p-1 text-base focus:outline-none bg-transparent placeholder-gray-500"
                        />
                    </div>

                    {/* Swap Button */}
                    <button 
                        type="button"
                        className="absolute z-30 top-[4.5rem] right-7 transform -translate-y-1/2 bg-primary-dark p-2 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
                        onClick={handleSwap}
                    >
                        <RefreshCw className="w-4 h-4 text-white" />
                    </button>
                    
                    {/* 2. TO Input (Using Direct Input JSX) */}
                    {/* Note: last:border-b-0 class is now irrelevant on this item, but structure is fine */}
                    <div className="relative flex items-center border-b border-gray-200 py-3"> 
                        <BusFront className="w-5 h-5 text-gray-500 mr-3" />
                        <input 
                            type="text"
                            placeholder="To: Select city" 
                            value={to} 
                            onChange={(e) => setTo(e.target.value)}
                            maxLength={256}
                            className="w-full p-1 text-base focus:outline-none bg-transparent placeholder-gray-500"
                        />
                        <span className="text-sm text-gray-400 font-semibold">BAG</span>
                    </div>
                    
                    {/* 3. DATE Input (Using Direct Input JSX) */}
                    <div className="relative flex items-center py-3"> 
                        <Calendar className="w-5 h-5 text-gray-500 mr-3" />
                        <input 
                            type="date" 
                            value={date} 
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full p-1 text-base text-gray-700 focus:outline-none bg-transparent appearance-none"
                        />
                        {/* Empty span for calendar icon alignment */}
                        <span className="text-sm text-gray-400 font-semibold"></span>
                    </div>
                    
                    {/* Search Button */}
                    <button 
                        type="submit" 
                        className="w-full mt-6 py-3 bg-accent-green text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-150"
                    >
                        Search Buses
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SearchForm;