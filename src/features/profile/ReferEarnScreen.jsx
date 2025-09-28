// src/features/profile/ReferEarnScreen.jsx

import React from 'react';

const mockReferrals = [
    { code: 'HUG9D3F', status: 'Your friend has used your referral code' },
    { code: 'KLD7E2G', status: 'Friend booked: You earned 50 AP' },
];

const ReferEarnScreen = () => {
    const referralCode = 'arrow5834';

    return (
        <div className="flex flex-col h-full bg-light-bg p-4 overflow-y-auto">
            
            {/* Banner Section */}
            <div className="bg-primary-dark p-6 rounded-xl shadow-lg mb-6 text-white text-center">
                <h2 className="text-xl font-bold mb-1">Spread ArrowSpeed & we'll reward you</h2>
                <p className="text-sm opacity-80 mb-4">Refer now! Share our app or your code with friends and family. Earn arrowPoints for every successful booking!</p>
                
                {/* Referral Code Box */}
                <div className="flex justify-between items-center bg-white p-3 rounded-lg">
                    <span className="text-lg font-mono text-primary-dark font-semibold">{referralCode}</span>
                    <button 
                        className="py-1 px-4 bg-accent-green text-white rounded-lg font-semibold text-sm hover:bg-green-600"
                        onClick={() => { navigator.clipboard.writeText(referralCode); alert('Code copied!'); }}
                    >
                        Refer Now!
                    </button>
                </div>
            </div>

            {/* Social Icons (Placeholder for sharing) */}
            <div className="flex justify-center space-x-6 text-gray-500 mb-6">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 cursor-pointer">
                        {/* Generic Social Icon Placeholder */}
                        <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    </div>
                ))}
            </div>

            {/* Referral History */}
            <h3 className="text-lg font-bold text-primary-dark mb-3">Your Top Referrals</h3>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
                {mockReferrals.map((ref, index) => (
                    <div key={index} className="flex justify-between items-center p-4 border-b border-gray-100 last:border-b-0">
                        <p className="font-semibold text-dark-grey">{ref.status}</p>
                        <span className="text-sm text-gray-500">+50AP</span>
                    </div>
                ))}
                <div className="text-center p-4 text-sm text-primary-dark font-medium cursor-pointer hover:bg-gray-50">
                    View full history
                </div>
            </div>

            <div className="h-10"></div> {/* Spacer */}
        </div>
    );
};

export default ReferEarnScreen;