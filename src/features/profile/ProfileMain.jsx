// src/features/profile/ProfileMain.jsx (FINAL FIX for Duplication)

import React from 'react';
import { LockClosedIcon, UsersIcon, WalletIcon, GiftIcon, InformationCircleIcon, QuestionMarkCircleIcon, PencilIcon } from '@heroicons/react/24/outline'; 
// NOTE: I've removed the unnecessary import of InformationCircleIcon/PencilIcon from the header block 
// since they were part of the redundant title bar.

// --- NavItem Component ---
const NavItem = ({ icon: Icon, label, onClick }) => (
    // ... (NavItem component remains the same)
    <div 
        className="flex items-center justify-between p-4 bg-white border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors"
        onClick={onClick}
    >
        <div className="flex items-center space-x-4">
            <Icon className="w-5 h-5 text-gray-700" />
            <span className="text-gray-700 text-base">{label}</span>
        </div>
        <span className="text-gray-400">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </span>
    </div>
);

// --- ProfileMain Component ---
const ProfileMain = ({ user, onNavigate }) => {
    return (
        <div className="flex flex-col h-full bg-light-bg">
            
            {/* 1. Dark Header Section (Now only contains user profile content) */}
            <div className="bg-primary-dark p-4 pb-20 text-white relative z-10 shadow-lg"> 
                
                {/* 🛑 FIX: REMOVED THE REDUNDANT TOP BAR (Title, Status Bar, Bell Icon) 
                   The parent App.jsx now renders this for consistency. 
                */}
                
                {/* Profile Card Section (Visually embedded in the dark header) */}
                {/* FIX: Added mb-6 back to items-center div to restore top margin if no bell/title is present */}
                <div className="flex items-center pt-2 mb-6"> 
                    {/* Placeholder for Profile Picture */}
                    <div className="w-16 h-16 rounded-full bg-gray-400 border-2 border-white shadow-md mr-4"></div>
                    
                    <div>
                        <h2 className="text-xl font-bold">{user.name}</h2>
                        <p className="text-sm opacity-80">{user.age} Years, {user.gender}</p>
                    </div>
                    {/* Edit Icon */}
                    <button className="ml-auto text-white opacity-80 hover:opacity-100" onClick={() => onNavigate('PROFILE_EDIT')}>
                        <PencilIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* 2. Navigation List (Overlapping Card Effect) */}
            <div className="bg-white rounded-t-3xl -mt-12 pt-4 shadow-xl z-20 flex-1 overflow-y-auto">
                <NavItem icon={LockClosedIcon} label="Bookings" onClick={() => onNavigate('MY_BOOKINGS_LIST')} />
                <NavItem icon={UsersIcon} label="Passenger list" onClick={() => onNavigate('PASSENGER_LIST')} />
                <NavItem icon={WalletIcon} label="Wallet" onClick={() => onNavigate('WALLET')} />
                <NavItem icon={GiftIcon} label="Refer & Earn" onClick={() => onNavigate('REFER_EARN')} />
                <NavItem icon={InformationCircleIcon} label="Offers" onClick={() => onNavigate('OFFERS_LIST')} />
                <NavItem icon={QuestionMarkCircleIcon} label="FAQ's & Support" onClick={() => onNavigate('FAQ_SUPPORT')} />
                <NavItem icon={InformationCircleIcon} label="About Us" onClick={() => onNavigate('ABOUT_US')} />
                
                <div className="h-20"></div> {/* Spacer for Footer */}
            </div>
        </div>
    );
};

export default ProfileMain;