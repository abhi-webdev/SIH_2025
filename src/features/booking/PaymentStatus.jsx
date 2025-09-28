// src/components/PaymentStatus.jsx

import React from 'react';

// Icon utility component
const StatusIcon = ({ status }) => {
    let iconClass = 'w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center text-white';
    let icon;

    switch (status) {
        case 'success':
            iconClass += ' bg-green-500';
            icon = <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>; // Checkmark
            break;
        case 'pending':
            iconClass += ' bg-status-yellow';
            icon = <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>; // Info/Warning
            break;
        case 'failed':
            iconClass += ' bg-status-red';
            icon = <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>; // X Mark
            break;
        default:
            icon = null;
    }

    return <div className={iconClass}>{icon}</div>;
};

const PaymentStatus = ({ status, onAction }) => {
    let title, message, actionText, actionType;

    switch (status) {
        case 'success':
            title = 'Payment Successful!';
            message = 'Your payment is processed and your ticket is confirmed.';
            actionText = 'View Ticket';
            actionType = 'viewTicket';
            break;
        case 'pending':
            title = 'Payment Processing';
            message = 'Your payment is processing due to delay. We will reflect it on your account. Please wait before making another try.';
            actionText = 'Go to Bookings';
            actionType = 'goToBookings';
            break;
        case 'failed':
            title = 'Payment Failed';
            message = 'Your payment has failed due to some server problems. Please try again later.';
            actionText = 'Try Again / Go back';
            actionType = 'goBack';
            break;
        default:
            title = 'Unknown Status';
            message = '';
            actionText = 'Go Home';
            actionType = 'goHome';
    }

    return (
        <div className="flex flex-col h-full bg-light-bg text-center p-8 justify-between">
            <div>
                <StatusIcon status={status} />
                <h2 className="text-2xl font-bold text-dark-grey mb-3">{title}</h2>
                <p className="text-base text-gray-600 px-4">{message}</p>
            </div>
            
            {/* Action Button */}
            <div className="w-full mt-12">
                <button
                    onClick={() => onAction(actionType)}
                    className="w-full py-3 text-white font-semibold rounded-lg bg-primary-dark hover:bg-gray-700 transition-colors shadow-lg"
                >
                    {actionText}
                </button>
            </div>
        </div>
    );
};

export default PaymentStatus;