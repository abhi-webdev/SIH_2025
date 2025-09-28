// src/features/profile/OffersScreen.jsx

import React, { useState } from 'react';

const OfferButton = ({ label, isHot = false, isTop = false, isActive, onClick }) => (
    <button
        className={`w-full py-3 mb-2 text-sm font-semibold rounded-lg transition-colors border ${
            isActive ? 'bg-primary-dark text-white border-primary-dark' : 'bg-white text-dark-grey border-gray-200 hover:bg-gray-50'
        }`}
        onClick={onClick}
    >
        {label}
        {isHot && <span className="ml-2 bg-status-red text-white text-xs px-2 py-0.5 rounded-full">HOT</span>}
        {isTop && <span className="ml-2 bg-accent-green text-white text-xs px-2 py-0.5 rounded-full">TOP</span>}
    </button>
);

const OfferDetails = ({ title }) => (
    <div className="bg-white p-4 rounded-xl shadow-md mb-6">
        <h3 className="text-xl font-bold text-dark-grey mb-4">{title}</h3>
        
        <h4 className="text-sm font-semibold text-primary-dark mb-2">Usage</h4>
        <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lörem ipsum fermentum sollicitudin ut netus et.</li>
            <li>Proin gravida enim. Et donec dictumst.</li>
            <li>Elementum tellus in augue in et urna.</li>
        </ul>
        
        <h4 className="text-sm font-semibold text-primary-dark mb-2 mt-4">Terms & Conditions</h4>
        <ul className="text-sm text-gray-700 list-disc list-inside space-y-1">
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lörem ipsum fermentum sollicitudin ut netus et.</li>
            <li>Proin gravida enim. Et donec dictumst.</li>
        </ul>
        
        <button className="w-full mt-6 py-3 bg-accent-green text-white font-semibold rounded-lg hover:bg-green-600">
            Claim Offer
        </button>
    </div>
);

const OffersScreen = () => {
    const [selectedOffer, setSelectedOffer] = useState('TOP_USERS');
    
    return (
        <div className="flex flex-col h-full bg-light-bg">
            
            {/* Tab/Filter Sidebar */}
            <div className="flex h-full">
                <div className="w-1/3 bg-white p-3 border-r border-gray-200 overflow-y-auto">
                    <OfferButton label="TOP 3" isTop={true} isActive={selectedOffer === 'TOP_USERS'} onClick={() => setSelectedOffer('TOP_USERS')} />
                    <OfferButton label="ARGO" isActive={selectedOffer === 'ARGO'} onClick={() => setSelectedOffer('ARGO')} />
                    <OfferButton label="UPI" isActive={selectedOffer === 'UPI'} onClick={() => setSelectedOffer('UPI')} />
                    <OfferButton label="VISA" isHot={true} isActive={selectedOffer === 'VISA'} onClick={() => setSelectedOffer('VISA')} />
                </div>
                
                {/* Details Area */}
                <div className="flex-1 p-4 overflow-y-auto">
                    {selectedOffer === 'TOP_USERS' && <OfferDetails title="TOP 1k USERS WILL GET 15% OFF" />}
                    {selectedOffer === 'ARGO' && <OfferDetails title="ARGO - FLAT 30% FOR FIRST TIME USERS" />}
                    {selectedOffer === 'UPI' && <OfferDetails title="UPI - USE UPI AND EARN UP TO 50 AP" />}
                    {selectedOffer === 'VISA' && <OfferDetails title="VISA CARD USERS GET MIN 25% OFF" />}
                    <div className="h-10"></div>
                </div>
            </div>
        </div>
    );
};

export default OffersScreen;