// src/components/TicketDetailsScreen.jsx

import React from 'react';
import MobileHeader from '../../components/MobileHeader';

// Mock Ticket Detail Data
const MOCK_TICKET_DETAIL = {
    busName: 'Acella',
    pnr: 'T-123456',
    from: 'Chennai CMBT',
    to: 'Bengaluru BSS',
    date: 'Oct 10, 5:00AM',
    arrival: 'Oct 10, 11:15PM',
    passengers: '2 Adults',
    ticketNo: 'AD45J94',
    passengerName: 'Samaira, Virender',
    totalFare: '689',
    restStops: 1,
    status: 'CONFIRMED',
    delayMinutes: 30,
    stops: [
        { time: '7:05AM', location: 'Thiruvalur', details: 'Coffee & Snacks' },
        { time: '9:00AM', location: 'Mysore', details: 'Lunch Break' },
    ]
};

const TicketDetailsScreen = ({ ticketId, onCancel, onChat, onViewRestStops }) => {
    const ticket = MOCK_TICKET_DETAIL; // Use the mock data for now

    return (
        <div className="flex flex-col h-full bg-primary-dark">
            <MobileHeader title="Ticket Details" showBack={true} />
            
            <div className="flex-1 overflow-y-auto">
                {/* Scrollable Content (White Card & Sections) */}
                
                {/* 1. Ticket Information Card */}
                <div className="bg-white mx-4 mt-4 p-5 rounded-t-xl shadow-lg relative">
                    <h3 className="text-xl font-bold text-dark-grey mb-1">{ticket.busName}</h3>
                    <p className="text-xs text-gray-500 mb-4">Bus booking redefined</p>
                    
                    {/* Route */}
                    <div className="flex justify-between items-center text-sm font-semibold mb-4">
                        <span className="text-primary-dark">{ticket.from}</span>
                        <div className="flex items-center text-gray-400 font-normal text-xs">
                            <span className="mx-2">~{ticket.restStops} stop</span>
                        </div>
                        <span className="text-primary-dark">{ticket.to}</span>
                    </div>

                    {/* Barcode/Details Table */}
                    <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-700 border-t pt-4">
                        <div><span className="font-semibold">Passengers:</span> {ticket.passengers}</div>
                        <div><span className="font-semibold">Ticket No:</span> {ticket.ticketNo}</div>
                        <div><span className="font-semibold">Name:</span> {ticket.passengerName}</div>
                        <div><span className="font-semibold">Fare:</span> ₹{ticket.totalFare}</div>
                        <div><span className="font-semibold">Ticket Status:</span> <span className="text-accent-green font-bold">{ticket.status}</span></div>
                    </div>
                </div>
                
                {/* 2. Barcode Stub & Tear Line */}
                <div className="bg-white mx-4 rounded-b-xl relative overflow-hidden pb-4 mb-4">
                    <div className="relative h-4 bg-light-bg overflow-hidden">
                        {/* Simulated Tear/Perforation Line */}
                        <div className="absolute inset-0 flex justify-between">
                            {[...Array(20)].map((_, i) => (
                                <div key={i} className="w-2 h-4 bg-primary-dark rounded-b-full"></div>
                            ))}
                        </div>
                    </div>
                    {/* Barcode Placeholder */}
                    <div className="flex justify-center items-center h-16 w-full px-8 pt-4">
                        <div className="w-full h-8 bg-gray-300"></div> 
                    </div>
                    <p className="text-xs text-center text-gray-500 mt-2">Show this to the bus crew</p>
                </div>
                
                {/* 3. Track Bus Section */}
                <div className="bg-primary-dark mx-4 p-4 rounded-xl shadow-lg mb-4 text-white">
                    <h3 className="text-lg font-bold mb-3">Track your bus</h3>
                    
                    {/* Map Placeholder */}
                    <div className="w-full h-40 bg-gray-700 rounded-lg flex items-center justify-center text-xs text-gray-300">
                        
                    </div>
                    
                    {/* Delay Status */}
                    <p className="text-sm font-semibold mt-3 text-status-yellow">
                        Bus is delayed by {ticket.delayMinutes}mins
                    </p>
                </div>
                
                {/* 4. Rest Stops Section */}
                <div className="bg-primary-dark mx-4 p-4 rounded-xl shadow-lg mb-4 text-white">
                    <h3 className="text-lg font-bold mb-3">Rest Stops</h3>
                    {ticket.stops.map((stop, index) => (
                        <div key={index} className="flex justify-between items-center bg-gray-700 p-3 rounded-lg mb-2">
                            <span className="font-semibold text-sm">{stop.time} {stop.location}</span>
                            <button 
                                className="text-xs text-accent-green hover:text-green-300"
                                onClick={onViewRestStops}
                            >
                                More &rarr;
                            </button>
                        </div>
                    ))}
                </div>

                {/* 5. Help/Action Buttons (Sticky-like placement) */}
                <div className="mx-4 pb-4">
                    <h3 className="text-lg font-bold text-white mb-3">Help</h3>
                    <div className="flex space-x-3">
                        <button 
                            className="flex-1 py-3 bg-white text-primary-dark font-semibold rounded-lg hover:bg-gray-100"
                            onClick={onChat}
                        >
                            Chat with us
                        </button>
                        <button 
                            className="flex-1 py-3 bg-status-red text-white font-semibold rounded-lg hover:bg-red-600"
                            onClick={onCancel}
                        >
                            Cancel Ticket
                        </button>
                    </div>
                </div>

                {/* Footer Copyright */}
                <p className="text-center text-xs text-gray-400 mt-4 pb-4">
                    HAPPY JOURNEY! <br/> All rights reserved by Arrowspeed
                </p>
            </div>
        </div>
    );
};

export default TicketDetailsScreen;