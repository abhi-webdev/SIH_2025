// src/components/PaymentFlow.jsx

import React, { useState } from 'react';
import MobileHeader from '../../components/MobileHeader';
import PaymentScreen from './PaymentScreen';
import PaymentStatus from './PaymentStatus';

const FLOW_STATE = {
    DETAILS: 'DETAILS',
    STATUS: 'STATUS',
};

const PaymentFlow = ({ bookingDetails, onPaymentComplete }) => {
    const [currentFlowState, setCurrentFlowState] = useState(FLOW_STATE.DETAILS);
    const [paymentStatus, setPaymentStatus] = useState(null); // 'success', 'pending', 'failed'

    const handleProcessPayment = (method) => {
        // --- API Call Simulation ---
        console.log(`Attempting payment with: ${method}`);
        
        // Simulate an API call delay
        setTimeout(() => {
            // Randomly determine the payment result for demonstration
            const results = ['success', 'pending', 'failed'];
            const randomStatus = results[Math.floor(Math.random() * results.length)];
            
            setPaymentStatus(randomStatus);
            setCurrentFlowState(FLOW_STATE.STATUS);
        }, 1500);
    };

    const handleStatusAction = (actionType) => {
        if (actionType === 'goBack' || actionType === 'goHome') {
             // If failed, allow user to try again or navigate away
            setCurrentFlowState(FLOW_STATE.DETAILS); 
        } else {
             // If success/pending, inform the main app to change state (e.g., to 'MY_BOOKINGS')
            onPaymentComplete(paymentStatus);
        }
    };

    const renderContent = () => {
        if (currentFlowState === FLOW_STATE.DETAILS) {
            return (
                <PaymentScreen 
                    bookingDetails={bookingDetails} 
                    onProcessPayment={handleProcessPayment} 
                />
            );
        }
        
        if (currentFlowState === FLOW_STATE.STATUS) {
            return (
                <PaymentStatus 
                    status={paymentStatus} 
                    onAction={handleStatusAction} 
                />
            );
        }
        return null;
    };

    return (
        <div className="flex flex-col flex-1 h-full">
            <MobileHeader 
                title={currentFlowState === FLOW_STATE.DETAILS ? 'Payment' : 'Payment Status'} 
                showBack={true}
                // Back button logic needs to be complex here (e.g., confirm exit during payment)
                onBack={() => alert('Are you sure you want to cancel the payment?')} 
            />
            <div className="flex-1 overflow-y-auto">
                {renderContent()}
            </div>
        </div>
    );
};

export default PaymentFlow;