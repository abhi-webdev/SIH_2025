// src/components/MobileHeader.jsx (FINAL FIX for Duplication)

import React from 'react';
// Ensure you have installed @heroicons/react
import { BellIcon } from '@heroicons/react/24/outline'; 

const MobileHeader = ({ title = 'BusMitra', showBack = false, onBack, children }) => {
    
    // Check if the children prop (Logout button) is present
    const hasChildren = React.Children.count(children) > 0;

    const renderStatusBar = (textColor = 'text-white') => (
        <div className={`flex justify-between items-center px-4 pt-1 pb-0.5 text-xs ${textColor}`}>
            <span className="font-semibold">9:41</span>
            <div className="flex items-center space-x-1">
                {/* Wi-Fi and Battery Icons */}
                <span className="font-medium">📶</span> 
                <span className="font-medium">🔋</span>
            </div>
        </div>
    );
    
    if (showBack) {
        // Standard, shallow header (used by Ticket Details, Profile Sub-screens)
        return (
            <header className="w-full bg-white shadow-sm border-b border-gray-100">
                {renderStatusBar('text-gray-800')}
                <div className="flex items-center p-4">
                    <button onClick={onBack} className="mr-3 text-gray-800 hover:text-primary-dark transition-colors">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    </button>
                    <h1 className="text-xl font-semibold">{title}</h1>
                    <div className="flex-grow flex justify-end">{children}</div>
                </div>
            </header>
        );
    }

    // Home/Profile Header (Deep Teal, Tall, Branded)
    return (
        <header className="w-full bg-primary-dark text-white shadow-lg relative z-10">
            {renderStatusBar('text-white')}
            <div className="flex justify-between items-start p-4 pb-2">
                <div>
                    <h1 className="text-2xl font-bold">{title}</h1>
                    
                    {/* Subtitle logic is correct: Hides only on Profile page */}
                    {title !== 'Profile' && (
                        <p className="text-sm opacity-80 mt-1">Book your bus!</p>
                    )}
                </div>
                
                {/* 🎯 FIX: CONDITIONAL ACTION SLOT */}
                <div className="flex items-center space-x-4">
                    {/* If children (Logout button) is present, we only render the children.
                       If children is NOT present (e.g., on an Offers tab), we render the Bell Icon. 
                    */}
                    {hasChildren ? children : <BellIcon className="w-6 h-6 text-white" />}
                </div>
            </div>
        </header>
    );
};

export default MobileHeader;