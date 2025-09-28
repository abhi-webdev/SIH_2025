// src/components/BookingsScreen.jsx

import React, { useState } from 'react';

// Mock Data for demonstration
const MOCK_BOOKINGS = [
    { id: 'A', status: 'Active', from: 'Chennai CMBT', to: 'Bengaluru BSS', date: 'Today', time: '10:00PM', seats: 2, price: '689+' },
    { id: 'B', status: 'Active', from: 'Chennai CMBT', to: 'Bengaluru BSS', date: 'Tomorrow', time: '10:00PM', seats: 2, price: '689+' },
    { id: 'C', status: 'Completed', from: 'Chennai CMBT', to: 'Bengaluru BSS', date: 'October 27', time: '10:00PM', seats: 3, price: '689+' },
    { id: 'D', status: 'Cancelled', from: 'Chennai CMBT', to: 'Bengaluru BSS', date: 'October 27', time: '10:00PM', seats: 1, price: '450+' },
];

const BookingCard = ({ booking, onSelectTicket }) => {
    let priceColor = 'text-dark-grey';
    if (booking.status === 'Cancelled') priceColor = 'text-status-red opacity-50';
    if (booking.status === 'Active') priceColor = 'text-accent-green';

    return (
        <div 
            className="bg-white p-4 rounded-xl shadow-md mb-3 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => onSelectTicket(booking.id)}
        >
            <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                <span className="text-sm font-semibold text-primary-dark">{booking.from}</span>
                <span className="text-xs text-gray-500">to</span>
                <span className="text-sm font-semibold text-primary-dark">{booking.to}</span>
            </div>
            <div className="flex justify-between items-center pt-2">
                <div className="flex flex-col text-xs text-gray-600">
                    <span className="flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        {booking.date}
                    </span>
                    <span className="flex items-center mt-1">
                        <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        {booking.time}
                    </span>
                </div>
                <div className="flex flex-col items-end">
                    <span className="text-sm text-gray-600">{booking.seats} Persons</span>
                    <span className={`text-lg font-bold ${priceColor}`}>₹{booking.price}</span>
                </div>
            </div>
        </div>
    );
};

const BookingsScreen = ({ onSelectTicket }) => {
    const [activeTab, setActiveTab] = useState('Active'); // Active, Completed, Cancelled

    const filteredBookings = MOCK_BOOKINGS.filter(b => b.status === activeTab);

    return (
        <div className="flex flex-col h-full bg-light-bg">
            
            {/* Tab Navigation */}
            <div className="p-4 bg-white border-b border-gray-200">
                <div className="flex bg-gray-100 p-1 rounded-lg">
                    {['Active', 'Completed', 'Cancelled'].map(tab => (
                        <button
                            key={tab}
                            className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-colors ${
                                activeTab === tab ? 'bg-white shadow-sm text-primary-dark' : 'text-gray-500'
                            }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content List */}
            <div className="flex-1 overflow-y-auto p-4">
                {filteredBookings.length > 0 ? (
                    filteredBookings.map(booking => (
                        <BookingCard key={booking.id} booking={booking} onSelectTicket={onSelectTicket} />
                    ))
                ) : (
                    <div className="text-center p-12 bg-white rounded-xl shadow-md">
                        <h3 className="text-lg font-semibold text-dark-grey mb-4">
                            {activeTab === 'Active' ? 'No active bookings found' : `No ${activeTab.toLowerCase()} bookings.`}
                        </h3>
                        <p className="text-sm text-gray-500 mb-6">
                            We can't carry active bookings for you, but you can still make bookings.
                        </p>
                        <button className="py-2 px-6 bg-primary-dark text-white rounded-lg hover:bg-gray-700 transition-colors">
                            Book Tickets
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookingsScreen;