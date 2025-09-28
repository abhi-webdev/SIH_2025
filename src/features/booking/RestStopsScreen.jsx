// src/components/RestStopsScreen.jsx

import React, { useState } from 'react';
import MobileHeader from '../../components/MobileHeader';

// Mock Data
const MOCK_REVIEWS = [
    { name: 'SamiraPaul', rating: 5, comment: 'Great stop! Clean washrooms and quick service. Recommended for the Thiruvalur stop.' },
    { name: 'LoremIpsum', rating: 4, comment: 'Food was decent, but it was a bit crowded. The rest area was clean though.' },
];

const RestStopsScreen = ({ stop, onRate }) => {
    const [userRating, setUserRating] = useState(0);

    return (
        <div className="flex flex-col h-full bg-light-bg">
            <MobileHeader title="Rest Stops" showBack={true} />
            
            <div className="flex-1 overflow-y-auto p-4">
                
                {/* Current Stop Info Card */}
                <div className="bg-white p-4 rounded-xl shadow-md mb-6">
                    <h3 className="text-xl font-bold text-dark-grey">Stop #1: Thiruvalur Cafe</h3>
                    <p className="text-sm text-gray-500 mt-1">7:05AM, Thiruvalur</p>
                    
                    {/* Overall Rating Bar */}
                    <div className="flex items-center mt-3 pt-3 border-t border-gray-100">
                        <span className="text-2xl font-bold text-primary-dark mr-2">4.3</span>
                        <span className="text-sm text-gray-600">(1.9k views)</span>
                    </div>
                    
                    {/* Rating Breakdown Bars (Simplified) */}
                    <div className="mt-2 space-y-1 text-sm">
                        {[5, 4, 3, 2, 1].map(r => (
                            <div key={r} className="flex items-center">
                                <span className="w-4 text-gray-600 mr-2">{r}</span>
                                <div className="flex-1 h-2 bg-gray-200 rounded-full">
                                    <div 
                                        className="h-2 bg-accent-green rounded-full" 
                                        style={{ width: `${r * 15}%` }} // Mock width
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* User Rating Section */}
                <div className="bg-white p-4 rounded-xl shadow-md mb-6">
                    <h3 className="text-lg font-bold text-dark-grey mb-3">Your Rating</h3>
                    <div className="flex justify-center text-4xl text-status-yellow cursor-pointer">
                        {[1, 2, 3, 4, 5].map(star => (
                            <span 
                                key={star}
                                onClick={() => setUserRating(star)}
                                className={`transition-transform hover:scale-110 ${star <= userRating ? 'text-status-yellow' : 'text-gray-300'}`}
                            >
                                ⭐
                            </span>
                        ))}
                    </div>
                    <button 
                        className="w-full mt-4 py-2 bg-primary-dark text-white rounded-lg disabled:opacity-50"
                        disabled={userRating === 0}
                        onClick={() => onRate(userRating)}
                    >
                        Submit Rating
                    </button>
                </div>
                
                {/* Reviews Section */}
                <div className="space-y-4">
                    <h3 className="text-lg font-bold text-dark-grey mb-3">Reviews</h3>
                    {MOCK_REVIEWS.map((review, index) => (
                        <div key={index} className="bg-white p-4 rounded-xl shadow-md">
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-semibold text-primary-dark">{review.name}</span>
                                <span className="text-xs text-status-yellow">{review.rating} ⭐</span>
                            </div>
                            <p className="text-sm text-gray-700">{review.comment}</p>
                        </div>
                    ))}
                </div>
                <div className="h-10"></div> {/* Spacer */}
            </div>
        </div>
    );
};

export default RestStopsScreen;