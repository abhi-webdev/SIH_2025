// src/features/profile/WalletScreen.jsx (FIXED with Modal Integration)

import React, { useState } from 'react';
// 👇 FIX 1: Import the AddMoneyModal component
import AddMoneyModal from './AddMoneyModal'; 

const mockTransactions = [
    { date: '29 Sep', type: 'Used for ticket', amount: -650, color: 'text-status-red' },
    { date: '27 Sep', type: 'Money Added', amount: 500, color: 'text-accent-green' },
    { date: '27 Sep', type: 'Used for ticket', amount: -250, color: 'text-status-red' },
];

const WalletScreen = ({ onTopUp }) => {
    // const [topUpAmount, setTopUpAmount] = useState(1000); // Removed: Handled inside modal now
    const [isModalOpen, setIsModalOpen] = useState(false); // 👇 FIX 2: State to control modal visibility
    const currentBalance = 26400.00;

    const handleAddMoney = (amount) => {
        // This function is triggered by the modal.
        // It immediately calls the parent's onTopUp prop, likely navigating to the PaymentFlow.
        if (onTopUp) {
            onTopUp({ type: 'wallet_topup', amount: amount });
        } else {
            console.warn("onTopUp handler is missing!");
        }
        setIsModalOpen(false); // Close the modal
    };

    return (
        <div className="flex flex-col h-full bg-light-bg p-4 overflow-y-auto">
            
            {/* Wallet Balance Card */}
            <div className="bg-accent-green text-white p-6 rounded-xl shadow-lg mb-6">
                <p className="text-sm opacity-80">arrowpoints</p>
                <h2 className="text-4xl font-bold mt-1">₹{currentBalance.toLocaleString()}</h2>
                
                <button 
                    className="flex items-center mt-4 px-4 py-2 bg-white text-accent-green rounded-full font-semibold text-sm shadow-md hover:bg-gray-100"
                    // 👇 FIX 3: Open the modal instead of showing an alert
                    onClick={() => setIsModalOpen(true)}
                >
                    {/* Plus Icon */}
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" /></svg>
                    Add
                </button>
            </div>
            
            {/* 🛑 REMOVED: Redundant manual "Wallet Top-up" section 
                The interaction now flows directly from the main card to the modal. 
            */}

            {/* Recent Transactions */}
            <h3 className="text-lg font-bold text-primary-dark mb-3">Recent Transactions</h3>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
                {mockTransactions.map((tx, index) => (
                    <div key={index} className="flex justify-between items-center p-4 border-b border-gray-100 last:border-b-0">
                        <div>
                            <p className="font-semibold text-dark-grey">{tx.date}</p>
                            <p className="text-xs text-gray-500">{tx.type}</p>
                        </div>
                        <span className={`text-lg font-bold ${tx.color}`}>
                            {tx.amount > 0 ? `+${tx.amount}` : tx.amount}
                        </span>
                    </div>
                ))}
            </div>
            <div className="h-10"></div> {/* Spacer */}

            {/* 👇 FIX 4: Render the modal conditionally */}
            {isModalOpen && (
                <AddMoneyModal 
                    onClose={() => setIsModalOpen(false)} 
                    onAddMoney={handleAddMoney}
                />
            )}
        </div>
    );
};

export default WalletScreen;