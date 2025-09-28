// src/components/PaymentScreen.jsx

import React, { useState } from 'react';

// Mock Ticket Data (for bill breakdown)
const MOCK_TICKET_BREAKDOWN = [
    { label: 'Tickets', amount: 689 },
    { label: 'Insurance', amount: 20 },
    { label: 'Taxes & Fees', amount: 20 },
    { label: 'Processing Fee (2%)', amount: 20 },
];

const PaymentScreen = ({ bookingDetails, onProcessPayment }) => {
    const totalAmount = bookingDetails.total;
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [promoCode, setPromoCode] = useState('');
    
    // Calculate total based on mock breakdown
    const totalBill = MOCK_TICKET_BREAKDOWN.reduce((sum, item) => sum + item.amount, 0);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate a delay for payment processing
        onProcessPayment(paymentMethod);
    };

    const renderPaymentInputs = () => {
        switch (paymentMethod) {
            case 'card':
                return (
                    <div className="space-y-4">
                        <input type="text" placeholder="Card Number" className="text-input" required />
                        <div className="flex space-x-2">
                            <input type="text" placeholder="Expiry (MM/YY)" className="text-input w-1/2" required />
                            <input type="password" placeholder="CVV" className="text-input w-1/2" maxLength="4" required />
                        </div>
                        <input type="text" placeholder="Card Holder Name" className="text-input" required />
                    </div>
                );
            case 'wallet':
                return (
                    <div className="space-y-4">
                        <select className="text-input" defaultValue="Paytm">
                            <option value="Paytm">Paytm Wallet</option>
                            <option value="PhonePe">PhonePe Wallet</option>
                            <option value="Mobikwik">Mobikwik</option>
                        </select>
                        <p className="text-xs text-gray-500">You will be redirected to the wallet page for authorization.</p>
                    </div>
                );
            case 'upi':
                return (
                    <div className="space-y-4">
                        <input type="text" placeholder="Enter UPI ID (e.g., name@bank)" className="text-input" required />
                        <p className="text-xs text-gray-500">A payment request will be sent to your UPI app.</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col h-full bg-light-bg">
            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto p-4">
                
                {/* Payment Details Box */}
                <div className="bg-white p-4 rounded-xl shadow-md mb-6">
                    <div className="flex justify-between items-center pb-3 border-b border-gray-100 mb-3">
                        <h3 className="text-lg font-bold text-primary-dark">Payment Details</h3>
                        <span className="text-xl font-bold text-status-red">₹{totalBill}</span>
                    </div>
                    {MOCK_TICKET_BREAKDOWN.map((item, index) => (
                        <div key={index} className="flex justify-between text-sm text-dark-grey py-1">
                            <span>{item.label}</span>
                            <span className="font-medium">₹{item.amount}</span>
                        </div>
                    ))}
                    <div className="flex justify-between text-lg font-bold text-primary-dark pt-3 border-t border-gray-200 mt-3">
                        <span>Total</span>
                        <span>₹{totalBill}</span>
                    </div>
                </div>

                {/* Promo Code Input */}
                <div className="mb-6">
                    <h3 className="text-sm font-semibold text-dark-grey mb-2">Promo code</h3>
                    <div className="flex space-x-2">
                        <input 
                            type="text" 
                            placeholder="Enter Promo code" 
                            className="text-input flex-1"
                            value={promoCode}
                            onChange={(e) => setPromoCode(e.target.value)}
                        />
                        <button type="button" className="bg-gray-200 text-dark-grey px-4 rounded-lg font-medium hover:bg-gray-300">
                            Apply
                        </button>
                    </div>
                </div>

                {/* Payment Method Selector */}
                <h3 className="text-lg font-bold text-primary-dark mb-4">Pay with:</h3>
                <div className="bg-white p-4 rounded-xl shadow-md space-y-4 mb-6">
                    {/* Payment Method Toggle Buttons/Tabs */}
                    <div className="flex space-x-2 border-b pb-4">
                        {['card', 'upi', 'wallet'].map(method => (
                            <button
                                key={method}
                                type="button"
                                onClick={() => setPaymentMethod(method)}
                                className={`text-sm font-semibold px-4 py-2 rounded-lg transition-colors capitalize ${
                                    paymentMethod === method ? 'bg-primary-dark text-white shadow-md' : 'bg-gray-100 text-dark-grey hover:bg-gray-200'
                                }`}
                            >
                                {method === 'card' ? 'Credit/Debit' : method}
                            </button>
                        ))}
                    </div>

                    {/* Dynamic Payment Input Section */}
                    <div className="pt-2">
                        {renderPaymentInputs()}
                    </div>
                </div>
                
                <div className="h-10"></div> {/* Spacer */}
            </div>

            {/* Sticky Pay Button Footer */}
            <div className="sticky bottom-0 w-full bg-white p-4 shadow-2xl border-t border-gray-200">
                <button 
                    type="submit"
                    className="w-full py-3 text-white font-semibold rounded-lg bg-accent-green hover:bg-green-600 transition-colors"
                >
                    Pay ₹{totalBill}
                </button>
            </div>
        </form>
    );
};

export default PaymentScreen;