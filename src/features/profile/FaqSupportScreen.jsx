// src/features/profile/FaqSupportScreen.jsx

import React, { useState } from 'react';

const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm mb-3">
            <button
                className="w-full flex justify-between items-center p-4 text-left font-semibold text-dark-grey hover:bg-gray-50 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                {question}
                <span className={`transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <svg className="w-5 h-5 text-primary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </span>
            </button>
            {isOpen && (
                <div className="p-4 pt-0 text-sm text-gray-700">
                    {answer}
                </div>
            )}
        </div>
    );
};

const FaqSupportScreen = () => {
    return (
        <div className="flex flex-col h-full bg-light-bg p-4 overflow-y-auto">
            
            <input type="text" placeholder="Search for FAQ's..." className="text-input mb-6" />

            <h3 className="text-lg font-bold text-primary-dark mb-3">FAQ's</h3>
            
            {/* Accordion Group */}
            <FaqItem question="How do I change my password?" answer="You can change your password via the Profile > Settings menu. A verification link will be sent to your registered email address." />
            <FaqItem question="How to change payment methods?" answer="Payment methods can be managed in the Wallet section of your profile. You can add, remove, or update credit cards and UPI IDs." />
            <FaqItem question="Issue with recent bookings?" answer="For booking issues, please use the 'Chat with our agent' option below, or call our 24/7 support line." />
            
            {/* Contact Section */}
            <h3 className="text-lg font-bold text-primary-dark mb-3 mt-6">Need more help?</h3>
            <div className="space-y-3">
                <button className="w-full py-3 bg-white border border-gray-300 rounded-lg text-primary-dark font-semibold hover:bg-gray-100">
                    Call us now
                </button>
                <button className="w-full py-3 bg-white border border-gray-300 rounded-lg text-primary-dark font-semibold hover:bg-gray-100">
                    Chat with our agent
                </button>
                <button className="w-full py-3 bg-white border border-gray-300 rounded-lg text-primary-dark font-semibold hover:bg-gray-100">
                    Mail your issue to us
                </button>
            </div>
            
            <div className="h-10"></div> 
        </div>
    );
};

export default FaqSupportScreen;