// src/components/MobileFooter.jsx (FIXED)

import React from 'react';

// Simplified Icon Placeholder
const NavIcon = ({ isActive, name, onClick }) => (
    // FIX 1: Added onClick handler to NavIcon props
    <div 
        className={`flex flex-col items-center p-1 cursor-pointer transition-colors ${isActive ? 'text-primary-dark' : 'text-gray-500 hover:text-primary-dark'}`}
        onClick={onClick} // Bind onClick to the container
    >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={
                name === 'Home' ? 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' : // Home
                name === 'Bookings' ? 'M16 11V7a4 4 0 00-8 0v4M5 9h14v12H5z' : // Bookings (Ticket)
                // FIX 2: Check for 'Profile' name to use the person icon
                name === 'Profile' ? 'M12 4.354a4 4 0 110 5.292 4 4 0 010-5.292zM15 15h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2a2 2 0 012-2h2m0-4h6' : // Profile
                'M7 16h10M7 12h10M7 8h10' // Default to a general icon (e.g., Offers)
            } />
        </svg>
        <span className="text-xs mt-1">{name}</span>
    </div>
);

const MobileFooter = ({ activeTab, onTabChange }) => {
    return (
        <footer className="w-full bg-white border-t border-gray-200 p-2 shadow-inner sticky bottom-0">
            {/* FIX 3: Use justify-between and add padding for better spacing on 4 items */}
            <div className="flex justify-between px-4"> 
                <NavIcon 
                    name="Home" 
                    isActive={activeTab === 'home'} 
                    onClick={() => onTabChange('home')} 
                />
                <NavIcon 
                    name="Bookings" 
                    isActive={activeTab === 'bookings'} 
                    onClick={() => onTabChange('bookings')} 
                />
                <NavIcon 
                    name="Offers" 
                    isActive={activeTab === 'offers'} 
                    onClick={() => onTabChange('offers')} 
                />
                {/* FIX 4: Added the new Profile Navigation Item */}
                <NavIcon 
                    name="Profile" 
                    isActive={activeTab === 'profile'} 
                    onClick={() => onTabChange('profile')} 
                />
            </div>
        </footer>
    );
};

export default MobileFooter;